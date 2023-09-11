import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



function PaymentInv() {
  return (
    <div>
    <Document>
      <Page>
        {/* Your document content here */}
        <View>
          <Text>Invoice Content Goes Here</Text>
        </View>
      </Page>
    </Document>

    </div>
  );
}

export default PaymentInv;
