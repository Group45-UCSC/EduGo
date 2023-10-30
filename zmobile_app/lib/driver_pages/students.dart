// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, avoid_print

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import './navbar.dart';

class StudentPage extends StatefulWidget {
  const StudentPage({super.key});

  @override
  State<StudentPage> createState() => _StudentPageState();
}

class _StudentPageState extends State<StudentPage> {
  // Data variables
  List<Map<String, dynamic>> data = [];
  List<Map<String, dynamic>> filteredData = [];
  final String driverId = 'DRV001';


  // Data organized by tab
  Map<String, List<Map<String, dynamic>>> tabData = {
    'morning': [],
    'afternoon': [],
  };


  // Controller for search input
  TextEditingController searchController = TextEditingController();

  @override
  void initState() {
    super.initState();

    // Fetch initial data
    fetchData();
  }


  // Fetch children details from an API
  Future<void> fetchData() async {
    try {
      final result = await getChildrenDetails(driverId);

      // Organize data by ride shift type
      for (var item in result) {
        final rideShiftType = item['ride_shift_type'];
        if (rideShiftType == 'morning' || rideShiftType == 'both') {
          tabData['morning']?.add(item);
        }
        if (rideShiftType == 'afternoon' || rideShiftType == 'both') {
          tabData['afternoon']?.add(item);
        }
      }

      setState(() {
        data = result;

        // Initialize filtered data
        filteredData = data;
      });
    } catch (e) {
      print('Error fetching data: $e');
    }
  }


  // Fetch children details using HTTP
  Future<List<Map<String, dynamic>>> getChildrenDetails(String driverId) async {
    final url = Uri.parse(
        'http://10.0.2.2:5000/edugo/driver/childrenDetails/$driverId');

    final response = await http.get(url);

    if (response.statusCode == 200) {
      final List<dynamic> responseData = json.decode(response.body);
      return responseData.cast<Map<String, dynamic>>();
    } else {
      throw Exception('Failed to load data');
    }
  }


  // Function to perform search and update the displayed data
  void performSearch(String query) {
    if (query.isEmpty) {
      setState(() {
        // Reset to the original data
        filteredData = data;
      });
      return;
    }

    // Filtering Data
    setState(() {
      filteredData = data
      .where((item) =>
        item['child_name']
          .toLowerCase()
          .contains(query.toLowerCase()) ||
        item['school_name']
          .toLowerCase()
          .contains(query.toLowerCase()) ||
        item['pickup_location']
          .toLowerCase()
          .contains(query.toLowerCase()))
      .toList();
    });
  }

  
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: DefaultTabController(
        length: tabData.keys.length,
        child: Column(
          children: [
            // Title
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Text(
                'Children Details',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            SizedBox(height: 20),
            // Tabs for organizing data
            TabBar(
              isScrollable: true,
              labelColor: Colors.black,
              unselectedLabelColor: Colors.black,
              indicator: BoxDecoration(
                color: Colors.orange,
              ),
              tabs: tabData.keys.map((tab) => Tab(text: tab)).toList(),
            ),
            SizedBox(height: 10),
            // Search input
            searchData(),

            // Table displaying children data
            tableData(),
          ],
        ),
      ),
    );
  }


  // Widget for displaying data in a tabbed view
  Expanded tableData() {
    return Expanded(
      child: TabBarView(
        children: tabData.keys.map((tab) {
          return SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              columns: const <DataColumn>[
                DataColumn(label: Text('Name')),
                DataColumn(label: Text('School')),
                DataColumn(label: Text('Pickup/Drop Address')),
              ],
              rows: filteredData.map((item) {
                return DataRow(cells: <DataCell>[
                  DataCell(Text(item['child_name'].toString())),
                  DataCell(Text(item['school_name'].toString())),
                  DataCell(Text(item['pickup_location'].toString())),
                ]);
              }).toList(),
            ),
          );
        }).toList(),
      ),
    );
  }


  // Widget for the search input
  Padding searchData() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Expanded(
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(30),
                color: Colors.grey[200],
              ),
              child: TextField(
                controller: searchController,
                onChanged: (query) {
                  performSearch(query);
                },
                decoration: InputDecoration(
                  hintText: 'Search',
                  prefixIcon: Icon(Icons.search),
                  border: InputBorder.none,
                  contentPadding: EdgeInsets.all(16),
                ),
              ),
            ),
          ),
          SizedBox(width: 8),
        ],
      ),
    );
  }
}
