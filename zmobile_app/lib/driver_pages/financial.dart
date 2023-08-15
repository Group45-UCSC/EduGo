// ignore_for_file: use_key_in_widget_constructors, prefer_const_constructors, prefer_const_literals_to_create_immutables

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
      child: Container(
        width: MediaQuery.of(context).size.width,
        child: DataTable(
          columnSpacing: 8,
          columns: const <DataColumn>[
            DataColumn(label: Text('Student')),
            DataColumn(label: Text('Month')),
            DataColumn(label: Text('Payment')),
            DataColumn(label: Text('Action')),
          ],
          rows: [
            _buildDataRow(context, 'Student 1', 'September', '2500'),
            _buildDataRow(context, 'Student 2', 'September', '3000'),
            _buildDataRow(context, 'Student 3', 'September', '2000'),
            _buildDataRow(context, 'Student 4', 'September', '2500'),
            _buildDataRow(context, 'Student 5', 'September', '3000'),
          ],
        ),
      ),
    );
  }

  Widget _buildPayTabContent() {
    return SingleChildScrollView(
      child: DataTable(
        columns: const <DataColumn>[
          DataColumn(label: Text('Student')),
          DataColumn(label: Text('Month')),
          DataColumn(label: Text('Payment')),
        ],
        rows: [
          _buildDataRowForPay('Student 1', 'August', '2500'),
          _buildDataRowForPay('Student 2', 'August', '3000'),
          _buildDataRowForPay('Student 3', 'August', '2000'),
          _buildDataRowForPay('Student 4', 'August', '2500'),
          _buildDataRowForPay('Student 5', 'August', '3000'),
          _buildDataRowForPay('Student 1', 'July', '2500'),
          _buildDataRowForPay('Student 2', 'July', '3000'),
          _buildDataRowForPay('Student 3', 'July', '2000'),
          _buildDataRowForPay('Student 1', 'June', '2500'),
          _buildDataRowForPay('Student 2', 'June', '3000'),
          _buildDataRowForPay('Student 3', 'June', '2000'),
          _buildDataRowForPay('Student 4', 'June', '2000'),
          _buildDataRowForPay('Student 5', 'June', '3000'),
          _buildDataRowForPay('Student 6', 'June', '2000'),
          _buildDataRowForPay('Student 1', 'May', '2500'),
          _buildDataRowForPay('Student 2', 'May', '3000'),
          _buildDataRowForPay('Student 3', 'May', '2000'),
          _buildDataRowForPay('Student 4', 'May', '2000'),
          _buildDataRowForPay('Student 5', 'May', '3000'),
          _buildDataRowForPay('Student 6', 'May', '2000'),
        ],
      ),
    );
  }

  DataRow _buildDataRow(
      BuildContext context, String student, String month, String payment) {
    return DataRow(
      cells: <DataCell>[
        DataCell(Text(student)),
        DataCell(Text(month)),
        DataCell(Text(payment)),
        DataCell(ElevatedButton(
          onPressed: () {
            _showConfirmationDialog(context);
          },
          child: Text('Received'),
        )),
      ],
    );
  }

  DataRow _buildDataRowForPay(String student, String month, String payment) {
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
          content: Text('Are you sure you want to confirm this payment?'),
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
