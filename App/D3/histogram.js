const purchases = require("../../seed/purchaseData");
import React from "react";
const d3 = require("d3");
import { ART, View } from "react-native";
import { YAxis, XAxis, BarChart, Grid } from "react-native-svg-charts";
import * as scale from "d3-scale";

const { Surface, Group, Shape, ClippingRectangle } = ART;

const { Rectangle } = Shape;

import Svg, { Rect, Circle } from "react-native-svg";

const Histogram = props => {
  console.log("rect", ClippingRectangle);
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
        <BarChart
          style={{ flex: 1 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: "rgba(54, 125, 224, 0.8)" }}
          yAccessor={({ item }) => item.value}
          xAccessor={({ item }) => parser(item.key)}
          // xScale={ scale.scaleTime }
        >
          <Grid />
        </BarChart>
      </View>
      <XAxis
        data={data}
        numberOfTicks={3}
        svg={{
          fill: "grey",
          fontSize: 8
        }}
        contentInset={{ left: 20 }}
        // margin
        xAccessor={({ item }) => parser(item.key)}
        formatLabel={value => formatter(value)}
        // scale={ scale.scaleTime }
      />
    </View>
  );
};

export default Histogram;
