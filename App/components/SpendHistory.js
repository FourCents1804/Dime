import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Card } from "react-native-elements";
import { sanFranciscoWeights } from "react-native-typography";
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

const categoryDataByMonth = d3
  .nest()
  .key(d => formatter(new Date(d.createdAt)))
  .key(d => d.categoryBroad)
  .rollup(d => d3.sum(d, g => g.amount))
  .entries(purchases)
  .sort((a, b) => parser(b.key) - parser(a.key));

class SpendHistory extends Component {
  state = {
    dataArr: []
  };

  categoryForSelectedVal = val => {
    categoryDataByMonth.forEach(mon => {
      if (mon.key === val) {
        console.log(mon.values);
        this.setState({
          dataArr: mon.values
        });
      }
    });
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Dropdown
            label="Select Month"
            data={monthArr}
            style={sanFranciscoWeights.light}
            onChangeText={value => this.categoryForSelectedVal(value)}
          />
          {this.state.dataArr.length ? (
            <View>
              {this.state.dataArr.map(data => {
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
  }
}

export default SpendHistory;
