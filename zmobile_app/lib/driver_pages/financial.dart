// ignore_for_file: use_key_in_widget_constructors, prefer_const_constructors, prefer_const_literals_to_create_immutables, sized_box_for_whitespace, avoid_print

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import './navbar.dart';

class FinancialPage extends StatefulWidget {
  const FinancialPage({super.key});

  @override
  State<FinancialPage> createState() => _FinancialPageState();
}

class _FinancialPageState extends State<FinancialPage> {
  // Data variables
  List<Map<String, dynamic>> data = [];
  List<Map<String, dynamic>> filteredData = [];
  final String driverId = 'DRV001';

  // Data organized by tab
  Map<String, List<Map<String, dynamic>>> tabData = {
    'Paid': [],
    'Not Paid': [],
    'Pending': [],
  };

  // Controller for search input
  TextEditingController searchController = TextEditingController();

  @override
  void initState() {
    super.initState();

    // Fetch initial data
    fetchData();
  }

  // Fetch ride payment details from an API
  Future<void> fetchData() async {
    try {
      final result = await viewRidePayment(driverId);
      for (var item in result) {
        final payStatus = item['pay_status'];
        tabData[payStatus]?.add(item);
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
  Future<List<Map<String, dynamic>>> viewRidePayment(String driverId) async {
    final url =
      Uri.parse('http://10.0.2.2:5000/edugo/driver/ridePayment/$driverId');

    final response = await http.get(url);

    if (response.statusCode == 200) {
      final List<dynamic> responseData = json.decode(response.body);
      return responseData.cast<Map<String, dynamic>>();
    } else {
      throw Exception('Failed to load data');
    }
  }

  // Filter the data based on the search query
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
      getMonthName(item['related_month'])
        .toLowerCase()
        .contains(query.toLowerCase()))
      .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: DefaultTabController(
        length: 3,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Text(
                'Financial Page',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            SizedBox(height: 20),
            TabBar(
              tabs: [
                Tab(text: 'Pending'),
                Tab(text: 'Not Paid'),
                Tab(text: 'Paid'),
              ],
              labelColor: Colors.black,
              unselectedLabelColor: Colors.black,
              indicator: BoxDecoration(
                color: Colors.orange,
              ),
            ),
            SizedBox(height: 10),
            // Search bar
            Padding(
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
            ),
            Expanded(
              child: TabBarView(
                children: [
                  _buildTabContent(context, 'Pending'),
                  _buildTabContent(context, 'Not Paid'),
                  _buildTabContent(context, 'Paid'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTabContent(BuildContext context, String payStatus) {
    final tabDataForStatus = tabData[payStatus] ?? [];
    final isPending = payStatus == 'Pending';

    return SingleChildScrollView(
      child: DataTable(
        columnSpacing: 10.0,
        columns: <DataColumn>[
          DataColumn(label: Text('Name')),
          DataColumn(label: Text('Month')),
          DataColumn(label: Text('Payment')),
          if (isPending) DataColumn(label: Text('Action')),
        ],
        rows: tabDataForStatus.map((item) {
          final monthNumber = item['related_month'];
          final monthName = getMonthName(monthNumber);

          final cells = <DataCell>[
            DataCell(Text(item['child_name'].toString())),
            DataCell(Text(monthName)),
            DataCell(Text(item['amount'].toString())),
          ];
          if (isPending) {
            cells.add(
              DataCell(
                ElevatedButton(
                  onPressed: () {
                    _showConfirmationDialog(context);
                  },
                  child: Text('Paid'),
                ),
              ),
            );
          }
          return DataRow(cells: cells);
        }).toList(),
      ),
    );
  }

  void _showConfirmationDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Confirm Payment'),
          content: Text('Did you receive this payment?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('No'),
            ),
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('Yes'),
            ),
          ],
        );
      },
    );
  }


  // Get month with name
  String getMonthName(int month) {
    const List<String> monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    if (month >= 1 && month <= 12) {
      return monthNames[month - 1];
    }

    return 'Unknown';
  }
}
