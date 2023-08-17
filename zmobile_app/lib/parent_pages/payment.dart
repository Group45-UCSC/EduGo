// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, prefer_const_literals_to_create_immutables, sized_box_for_whitespace

import 'package:flutter/material.dart';
import './navbar.dart';

class PaymentPage extends StatelessWidget {
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
                'Payments',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            SizedBox(height: 20),
            TabBar(
              tabs: [
                Tab(text: 'Not Paid'),
                Tab(text: 'Pending'),
                Tab(text: 'Paid'),
              ],
              labelColor: Colors.black,
              unselectedLabelColor: Colors.black,
              indicator: BoxDecoration(
                color: Colors.orange,
              ),
            ),
            SizedBox(height: 10),
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
                  _buildNotPayTabContent(context),
                  _buildOngoingPayTabContent(),
                  _buildPaidPayTabContent(),
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
          DataColumn(label: Text('Children')),
          DataColumn(label: Text('Month')),
          DataColumn(label: Text('Payment')),
          DataColumn(label: Text('Action')),
        ],
        rows: [
            _buildDataRow(context, 'Child 3', 'September', '2500'),
          ],
      ),
    ),
  );
}

Widget _buildOngoingPayTabContent() {
  return SingleChildScrollView(
      child: DataTable(
        columns: const <DataColumn>[
          DataColumn(label: Text('Children')),
          DataColumn(label: Text('Month')),
          DataColumn(label: Text('Payment')),
        ],
        rows: [
          _buildDataRowForPaid('Child 1', 'September', '2500'),
          _buildDataRowForPaid('Child 2', 'September', '3000'),
        ],
      ),
  );
}


Widget _buildPaidPayTabContent() {
  return Center(
    child: SingleChildScrollView(
      child: DataTable(
        columns: const <DataColumn>[
          DataColumn(label: Text('Children')),
          DataColumn(label: Text('Month')),
          DataColumn(label: Text('Payment')),
        ],
        rows: [
          _buildDataRowForPaid('Child 1', 'August', '2500'),
          _buildDataRowForPaid('Child 2', 'August', '3000'),
          _buildDataRowForPaid('Child 3', 'August', '2000'),
          _buildDataRowForPaid('Child 1', 'July', '2500'),
          _buildDataRowForPaid('Child 2', 'July', '3000'),
          _buildDataRowForPaid('Child 3', 'July', '2000'),
          _buildDataRowForPaid('Child 1', 'June', '2500'),
          _buildDataRowForPaid('Child 2', 'June', '3000'),
          _buildDataRowForPaid('Child 3', 'June', '2000'),
          _buildDataRowForPaid('Child 1', 'May', '2000'),
          _buildDataRowForPaid('Child 2', 'May', '3000'),
          _buildDataRowForPaid('Child 3', 'May', '2000'),
        ],
      ),
    ),
  );
}

DataRow _buildDataRow(BuildContext context, String child, String month, String payment) {
  return DataRow(
    cells: <DataCell>[
      DataCell(Text(child)),
      DataCell(Text(month)),
      DataCell(Text(payment)),
      DataCell(
        ElevatedButton(
          onPressed: () {
            _showConfirmationDialog(context);
          },
          child: Text('Pay'),
        ),
      ),
    ],
  );
}
DataRow _buildDataRowForPaid(String student, String month, String payment) {
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
        content: Text('Did you pay the payment?'),
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
