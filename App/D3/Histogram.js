// const purchases = require("../../seed/purchaseData");
import React from "react";
// const d3 = require("d3");
import { View, Dimensions } from "react-native";
import { YAxis, XAxis, BarChart, Grid } from "react-native-svg-charts";
// import styles from '../../public'
// import * as scale from 'd3-scale'

const Histogram = props => {
  const { height, margin } = props;
  const { width } = Dimensions.get("window");

  const { data } = props;

  return (
    <View flexDirection="column">
      <View
        style={{ height: height - 2 * margin, width: width - 2 * margin }}
        flexDirection="row"
      >
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: "grey",
            fontSize: 10
          }}
          style={{ width: 30 }}
          numberOfTicks={8}
          formatLabel={value =>
            value > 999 ? `$${(value / 1000).toFixed(0)}k` :
            `$${value}`
          }
          yAccessor={({ item }) => item.value}
        />
        <BarChart
          style={{ flex: 1 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: "rgba(54, 125, 224, 0.8)" }}
          yAccessor={({ item }) => item.value}
          xAccessor={({ item }) => item.key}
        >
          <Grid />
        </BarChart>
      </View>
      <View>
        <XAxis
          data={data}
          formatLabel={(value, index) => data[index].key}
          style={{ marginLeft: 35, height: 80, marginRight: -15 }}
          contentInset={{ left: 40 }}
          svg={{
            fill: "grey",
            fontSize: 10,
            rotation: -90,
            originY: 35
          }}
        />
      </View>
    </View>
  );
};

export default Histogram;
