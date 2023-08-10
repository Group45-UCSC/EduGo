// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import './navbar.dart';

class StudentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Text(
              'Student Details',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: SingleChildScrollView(
              child: DataTable(
                columns: const <DataColumn>[
                  DataColumn(label: Text('ID')),
                  DataColumn(label: Text('Student')),
                  DataColumn(label: Text('School')),
                  DataColumn(label: Text('Home Address')),
                ],
                rows: const <DataRow>[
                  DataRow(cells: <DataCell>[
                    DataCell(Text('1')),
                    DataCell(Text('Nilmi Disanayaka')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('2')),
                    DataCell(Text('Kawya Sandamini')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('3')),
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('4')),
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('5')),
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('6')),
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('7')),
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('8')),
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('Anula Vidyalaya')),
                    DataCell(Text('No. 12, Highway Road, Colombo 05')),
                  ]),
                  DataRow(cells: <DataCell>[
                    DataCell(Text('9')),
                    DataCell(Text('Kavindu Tharaka')),
                    DataCell(Text('Anula Vidyalaya')),
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
