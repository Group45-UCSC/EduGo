// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables
import 'package:flutter/material.dart';
import 'driver_pages/home.dart';
import 'driver_pages/rides.dart';
import 'driver_pages/students.dart';
import 'driver_pages/financial.dart';
import 'parent_pages/home.dart';
import 'parent_pages/location_tracking.dart';
import 'parent_pages/children.dart';
import 'parent_pages/payment.dart';

import 'login.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(fontFamily: 'Poppins'),
      initialRoute: '/',
      routes: {
        '/': (context) => Login(),
        // Driver
        '/home_d': (context) => DriverHomePage(),
        '/school_ride': (context) => RidePage(),
        '/students': (context) => StudentPage(),
        '/financial': (context) => FinancialPage(),
        // Parent
        '/home_p': (context) => ParentHomePage(),
        '/location': (context) => LocationPage(),
        '/children': (context) => ChildrenPage(),
        '/payment': (context) => PaymentPage(),
      },
    );
  }
}
