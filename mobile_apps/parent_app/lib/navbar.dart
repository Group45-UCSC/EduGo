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
          Icon(Icons.person_2_outlined, color: Colors.black),
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
              child: Image.asset(
                'assets/images/logo.png',
                height: 10,
                width: 20,
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
          ],
        ),
      ),
      body: child,
    );
  }
}
