import * as d3 from "d3";
import React from "react";
import { ART, View } from "react-native";
const { Group, Shape, Text, Surface } = ART;
import styles from "../../public";
import DonutCarousel from './DonutCarousel'

class Pie extends React.Component {

constructor () {
  super()
  this.state = {
    selectedSection: 3
  }
}

setSection = sectionId => {
  this.setState({selectedSection: sectionId})
}

render () {

  const width = 260;
  const height = 260;
  const margin = 30;
  const pieData = d3.pie().value(d => d.price)(this.props.userPurchases);

  const piePath = d3
    .arc()
    .outerRadius((width - margin) / 2)
    .padAngle(0.05)
    .innerRadius(80);

    const selectedPiePath = d3
    .arc()
    .outerRadius(((width - margin) / 2) + 10)
    .padAngle(0.05)
    .innerRadius(80 + 10);

  // const colors = d3.scaleLinear()
  //   .domain([0, this.props.userPurchases.length]).range([0, 255])

  const colors = [
    "#cfebef",
    "#95C8D8",
    "#008ECC",
    "#0E4D92",
    "#1034A6",
    "#000080",
    "#111E6C",
    "#111E6C",
    "#111E6C",
    "#111E6C",
    "#111E6C",
    "#111E6C",
    "#111E6C",
    "#111E6C",
    "#111E6C",
  ];
  const label = d3
    .arc()
    .outerRadius(130)
    .innerRadius(110);

  return (
    <View style={styles.donutContainer}>
    <Surface width={width} height={height} style={styles.container}>
      <Group x={width / 2} y={height / 2} width={width} height={height}>
        {pieData.map(section => {
          const currPath = (section.index === this.state.selectedSection) ? selectedPiePath : piePath
          return (<Group key={section.index}>
            <Shape
              d={currPath(section)}
              stroke="#000"
              fill={colors[section.index]}
              strokeWidth={1}
            />
            {/* <Text
              font="10px Arial"
              fill="#000"
              x={label.centroid(section)[0]}
              y={label.centroid(section)[1]}
            >
              {`${section.data.category}`}
            </Text> */}
          </Group>)
        }
        )}
      </Group>
    </Surface>
    <View style={styles.donutCarousel}>
    <DonutCarousel setSection={this.setSection} />
    </View>
    </View>
  );
}
}

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
