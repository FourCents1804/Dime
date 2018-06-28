import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
import styles from "../../public";
import * as d3 from "d3";

const purchases = require("../../seed/purchaseData");

const formatter = d3.timeFormat("%b %y");
const parser = d3.timeParse("%b %y");
let dataArr = [];

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

const categoryDataByMonth = d3
  .nest()
  .key(d => formatter(new Date(d.createdAt)))
  .key(d => d.categoryBroad)
  .rollup(d => d3.sum(d, g => g.amount))
  .entries(purchases)
  .sort((a, b) => parser(b.key) - parser(a.key));

const categoryForSelectedVal = val => {
  categoryDataByMonth.forEach(mon => {
    if (mon.key === val) {
      dataArr = mon.values;
    }
  });
  return dataArr;
};

const SpendHistory = props => {
  return (
    <ScrollView>
      <View>
        <Dropdown
          label="Select Month"
          data={monthArr}
          style={sanFranciscoWeights.light}
          onChangeText={value => categoryForSelectedVal(value)}
        />
        {dataArr.length ? (
          <View>
            {dataArr.map(data => {
              return (
                <View>
                  <Card title={data.key} />
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default SpendHistory;
