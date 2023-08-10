// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import './navbar.dart';

class ChildrenPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: SingleChildScrollView (
        child: Center(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: Text(
                  'Children Details',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              SizedBox(height: 20),
              _buildChildCard(
                context,
                'Child 1',
                'Home Location 1',
                'School 1',
                '123-456-7890',
                'assets/images/child.png',
              ),
              _buildChildCard(
                context,
                'Child 2',
                'Home Location 2',
                'School 2',
                '987-654-3210',
                'assets/images/child.png',
              ),
              // Add more child cards as needed
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildChildCard(BuildContext context, String name, String homeLocation, String school, String phoneNumber, String imagePath) {
    return Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width - 40, // Adjust width based on your layout
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Align(
              alignment: Alignment.center,
              child: Image.asset(imagePath, width: 200, height: 200),
            ),
            SizedBox(height: 8),
            Text(
              name,
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 4),
            Text('Home Location: $homeLocation'),
            SizedBox(height: 4),
            Text('School: $school'),
            SizedBox(height: 4),
            Text('Phone Number: $phoneNumber'),
          ],
        ),
      ),
    );
  }
}
