import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
import * as d3 from "d3";
import styles from "../../public";
const purchases = require("../../seed/purchaseData");

const formatMoney = number => {
  return number
    .toLocaleString(
      "en-US",
      { style: "currency", currency: "USD" }
    )
};

const SpendHistory = props => {
    return (
      <View>
        {props.data.length ? (
          <View style={{ flex: 1 }}>
            {props.data.map(category => {
              return (
                <View key={category.key}>
                  <Card title={category.key}>
                    <Text
                      style={[
                        sanFranciscoWeights.regular,
                        styles.spendHistoryCat
                      ]}
                    >
                      Amount: {formatMoney(category.value)}
                    </Text>
                  </Card>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
    );
}

export default SpendHistory;
