// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, use_key_in_widget_constructors, library_private_types_in_public_api, prefer_collection_literals, prefer_const_declarations, prefer_final_fields, prefer_interpolation_to_compose_strings, avoid_print

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import './navbar.dart';
import 'financial.dart';
import 'rides.dart';
import 'students.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DriverHomePage extends StatefulWidget {
  const DriverHomePage({Key? key}) : super(key: key);
  @override
  _DriverHomePageState createState() => _DriverHomePageState();
}

class _DriverHomePageState extends State<DriverHomePage> {
  final Completer<GoogleMapController> _controller = Completer();
  String childCountString = '';
  int childCount = 0;
  String morningRideTimeData = '';
  String noonRideTimeData = '';

  static const CameraPosition _initailPosition = CameraPosition(
    target: LatLng(6.9022172, 79.8612785),
    zoom: 14,
  );

  final List<Marker> myMarker = [];
  final List<Marker> markerList = const [
    Marker(
        markerId: MarkerId('First'),
        position: LatLng(6.9022172, 79.8612785),
        infoWindow: InfoWindow(
          title: "UCSC",
        )),
  ];

  @override
  void initState() {
    super.initState();
    myMarker.addAll(markerList);
    packData();
    fetchChildCount();
    fetchRoutingTimes();
  }

  Future<void> fetchChildCount() async {
    final url = Uri.parse('http://10.0.2.2:5000/edugo/driver/childrens/DRV001');

    try {
      final response = await http.get(url);
      if (response.statusCode == 200) {
        final List<dynamic> dataList = json.decode(response.body);

        if (dataList.isNotEmpty) {
          final data = dataList.first;
          if (data is Map<String, dynamic> && data.containsKey('count')) {
            childCountString = data['count'].toString();
            childCount = int.tryParse(childCountString) ?? 0;

            setState(() {});
          } else {
            print('childCount not found in the JSON response');
          }
        } else {
          print('No data found in the JSON response');
          // Handle the case where the response is empty
        }
      } else {
        // Handle the error case
        print(
            'Failed to fetch child count. Status code: ${response.statusCode}');
      }
    } catch (e) {
      // Handle exceptions
      print('Error fetching child count: $e');
    }
  }

  Future<Position> getUserLocation() async {
    await Geolocator.requestPermission()
        .then((value) {})
        .onError((error, stackTrace) {
      print('error$error');
    });

    return await Geolocator.getCurrentPosition();
  }

  Future<void> fetchRoutingTimes() async {
    final url = Uri.parse('http://10.0.2.2:5000/edugo/driver/times/DRV001');

    try {
      final response = await http.get(url);
      if (response.statusCode == 200) {
        final List<dynamic> routingTimesData = json.decode(response.body);

        if (routingTimesData.isNotEmpty) {
          final Map<String, dynamic> routingTimes = routingTimesData.first;

          // Extract the morning and noon ride times
          final String morningRideTime = routingTimes['time_morning_ride'];
          final String noonRideTime = routingTimes['time_noon_ride'];
          print(routingTimesData);
          // Update the UI with the routing times data
          setState(() {
            morningRideTimeData = morningRideTime;
            noonRideTimeData = noonRideTime;
          });

          print(morningRideTime);
          print(noonRideTime);
        } else {
          print('No routing times data found in the JSON response');
        }
      } else {
        print(
            'Failed to fetch routing times data. Status code: ${response.statusCode}');
      }
    } catch (e) {
      print('Error fetching routing times data: $e');
    }
  }

  packData() {
    getUserLocation().then((value) async {
      print("My Location");
      print('${value.latitude} ${value.longitude}');

      myMarker.add(
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
      body: GoogleMap(
        initialCameraPosition: _initailPosition,
        markers: Set<Marker>.of(myMarker),
        onMapCreated: (GoogleMapController controller) {
          _controller.complete(controller);
        },
      ),
    );
  }

//  --------------------------------------------
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Text(
              'Home Page',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),

          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(
                child: _buildStudentsCard(context),
              ),
              Expanded(
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.grey[200],
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: Colors.grey),
                  ),
                  padding: EdgeInsets.all(16),
                  child: Column(
                    children: [
                      Text(
                        'Route Start Times',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        'Morning: $morningRideTimeData      Evening: $noonRideTimeData'
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),

          _buildPaymentsCard(context),
          // SizedBox(height: 20),

          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => RidePage(),
                ),
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.orange,
            ),
            child: Text(
              'Start Route',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
          SizedBox(height: 20),
          Expanded(
            child: buildGoogleMap(context),
          ),
        ],
      ),
    );
  }

  Widget _buildStudentsCard(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => StudentPage(),
          ),
        );
      },
      child: Card(
        elevation: 4,
        child: Container(
          // width: 20,
          height: 100,
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              Text(
                'No of Children',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 8),
              Align(
                alignment: Alignment.center,
                child: Text('$childCount'), // Display the fetched child count
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildPaymentsCard(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => FinancialPage(),
          ),
        );
      },
      child: Card(
        elevation: 4,
        child: Container(
          width: MediaQuery.of(context).size.width - 50,
          height: MediaQuery.of(context).size.height * 0.25 - 20,
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              Text(
                'Payments',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 8),
              Align(
                alignment: Alignment.centerLeft,
                child: Text('Total Payment: Rs. 35000.00'),
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text('Paid: Rs. 25000.00'),
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text('Due: Rs. 10000.00'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
