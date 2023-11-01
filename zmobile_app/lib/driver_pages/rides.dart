// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, avoid_unnecessary_containers, avoid_print, sized_box_for_whitespace

import 'dart:async';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import './navbar.dart';

// Represents data for a ride card
class RideCardData {
  final String school;          // School name
  final String numberOfChildren; // Number of children
  final double latitude;        // Latitude
  final double longitude;       // Longitude

  RideCardData({
    required this.school,
    required this.numberOfChildren,
    required this.latitude,
    required this.longitude,
  });
}

// Widget to display a ride card
class RideCard extends StatelessWidget {
  final String school;          // School name
  final String numberOfChildren; // Number of children
  final double latitude;        // Latitude
  final double longitude;       // Longitude

  const RideCard({
    required this.school,
    required this.numberOfChildren,
    required this.latitude,
    required this.longitude,
  });

  // Function to handle the "Ride" icon button click
  void handleRideButtonClick(BuildContext context) {
    // Access latitude and longitude and perform the desired action
    print('Ride clicked for school: $school, Lat: $latitude, Long: $longitude');
  }

  // Function to handle the "View" icon button click and show a popup
  void handleViewButtonClick(BuildContext context) {
    bool pickEnabled = true;
    bool dropEnabled = false;

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return StatefulBuilder(
          builder: (context, setState) {
            return AlertDialog(
              title: Text(school),
              content: Column(
                children: <Widget>[
                  childrenList(pickEnabled, setState, dropEnabled, context),
                ],
              ),
              actions: <Widget>[
                ElevatedButton(
                  child: Text('Close'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            );
          },
        );
      },
    );
  }

  ListTile childrenList(bool pickEnabled, StateSetter setState, bool dropEnabled, BuildContext context) {
    return ListTile(
      title: Text('Nimal'),
      trailing: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          IconButton(
            icon: Icon(Icons.thumb_up), // Icon for picking
            color: pickEnabled ? Colors.green : Colors.grey,
            tooltip: 'Pick',  // Tooltip when hovering over the button
            onPressed: () {
              if (pickEnabled) {
                setState(() {
                  pickEnabled = false;
                  dropEnabled = true;
                });
              }
            },
          ),
          IconButton(
            icon: Icon(Icons.thumb_down), // Icon for dropping
            color: dropEnabled ? Colors.blue : Colors.grey,
            tooltip: 'Drop',  // Tooltip when hovering over the button
            onPressed: () {
              if (dropEnabled) {
                print('Dropped Nimal');
              }
            },
          ),
          IconButton(
            icon: Icon(Icons.warning),  // Icon for missed
            color: Colors.orange,
            tooltip: 'Missed',  // Tooltip when hovering over the button
            onPressed: () {
              notifyMissed(context);
            },
          ),
        ],
      ),
    );
  }

  Future<dynamic> notifyMissed(BuildContext context) {
    return showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('Notify Missed Nimal?'),
          actions: <Widget>[
            ElevatedButton(
              onPressed: () {
                print('Notify');
                Navigator.of(context).pop();
              },
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(Colors.red),
              ),
              child: Text('Notify'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Cancel'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              school,
              style: TextStyle(fontSize: 14),
            ),
            Text(
              numberOfChildren,
              style: TextStyle(fontSize: 12),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                IconButton(
                  icon: Icon(Icons.directions_car), // Ride icon
                  onPressed: () {
                    handleRideButtonClick(context);
                  },
                ),
                IconButton(
                  icon: Icon(Icons.visibility), // View icon
                  onPressed: () {
                    handleViewButtonClick(context);
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}


// Main page widget
class RidePage extends StatefulWidget {
  const RidePage({Key? key}) : super(key: key);

  @override
  State<RidePage> createState() => _RidePageState();
}

class _RidePageState extends State<RidePage> {
  final Completer<GoogleMapController> _controller = Completer();

  static const CameraPosition _initialPosition = CameraPosition(
    target: LatLng(6.9022172, 79.8612785),
    zoom: 14,
  );

  final List<Marker> myMarkers = [];
  final List<Marker> markerList = const [
    Marker(
      markerId: MarkerId('First'),
      position: LatLng(6.9022172, 79.8612785),
      infoWindow: InfoWindow(
        title: "UCSC",
      ),
    ),
  ];

  List<RideCardData> rideCardDetails = [];

  @override
  void initState() {
    super.initState();
    myMarkers.addAll(markerList);
    packData();

    // Fetch RideCard details from the server when the widget is initialized
    fetchRideCardDetails().then((details) {
      setState(() {
        rideCardDetails = details;
      });
    });
  }

  Future<Position> getUserLocation() async {
    await Geolocator.requestPermission()
        .then((value) {})
        .onError((error, stackTrace) {
      print('error$error');
    });

    return await Geolocator.getCurrentPosition();
  }

  Future<List<RideCardData>> fetchRideCardDetails() async {
    final url = Uri.parse(
      'http://10.0.2.2:5000/edugo/driver/schoolChildren/DRV001'
    );
    final response = await http.get(url);
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);

      final List<RideCardData> rideCardDetails = data.map((item) {
        return RideCardData(
          school: item['school_name'],
          numberOfChildren: item['children_count'],
          latitude: item['latitude'],
          longitude: item['longitude'],
        );
      }).toList();
      
      return rideCardDetails;
    } else {
      throw Exception('Failed to load RideCard details');
    }
  }

  packData() {
    getUserLocation().then((value) async {
      print("My Location");
      print('${value.latitude} ${value.longitude}');

      myMarkers.add(
        Marker(
          markerId: MarkerId('Second'),
          position: LatLng(value.latitude, value.longitude),
          infoWindow: InfoWindow(
            title: 'My Location',
          ),
        ),
      );
      CameraPosition cameraPosition = CameraPosition(
        target: LatLng(value.latitude, value.longitude),
        zoom: 14,
      );

      final GoogleMapController controller = await _controller.future;

      controller.animateCamera(CameraUpdate.newCameraPosition(cameraPosition));
      setState(() {});
    });
  }

  Widget buildGoogleMap(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: GoogleMap(
          initialCameraPosition: _initialPosition,
          markers: Set<Marker>.of(myMarkers),
          onMapCreated: (GoogleMapController controller) {
            _controller.complete(controller);
          },
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: Column(
        children: [
          Expanded(
            child: buildGoogleMap(context),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: rideCardDetails.map((detail) {
                  return Container(
                    width: 150,
                    height: 120,
                    child: RideCard(
                      school: detail.school,
                      numberOfChildren: detail.numberOfChildren,
                      latitude: detail.latitude,
                      longitude: detail.longitude,
                    ),
                  );
                }).toList(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
