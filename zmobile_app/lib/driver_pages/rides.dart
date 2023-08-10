// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import './navbar.dart';

class RidePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Text(
              'Ride Page',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
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
          Padding(
            padding: EdgeInsets.all(20.0),
            child: Text(
              'Ongoing Rides',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Expanded(
            flex: 3,
            child: SingleChildScrollView(
              child: DataTable(
                columns: const <DataColumn>[
                  DataColumn(label: Text('Student')),
                  DataColumn(label: Text('Destination Address')),
                ],
                rows: const <DataRow>[
                  DataRow(cells: <DataCell>[
                    DataCell(Text('Nilmi Disanayaka')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('Kawya Sandamini')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
