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
          Icon(Icons.notifications_none_outlined, color: Colors.black),
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
                  Text('Driver1@gmail.com',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 14,
                      )),
                ],
              ),
            ),
            ListTile(
              leading: Icon(Icons.home_outlined, color: Colors.black),
              title: Text('Home'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, '/home');
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
          ],
        ),
      ),
      body: child,
    );
  }
}
