// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import './navbar.dart';
import 'location_tracking.dart';


class ParentHomePage extends StatelessWidget {
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
              _buildChildrenCard(context),
              _buildPaymentsCard(context),
            ],
          ),
          SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => LocationPage(),
                ),
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.orange,
            ),
            child: Text(
              'View Locations',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
          SizedBox(height: 20),
          Expanded(
            flex: 2,
            child: Container(
              padding: EdgeInsets.all(20),
              height: 30, 
              color: Colors.blue, // Placeholder color
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

  Widget _buildChildrenCard(BuildContext context) {
    return Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.5 - 10,
        height: MediaQuery.of(context).size.height * 0.25 - 40,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              'Registered Children',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            // Childre namses
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Child 1'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Child 2'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Child 3'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPaymentsCard(BuildContext context) {
    double totalPayments = 7500.0;
    return Card(
      elevation: 4,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.5 - 10,
        height: MediaQuery.of(context).size.height * 0.25 - 40,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              'Total Payments',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            // Set align right to push text to the right
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Amount: \$${totalPayments.toStringAsFixed(2)}'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Due Date: 05/09/2023'),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Status: Ongoing'),
            ),
          ],
        ),
      ),
    );
  }
}
