// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, non_constant_identifier_names, prefer_const_constructors_in_immutables

import 'package:flutter/material.dart';
import './navbar.dart';
// import 'package:google_maps_flutter/google_maps_flutter.dart'; // Import the Google Maps package

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
              _buildCard(context, 'Child 2'),
              _buildCard(context, 'Child 3'),
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
          child: Column(
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
        ),
      ),
    );
  }


}

class MapPage extends StatelessWidget {
  final String locationName;

  MapPage({required this.locationName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Map: $locationName'), backgroundColor: Color(0xFF999999)),
      body: GoogleMap(
        // Implement Google Maps
      ),
    );
  }
}

GoogleMap() {
}
