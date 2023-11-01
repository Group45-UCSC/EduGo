// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, sized_box_for_whitespace, library_private_types_in_public_api, avoid_print, prefer_interpolation_to_compose_strings, annotate_overrides

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart' as google_maps;
import './navbar.dart';
import 'children.dart';
import 'payment.dart';
import 'location_tracking.dart';

class ParentHomePage extends StatefulWidget {
  const ParentHomePage({Key? key}) : super(key: key);

  @override
  _ParentHomePageState createState() => _ParentHomePageState();
}

class _ParentHomePageState extends State<ParentHomePage> {
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

  Widget build(BuildContext context) {
  return Navbar(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
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
        // SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildChildrenCard(context),
            _buildPaymentsCard(context),
          ],
        ),
        SizedBox(height: 20),
        ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => LocationPage(),
              ),
            );
          },
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.orange,
          ),
          child: Text(
            'View Locations',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: Colors.black,
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

Widget _buildChildrenCard(BuildContext context) {
  return GestureDetector(
    onTap: () {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => ChildrenPage(),
        ),
      );
    },
    child: Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.5 - 10,
        height: MediaQuery.of(context).size.height * 0.25 - 40,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              'Registered Children',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            // Childre namses
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Child 1'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Child 2'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Child 3'),
            ),
          ],
        ),
      ),
    ),
  );
}

Widget _buildPaymentsCard(BuildContext context) {
  double totalPayments = 7500.0;
  return GestureDetector(
    onTap: () {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => PaymentPage(),
        ),
      );
    },
    child: Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.5 - 10,
        height: MediaQuery.of(context).size.height * 0.25 - 40,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              'Total Payments',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            // Set align right to push text to the right
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Amount: \$${totalPayments.toStringAsFixed(2)}'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Due Date: 05/09/2023'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Status: Ongoing'),
            ),
          ],
        ),
      ),
    ),
  );
}


}


