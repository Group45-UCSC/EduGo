// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables
import 'package:flutter/material.dart';
import 'pages/home_page.dart';
import 'pages/ride_page.dart';
import 'pages/financial_page.dart';
import 'pages/support_page.dart';
import 'pages/feedback_page.dart';
import 'pages/login.dart';
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
        '/support': (context) => SupportPage(),
        '/feedback': (context) => FeedbackPage(),
      },
    );
  }
}
