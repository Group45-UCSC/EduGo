// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, use_key_in_widget_constructors, library_private_types_in_public_api, prefer_collection_literals, prefer_const_declarations, prefer_final_fields, prefer_interpolation_to_compose_strings, avoid_print

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import './navbar.dart';
import 'financial.dart';
import 'rides.dart';
import 'students.dart';

class DriverHomePage extends StatefulWidget {
  const DriverHomePage({Key? key}) : super(key: key);
  @override
  _DriverHomePageState createState() => _DriverHomePageState();
}

class _DriverHomePageState extends State<DriverHomePage> {
  final Completer<GoogleMapController> _controller = Completer();

  static const CameraPosition _kGooglePlex = CameraPosition(
    target: LatLng(6.9022172,79.8612785),
    zoom: 15,
  );

  final List<Marker> _markers = const <Marker>[
    Marker(
        markerId: MarkerId('1'),
        position: LatLng(6.9022172,79.8612785),
        infoWindow: InfoWindow(title: 'UCSC'))
  ];

  Future<void> loadData() async{
    getUserCurrentLocation().then((value) async {
      print('My location');
      print(value.latitude.toString() + " " + value.longitude.toString());

      _markers.add(Marker(
          markerId: MarkerId('2'),
          position: LatLng(value.latitude, value.longitude),
          infoWindow: InfoWindow(title: 'My Current')));

      final CameraPosition cameraPosition = CameraPosition(
        zoom: 15,
        target: LatLng(value.latitude, value.longitude)
      );

      final GoogleMapController controller = await _controller.future;

      controller.animateCamera(CameraUpdate.newCameraPosition(cameraPosition));
      setState(() {});
    });
  }

  Future<Position> getUserCurrentLocation() async {
    await Geolocator.requestPermission()
        .then((value) {

        }).onError((error, stackTrace) {
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
      body: GoogleMap(
        initialCameraPosition: _kGooglePlex,
        markers: Set<Marker>.of(_markers),
        onMapCreated: (GoogleMapController controller) {
          _controller.complete(controller);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          getUserCurrentLocation().then((value) async {
            print('My current location');
            print(value.latitude.toString() + " " + value.longitude.toString());

            _markers.add(Marker(
                markerId: MarkerId('2'),
                position: LatLng(value.latitude, value.longitude),
                infoWindow: InfoWindow(title: 'Initial location')));

            CameraPosition cameraPosition = CameraPosition(
                zoom: 14, target: LatLng(value.latitude, value.longitude));

            final GoogleMapController controller = await _controller.future;

            controller.animateCamera(
              CameraUpdate.newCameraPosition(cameraPosition));
              setState(() {});
          });
        },
        child: Icon(Icons.local_activity),
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
                      Text('Morning: 6:00 AM      Evening: 2:00 PM'),
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
              Text(
                '15',
                style: TextStyle(fontSize: 16),
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
