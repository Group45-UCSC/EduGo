// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import './navbar.dart';
import 'rides.dart';

class DriverHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Text(
              'Dashboard',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildStudentsCard(context),
              _buildPaymentsCard(context),
            ],
          ),
          SizedBox(height: 20),

          Container(
            decoration: BoxDecoration(
              color: Colors.grey[200],
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: Colors.grey),
            ),
            padding: EdgeInsets.all(16),
            child: Column(
              children: [
                Text(
                  'Route Start Times',
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 8),
                Text('Morning: 6:00 AM    |  Evening: 2:00 PM'),
              ],
            ),
          ),

          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => RidePage(),
                ),
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.orange,
            ),
            child: Text(
              'Start Route',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
          SizedBox(height: 20),
          
          Expanded(
            flex: 2,
            child: Container(
              padding: EdgeInsets.all(20),
              height: 30,
              color: Colors.green, // Placeholder color
              child: Center(
                child: Text(
                  'Map',
                  style: TextStyle(
                    fontSize: 18,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStudentsCard(BuildContext context) {
    return Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.35 - 10,
        height: MediaQuery.of(context).size.height * 0.25 - 20,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              'No of Students',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            Text(
              '15',
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPaymentsCard(BuildContext context) {
    return Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.65 - 10,
        height: MediaQuery.of(context).size.height * 0.25 - 20,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              'Payments',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Total Payment: Rs. 35000.00'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Paid: Rs. 25000.00'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Due: Rs. 10000.00'),
            ),
          ],
        ),
      ),
    );
  }
}
