// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, avoid_print, sized_box_for_whitespace

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import './navbar.dart';

class ChildrenPage extends StatefulWidget {
  const ChildrenPage({Key? key});

  @override
  State<ChildrenPage> createState() => _ChildrenPageState();
}

class _ChildrenPageState extends State<ChildrenPage> {
  // Data variables
  List<Map<String, dynamic>> data = [];
  final String parentId = 'PR0001';

  @override
  void initState() {
    super.initState();
    // Fetch child data when the page is initialized
    viewChildChildren(parentId).then((childData) {
      setState(() {
        data = childData ?? [];
      });
    }).catchError((error) {
      print('Error: $error');
    });
  }


  // Fetch children details using HTTP
  Future<List<Map<String, dynamic>>?> viewChildChildren(String parentId) async {
    try {
      // Define the URL for fetching child data
      final url = Uri.parse(
        'http://10.0.2.2:5000/edugo/parent/children/view/$parentId'
      );

      // Send an HTTP GET request to the defined URL
      final response = await http.get(url);

      if (response.statusCode == 200) {
        // Decode the response body and cast it to a list of maps
        final List<dynamic> responseData = json.decode(response.body);
        return responseData.cast<Map<String, dynamic>>();
      } else {
        // If the HTTP request fails, throw an exception
        throw Exception('Failed to load data');
      }
    } catch (e) {
      // Handle network or other exceptions
      print('Exception: $e');
      return null;
    }
  }


  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: SingleChildScrollView(
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
              
              // Check if there is no child data available
              data.isEmpty
              ? Center(child: Text('No children available'))
              // If child data is available, create a scrollable list view
              : ListView.builder(
                shrinkWrap: true,
                itemCount: data.length,
                itemBuilder: (context, index) {
                  final child = data[index];
                  // Build a card for each child
                  return _buildChildCard(
                    context,
                    child['child_name'] ?? 'No Name',
                    child['pickup_location'] ?? 'No Pickup Location',
                    child['school_name'] ?? 'No School Name',
                    child['emergency_contact_num'] ?? 'No Phone Number',
                    child['image'],
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
  
  
  // Build a child card widget
  Widget _buildChildCard(BuildContext context, String name, String homeLocation, String school, String phoneNumber, String? imageUrl) {
    return Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width - 5,
        height: MediaQuery.of(context).size.height / 2 - 100,
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Align(
                  alignment: Alignment.center,
                  child: imageUrl != null && imageUrl.isNotEmpty
                  ? Image.network(
                    imageUrl,
                    width: 100,
                    height: 100,
                    
                    // In case of an image loading error, display a default image
                    errorBuilder: (context, error, stackTrace) => Image.asset(
                      'assets/images/child.png',
                      width: 100,
                      height: 100,
                    ),
                  )
                  
                  // If no image URL is available, display a default image
                  : Image.asset(
                    'assets/images/child.png',
                    width: 100,
                    height: 100,
                  ),
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
      ),
    );
  }

  
  // Show a dialog for updating child details
  void _showUpdateForm(BuildContext context) {
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
                },
                decoration: InputDecoration(labelText: 'Name'),
              ),
              TextField(
                onChanged: (value) {
                },
                decoration: InputDecoration(labelText: 'Home Location'),
              ),
              TextField(
                onChanged: (value) {
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


  // Show a dialog for deleting child details
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
