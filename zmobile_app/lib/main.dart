// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables
import 'package:flutter/material.dart';
import 'driver_pages/home.dart';
import 'driver_pages/rides.dart';
import 'driver_pages/students.dart';
import 'driver_pages/financial.dart';
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
        '/home': (context) => HomePage(),
        '/school_ride': (context) => RidePage(),
        '/financial': (context) => FinancialPage(),
        '/students': (context) => StudentPage(),
      },
    );
  }
}
