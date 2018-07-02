import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
import * as d3 from "d3";
import styles from "../../public";
const purchases = require("../../seed/purchaseData");


const SpendHistory = props => {
  const categories = props.data.values || []
    return (
      <View>
        {categories.length ? (
          <View style={{ flex: 1 }}>
            {categories.map(category => {
              return (
                <View key={category.key}>
                  <Card title={category.key}>
                    <Text
                      style={[
                        sanFranciscoWeights.regular,
                        styles.spendHistoryCat
                      ]}
                    >
                      Amount: ${category.value.toFixed(2)}
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
