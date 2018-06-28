import React from "react";
import { ScrollView, Text, Picker, View } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
import styles from "../../public";
import * as d3 from "d3";

const purchases = require("../../seed/purchaseData");

const formatter = d3.timeFormat("%b %y");
const parser = d3.timeParse("%b %y");

const month = d3
  .nest()
  .key(mon => formatter(new Date(mon.createdAt)))
  .entries(purchases);

const monthArr = month.map(eachMon => {
  let valueObj = {};
  if (!valueObj["value"]) {
    valueObj["value"] = eachMon.key;
  }
  return valueObj;
});

let categoryArr = [];

const categoryForSelectedVal = val => {
  let month = "";
  if (
    parser(val)
      .getMonth()
      .toString().length === 2
  ) {
    month = `${parser(val).getFullYear()}-${parser(val).getMonth() + 1}`;
  } else {
    month = `${parser(val).getFullYear()}-0${parser(val).getMonth() + 1}`;
  }

  purchases.forEach(eachPurchase => {
    if (eachPurchase.createdAt.slice(0, 7) === month) {
      categoryArr.push({ value: eachPurchase.categoryBroad });
    }
  });

  return categoryArr;
};

const SpendHistory = props => {
  return (
    <View>
      <View>
        <Dropdown
          label="Select Month"
          data={monthArr}
          style={sanFranciscoWeights.light}
          onChangeText={value => categoryForSelectedVal(value)}
        />
      </View>
      <View>
        <Dropdown
          label="Select Category"
          data={categoryArr}
          style={sanFranciscoWeights.light}
        />
      </View>
    </View>
  );
};

export default SpendHistory;
