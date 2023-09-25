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

  static const google_maps.CameraPosition _kGooglePlex = google_maps.CameraPosition(
    target: google_maps.LatLng(7, 80),
    zoom: 10,
  );

  final List<google_maps.Marker> _markers = <google_maps.Marker>[
    google_maps.Marker(
        markerId: google_maps.MarkerId('1'),
        position: google_maps.LatLng(7, 80),
        infoWindow: google_maps.InfoWindow(title: 'My Location'))
  ];

  Future<void> loadData() async{
    getUserCurrentLocation().then((value) async {
      print('My location');
      print(value.latitude.toString() + " " + value.longitude.toString());

      _markers.add(google_maps.Marker(
          markerId: google_maps.MarkerId('2'),
          position: google_maps.LatLng(value.latitude, value.longitude),
          infoWindow: google_maps.InfoWindow(title: 'My Current')));

      final google_maps.CameraPosition cameraPosition = google_maps.CameraPosition(
        zoom: 10,
        target: google_maps.LatLng(value.latitude, value.longitude)
      );

      final google_maps.GoogleMapController controller = await _controller.future;

      controller.animateCamera(google_maps.CameraUpdate.newCameraPosition(cameraPosition));
      setState(() {});
    });
  }

  Future<Position> getUserCurrentLocation() async {
    await Geolocator.requestPermission()
        .then((value) {})
        .onError((error, stackTrace) {
      print("error" + error.toString());
    });

    return await Geolocator.getCurrentPosition();
  }

  @override
  void initState() {
    super.initState();
    loadData();
  }

  Widget buildGoogleMap(BuildContext context) {
    return Scaffold(
      body: google_maps.GoogleMap(
        initialCameraPosition: _kGooglePlex,
        markers: Set<google_maps.Marker>.of(_markers),
        onMapCreated: (google_maps.GoogleMapController controller) {
          _controller.complete(controller);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          getUserCurrentLocation().then((value) async {
            print('My current location');
            print(value.latitude.toString() + " " + value.longitude.toString());

            _markers.add(google_maps.Marker(
                markerId: google_maps.MarkerId('2'),
                position: google_maps.LatLng(value.latitude, value.longitude),
                infoWindow: google_maps.InfoWindow(title: 'Initial location')));

            google_maps.CameraPosition cameraPosition = google_maps.CameraPosition(
                zoom: 14, target: google_maps.LatLng(value.latitude, value.longitude));

            final google_maps.GoogleMapController controller = await _controller.future;

            controller.animateCamera(
              google_maps.CameraUpdate.newCameraPosition(cameraPosition));
              setState(() {});
          });
        },
        child: Icon(Icons.local_activity),
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


