// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, avoid_unnecessary_containers, avoid_print

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import './navbar.dart';

class RidePage extends StatefulWidget {
  const RidePage({super.key});

  @override
  State<RidePage> createState() => _RidePageState();
}

class _RidePageState extends State<RidePage> {
  final Completer<GoogleMapController> _controller = Completer();

  static const CameraPosition _initailPosition = CameraPosition(
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
        )),
  ];

  @override
  void initState() {
    super.initState();
    myMarkers.addAll(markerList);
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
      setState(() {

      });
    });
  }

 
  Widget buildGoogleMap(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: GoogleMap(
          initialCameraPosition: _initailPosition,
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
        
      
      ],
    ),

    );
     
    // 
  }
}
