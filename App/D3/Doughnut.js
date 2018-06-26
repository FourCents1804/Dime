import * as d3 from "d3";
import React from "react";
import { ART } from "react-native";
const { Group, Shape, Text, Surface } = ART;
import styles from "../../public";

const Pie = props => {
  const pieData = d3.pie().value(d => d.price)(props.userPurchases);

  const piePath = d3
    .arc()
    .outerRadius(100)
    .padAngle(0.05)
    .innerRadius(60);

  // const colors = d3.scaleLinear()
  //   .domain([0, props.userPurchases.length]).range([0, 255])

  const colors = [
    "#E7BAA0",
    "#E5DACE",
    "#B2B2A2",
    "6D7973",
    "#F4E8C1",
    "#A0C1B8",
    "#709FB0",
    "#726A95",
    "#351F39",
    "#E7BAA0",
    "#E5DACE",
    "#B2B2A2",
    "6D7973",
    "#F4E8C1",
    "#A0C1B8",
    "#709FB0",
    "#726A95",
    "#351F39"
  ];
  const label = d3
    .arc()
    .outerRadius(130)
    .innerRadius(110);

  const width = 200;
  const height = 200;

  return (
    <Surface width={width} height={height} style={styles.container}>
      <Group x={width / 2} y={height / 2} width={width} height={height}>
        {pieData.map(section => (
          <Group key={section.index}>
            <Shape
              d={piePath(section)}
              stroke="#000"
              fill={colors[section.index]}
              strokeWidth={1}
            />
            <Text
              font="10px Arial"
              fill="#000"
              x={label.centroid(section)[0]}
              y={label.centroid(section)[1]}
            >
              {`${section.data.category}`}
            </Text>
          </Group>
        ))}
      </Group>
      <Text font="15px Arial" fill="#000" x={width / 2} y={height / 2}>
        Chart Label
      </Text>
    </Surface>
  );
};

export const userPurchases = [
  {
    itemName: "Mountain Dew",
    category: "Food and Drink",
    price: 3,
    transactionId: 1,
    createdAt: "2017-07-02"
  },
  {
    itemName: "Shoes",
    category: "Shopping",
    price: 50,
    transactionId: 1,
    createdAt: "2017-07-02"
  },
  {
    itemName: "Kit Kat",
    category: "Food and Drink",
    price: 1,
    transactionId: 1,
    createdAt: "2017-07-02"
  },
  {
    itemName: "Taxi",
    category: "Transportation",
    price: 24,
    transactionId: 2,
    createdAt: "2017-07-09"
  },
  {
    itemName: "Watch",
    category: "Shopping",
    price: 100,
    transactionId: 3,
    createdAt: "2017-07-15"
  },
  {
    itemName: "Headphones",
    category: "Shopping",
    price: 15,
    transactionId: 4,
    createdAt: "2017-07-20"
  },
  {
    itemName: "Wine",
    category: "Food and Drink",
    price: 16,
    transactionId: 5,
    createdAt: "2017-07-25"
  }
];

export default Pie;
