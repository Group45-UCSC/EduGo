// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import './navbar.dart';

class FinancialPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Navbar(
      child: DefaultTabController(
        length: 2,
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
                Tab(text: 'Not Pay'),
                Tab(text: 'Pay'),
              ],
              labelColor: Colors.black,
              unselectedLabelColor: Colors.black,
              indicator: BoxDecoration(
                color: Colors.orange,
              ),
            ),
            Expanded(
              child: TabBarView(
                children: [
                  _buildNotPayTabContent(context),
                  _buildPayTabContent(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildNotPayTabContent(BuildContext context) {
    return SingleChildScrollView(
      child: DataTable(
        columns: const <DataColumn>[
          DataColumn(label: Text('Student')),
          DataColumn(label: Text('Month')),
          DataColumn(label: Text('Payment')),
        ],
        rows: List.generate(10, (index) {
          return DataRow(
            onSelectChanged: (selected) {
              if (selected == true) {
                if (index != -1) {
                  _showConfirmationDialog(context);
                }
              }
            },
            cells: <DataCell>[
              DataCell(Text('Student ${index + 1}')),
              DataCell(Text('August')),
              DataCell(Text('2500')),
            ],
          );
        }),
      ),
    );
  }

  Widget _buildPayTabContent() {
    return Center(
      // table of student, month, payment
      child: SingleChildScrollView(
        child: DataTable(
          columns: const <DataColumn>[
            DataColumn(label: Text('Student')),
            DataColumn(label: Text('Month')),
            DataColumn(label: Text('Payment')),
          ],
          rows: [
          _buildDataRow('Student 1', 'August', '2500'),
          _buildDataRow('Student 2', 'August', '3000'),
          _buildDataRow('Student 3', 'August', '2000'),
          _buildDataRow('Student 4', 'August', '2500'),
          _buildDataRow('Student 5', 'August', '3000'),
          _buildDataRow('Student 1', 'July', '2500'),
          _buildDataRow('Student 2', 'July', '3000'),
          _buildDataRow('Student 3', 'July', '2000'),
          _buildDataRow('Student 1', 'June', '2500'),
          _buildDataRow('Student 2', 'June', '3000'),
          _buildDataRow('Student 3', 'June', '2000'),
          _buildDataRow('Student 4', 'June', '2000'),
          _buildDataRow('Student 5', 'June', '3000'),
          _buildDataRow('Student 6', 'June', '2000'),
          _buildDataRow('Student 1', 'May', '2500'),
          _buildDataRow('Student 2', 'May', '3000'),
          _buildDataRow('Student 3', 'May', '2000'),
          _buildDataRow('Student 4', 'May', '2000'),
          _buildDataRow('Student 5', 'May', '3000'),
          _buildDataRow('Student 6', 'May', '2000'),
        ],
        ),
      ),
    );
  }

DataRow _buildDataRow(String student, String month, String payment) {
  return DataRow(
    cells: <DataCell>[
      DataCell(Text(student)),
      DataCell(Text(month)),
      DataCell(Text(payment)),
    ],
  );
}

  void _showConfirmationDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Confirm Payment'),
          content: Text('Is the monthly payment paid?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context); // Close the dialog
              },
              child: Text('No'),
            ),
            TextButton(
              onPressed: () {
                Navigator.pop(context); // Close the dialog
              },
              child: Text('Yes'),
            ),
          ],
        );
      },
    );
  }
}
