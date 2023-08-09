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
      rows: List.generate(5, (index) {
        return DataRow(
          onSelectChanged: (selected) {
            if (selected == true) {
              if (index != -1) {
                _showConfirmationDialog(context);
              }
            }
          },
          cells: <DataCell>[
            DataCell(Text('Student $index')),
            DataCell(Text('Month $index')),
            DataCell(Text('Payment $index')),
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
          rows: List.generate(5, (index) {
            return DataRow(
              cells: <DataCell>[
                DataCell(Text('Student $index')),
                DataCell(Text('Month $index')),
                DataCell(Text('Payment $index')),
              ],
            );
          }),
        ),
      ),
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
