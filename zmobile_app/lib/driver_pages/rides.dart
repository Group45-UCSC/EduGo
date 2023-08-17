// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, avoid_unnecessary_containers

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
            flex: 4,  
            child: Image.asset('assets/images/ss2.png'),
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
            child: Scrollable(
              axisDirection: AxisDirection.right,
              viewportBuilder: (context, offset) {
                return SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: DataTable(
                    columns: const <DataColumn>[
                      DataColumn(label: Text('Action')),
                      DataColumn(label: Text('Name')),
                      DataColumn(label: Text('Destination Address')),
                    ],
                    rows: <DataRow>[
                      DataRow(cells: <DataCell>[
                        DataCell(Container(
                          child: Row(
                            children: [
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Color.fromARGB(255, 11, 199, 58),
                                ),
                                child: Text('Pick'),
                              ),
                              SizedBox(width: 8),  
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.orange,
                                ),
                                child: Text('Drop'),
                              ),
                              SizedBox(width: 8),
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.red,
                                ),
                                child: Text('Missed'),
                              ),
                            ],
                          ),
                        )),
                        DataCell(Text('Nilmi Disanayaka')),
                        DataCell(Text(
                          'No. 12, Highway Road, Colombo 05',
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        )),
                      ]),
                      DataRow(cells: <DataCell>[
                        DataCell(Container(
                          child: Row(
                            children: [
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Color.fromARGB(255, 11, 199, 58),
                                ),
                                child: Text('Pick'),
                              ),
                              SizedBox(width: 8),  
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.orange,
                                ),
                                child: Text('Drop'),
                              ),
                              SizedBox(width: 8),
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.red,
                                ),
                                child: Text('Missed'),
                              ),
                            ],
                          ),
                        )),
                      
                        DataCell(Text('Amanda Perera')),
                        DataCell(Text(
                          '12B, wijerama Road, Colombo 07',
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        )),
                        
                      ]),
                      DataRow(cells: <DataCell>[
                        DataCell(Container(
                          child: Row(
                            children: [
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Color.fromARGB(255, 11, 199, 58),
                                ),
                                child: Text('Pick'),
                              ),
                              SizedBox(width: 8),                              
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.orange,
                                ),
                                child: Text('Drop'),
                              ),
                              SizedBox(width: 8),
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.red,
                                ),
                                child: Text('Missed'),
                              ),
                            ],
                          ),
                        )),
                      
                        DataCell(Text('Malithi Silva')),
                        DataCell(Text(
                          '4B, Kirulapana',
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        )),
                        
                      ]),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
