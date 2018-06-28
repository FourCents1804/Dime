import React from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
import styles from "../../public";

const purchases = require("../../seed/purchaseData");

const spendHistory = purchaseData => {
  const firstTen = [];
  for (let i = 0; i < 10; i++) {
    firstTen.push(purchaseData[i]);
  }
  return firstTen;
};

const SpendHistory = props => {
  console.log(spendHistory(purchases));
  return (
    <ScrollView>
      {spendHistory(purchases).map(eachPurchase => {
        return (
          <Card
            key={eachPurchase.transaction_id}
            title={eachPurchase.name}
            titleStyle={sanFranciscoWeights.medium}
          >
            <Text style={[sanFranciscoWeights.light, styles.faqContent]}>
              Date: {eachPurchase.createdAt}
            </Text>
            <Text style={[sanFranciscoWeights.light, styles.faqContent]}>
              Amount: ${eachPurchase.amount}
            </Text>
            <Text style={[sanFranciscoWeights.light, styles.faqContent]}>
              Category: {eachPurchase.categoryDetailed}
            </Text>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default SpendHistory;
