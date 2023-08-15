// ignore_for_file: use_key_in_widget_constructors, prefer_const_constructors, prefer_const_literals_to_create_immutables, prefer_const_constructors_in_immutables

import 'package:flutter/material.dart';

class Navbar extends StatelessWidget {
  final Widget child;
  Navbar({required this.child});

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
          Icon(Icons.notifications_none_outlined, color: Colors.white),
          SizedBox(width: 12),
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
                    'Kawya Sandamini',
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
              title: Text('Student details'),
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
      body: child,
    );
  }
}
