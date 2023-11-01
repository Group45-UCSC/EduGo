// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, non_constant_identifier_names, prefer_const_constructors_in_immutables

import 'dart:async';
import 'package:flutter/material.dart';
import './navbar.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart' as google_maps;


class LocationPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Text(
              'Locations',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          SizedBox(height: 20),
          Column(
            children: [
              _buildCard(context, 'Child 1'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildCard(BuildContext context, String locationName) {
    double cardWidth = MediaQuery.of(context).size.width - 15; // Subtract padding
    return GestureDetector(
      onTap: () {
        // Navigate to the map page when a card is clicked
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => MapPage(locationName: locationName),
          ),
        );
      },
      child: Card(
        elevation: 4,
        child: Container(
          width: cardWidth,
          height: cardWidth * 0.4,
          padding: const EdgeInsets.all(16.0),
          child: Stack(
            alignment: Alignment.center,
            children: [
              Column(
                children: [
                  Text(
                    locationName,
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 8),
                  Text('Tap to view on location'),
                ],
              ),
              Positioned(
                bottom: 0,
                right: 0,
                child: Icon(
                  Icons.location_on,
                  color: Colors.red,
                  size: 24,
                ),
              ),

              Positioned(
              bottom: 0,
              left: 0,
              child: Text(
                'Maharagama, Highlevel Road',
                style: TextStyle(fontSize: 12, color: Colors.grey),
              ),
            ),
            ],
          ),
        ),
      ),
    );
  }
}

class MapPage extends StatefulWidget {
  final String locationName;

  MapPage({required this.locationName});

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {

  final Completer<google_maps.GoogleMapController> _controller = Completer();

  static const google_maps.CameraPosition _initailPosition = google_maps.CameraPosition(
    target: google_maps.LatLng(6.9022172,79.8612785),
    zoom: 14,
  );

  final List<google_maps.Marker> myMarker = [];
  final List<google_maps.Marker> markerList = const [
    google_maps.Marker(
        markerId: google_maps.MarkerId('First'),
        position: google_maps.LatLng(6.9022172, 79.8612785),
        infoWindow: google_maps.InfoWindow(
          title: "UCSC",
        )),
  ];

  @override
  void initState() {
    super.initState();
    myMarker.addAll(markerList);
    packData();
  }

  Future<Position> getUserLocation() async {
    await Geolocator.requestPermission()
        .then((value) {})
        .onError((error, stackTrace) {
      print('error$error');
    });

    return await Geolocator.getCurrentPosition();
  }

  packData() {
    getUserLocation().then((value) async {
      print("My Location");
      print('${value.latitude} ${value.longitude}');

      myMarker.add(
        google_maps.Marker(
          markerId: google_maps.MarkerId('Second'),
          position: google_maps.LatLng(value.latitude, value.longitude),
          infoWindow: google_maps.InfoWindow(
            title: 'My Location',
          ),
        ),
      );
      google_maps.CameraPosition cameraPosition = google_maps.CameraPosition(
        target: google_maps.LatLng(value.latitude, value.longitude),
        zoom: 14,
      );

      final google_maps.GoogleMapController controller = await _controller.future;

      controller.animateCamera(google_maps.CameraUpdate.newCameraPosition(cameraPosition));
      setState(() {

      });
    });
  }

  Widget buildGoogleMap(BuildContext context) {
    return Scaffold(
      body: google_maps.GoogleMap(
        initialCameraPosition:  _initailPosition,
        markers: Set<google_maps.Marker>.of(myMarker),
        onMapCreated: (google_maps.GoogleMapController controller) {
          _controller.complete(controller);
        },
      ),
      
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Map: ${widget.locationName}'), backgroundColor: Color(0xFF999999)),
      body: Center(
        child: buildGoogleMap(context),
      ),
    );
  }
}
