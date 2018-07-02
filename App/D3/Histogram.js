const purchases = require("../../seed/purchaseData");
import React from "react";
const d3 = require("d3");
import { View, Dimensions } from "react-native";
import { YAxis, XAxis, BarChart, Grid } from "react-native-svg-charts";
import styles from '../../public'
import * as scale from 'd3-scale'


const Histogram = props => {

  const { height, margin } = props;
  const {width} = Dimensions.get('window')

  const {data} = props

  console.log('DATATA', data)

  return (
    <View>
      <View style={{ height: height - 2 * margin, width: width - 2 * margin }} flexDirection="row">
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: "grey",
            fontSize: 10
          }}
          numberOfTicks={10}
          formatLabel={value => value > 999 ? `$${(value/1000).toFixed(1)}k` : `$${value}`}
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
      <XAxis
      scale={scale.scaleBand}
      data={data}
      xAccessor={({ item }) => item.key}
      formatLabel={value => value}
     svg={{
     fill: 'grey',
     fontSize: 10,
   }}
      />
    </View>
  );
};

export default Histogram;
