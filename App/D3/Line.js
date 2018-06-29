const purchases = require("../../seed/purchaseData");
import React from "react";
const d3 = require("d3");
import { View } from "react-native";
import {
  YAxis,
  XAxis,
  Grid,
  LineChart
} from "react-native-svg-charts";

const Line = props => {
  const width = 250;
  const height = 200;
  const margin = 20;

  const formatter = d3.timeFormat("%b %y");
  const parser = d3.timeParse("%b %y");

  const data = d3
    .nest()
    .key(d => formatter(new Date(d.createdAt)))
    .sortKeys((a, b) => parser(a) - parser(b))
    .rollup(d => d3.sum(d, g => g.amount))
    .entries(purchases);
  return (
    <View style={{ height: height }}>
      <View style={{ height: height - margin }} flexDirection="row">
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: "grey",
            fontSize: 10
          }}
          numberOfTicks={10}
          formatLabel={value => `$${value}`}
          yAccessor={({ item }) => item.value}
        />
        <LineChart
          style={{ flex: 1 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ stroke: "rgb(65, 65, 244)" }}
          yAccessor={({ item }) => item.value}
          xAccessor={({ item }) => parser(item.key)}
        >
          <Grid />
        </LineChart>
      </View>
      <XAxis
        data={data}
        numberOfTicks={3}
        svg={{
          fill: "grey",
          fontSize: 8
        }}
        contentInset={{ left: 20 }}
        xAccessor={({ item }) => parser(item.key)}
        formatLabel={value => formatter(value)}
      />
    </View>
  );
};

export default Line;
