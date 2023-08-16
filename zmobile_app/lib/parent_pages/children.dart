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
    child: Stack(
      children: [
        Container(
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
        Positioned(
          top: 8,
          right: 8,
          child: Row(
            children: [
              IconButton(
                onPressed: () {
                  _showUpdateForm(context);
                },
                icon: Icon(Icons.edit),
              ),
              IconButton(
                onPressed: () {
                  _showDeleteConfirmation(context);
                },
                icon: Icon(Icons.delete),
              ),
            ],
          ),
        ),
      ],
    ),
  );
}

  void _showUpdateForm(BuildContext context) {
    String updatedName = '';
    String updatedHomeLocation = '';
    String updatedSchool = '';

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Update Child Details'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                onChanged: (value) {
                  updatedName = value;
                },
                decoration: InputDecoration(labelText: 'Name'),
              ),
              TextField(
                onChanged: (value) {
                  updatedHomeLocation = value;
                },
                decoration: InputDecoration(labelText: 'Home Location'),
              ),
              TextField(
                onChanged: (value) {
                  updatedSchool = value;
                },
                decoration: InputDecoration(labelText: 'School'),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context); // Close the dialog
              },
              child: Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                // Handle update action
                Navigator.pop(context); // Close the dialog
              },
              child: Text('Update'),
            ),
          ],
        );
      },
    );
  }

  void _showDeleteConfirmation(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Confirm Deletion'),
          content: Text('Are you sure you want to delete this child?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context); // Close the dialog
              },
              child: Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                // Handle delete action
                Navigator.pop(context); // Close the dialog
              },
              child: Text('Delete'),
            ),
          ],
        );
      },
    );
  }

}
