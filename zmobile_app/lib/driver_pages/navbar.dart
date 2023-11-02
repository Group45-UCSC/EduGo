// ignore_for_file: use_key_in_widget_constructors, prefer_const_constructors, prefer_const_literals_to_create_immutables, prefer_const_constructors_in_immutables

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';

class NotificationPopup {
  static showNotificationPopup(BuildContext context, List<String> childList) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return SimpleDialog(
          title: Text('Notification'),
          children: <Widget>[
            SingleChildScrollView(
              child: Container(
                child: ListView(
                  shrinkWrap: true,
                  children: <Widget>[
                    for (var childName in childList)
                      ListTile(
                        title: Text(childName),
                        trailing: Row(
                          children: [
                            IconButton(
                              icon: Icon(Icons.thumb_up),
                              color: Colors.green,
                              tooltip: 'Accept',
                              onPressed: () {
                              // Handle Accept action
                              Navigator.of(context).pop();
                              },
                            ),
                            IconButton(
                              icon: Icon(Icons.thumb_down),
                              color: Colors.red,
                              tooltip: 'Reject',
                              onPressed: () {
                              // Handle Reject action
                              Navigator.of(context).pop();
                            },
                            ),
                          ],
                        ),
                      ),
                  ],
                      
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}
class Navbar extends StatefulWidget {
  final Widget child;
  Navbar({required this.child});

  @override
  State<Navbar> createState() => _NavbarState();
}

class _NavbarState extends State<Navbar> {
  List<String> childList = [];

  @override
  void initState() {
    super.initState();
    fetchRideRequests(); // Fetch ride requests when the widget is initialized
  }

 Future<void> fetchRideRequests() async {
  final url =
      Uri.parse('http://10.0.2.2:5000/edugo/driver/rideRequest/DRV001');

  try {
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      
      // Extract child names from the response
      List<String> childNames = [];
      for (var rideRequest in data) {
        childNames.add(rideRequest['child_name']);
      }

      // Update the state with the child names
      setState(() {
        childList = childNames;
      });
    } else {
      throw Exception('Failed to fetch ride requests.');
    }
  } catch (error) {
    print('Error fetching ride requests: $error');
  }
}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFF999999),
        actions: [
          SizedBox(width: 40),
          Image.asset(
            'assets/images/logo.png',
            height: 10,
          ),
          Spacer(),
          IconButton(
            icon: Icon(Icons.notifications_none_outlined, color: Colors.white),
            onPressed: () {
              // Show the notification popup
              NotificationPopup.showNotificationPopup(
                context,
                childList,
              );
            },
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                color: Color(0xFF999999),
              ),
              // profile picture
              child: Column(
                children: [
                  CircleAvatar(
                    radius: 40,
                    backgroundImage: AssetImage('assets/images/profile.png'),
                  ),
                  Text(
                    'Kawya Jayasiri',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                    ),
                  ),
                  SizedBox(height: 4),
                  Text('driver1@gmail.com',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 14,
                      )),
                ],
              ),
            ),
            ListTile(
              leading: Icon(Icons.home_outlined, color: Colors.black),
              title: Text('Home page'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, '/home_d');
              },
            ),
            ListTile(
              leading: Icon(Icons.directions_bus_outlined, color: Colors.black),
              title: Text('School Ride'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, '/school_ride');
              },
            ),
            ListTile(
              leading: Icon(Icons.phone_callback_outlined, color: Colors.black),
              title: Text('Children details'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, '/students');
              },
            ),
            // payments
            ListTile(
              leading: Icon(Icons.attach_money_outlined, color: Colors.black),
              title: Text('Financial'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, '/financial');
              },
            ),
            ListTile(
              leading: Icon(Icons.logout_outlined, color: Colors.black),
              title: Text('Logout'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamedAndRemoveUntil(
                    context, '/', (route) => false);
              },
            ),
            Divider(), // Add a divider to separate ListTiles and contact numbers
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Text(
                'Contact Us:',
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Text(
                'Customer Support: 123-456-7890\nEmail: edudo@gmail.com',
                style: TextStyle(fontSize: 14),
              ),
            ),
          ],
        ),
      ),
      body: widget.child,
    );
  }
}
