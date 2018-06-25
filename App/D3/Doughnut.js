import * as d3 from 'd3'
import React from 'react'
import { ART } from 'react-native';
const {
    Group,
    Shape,
    Text
  } = ART

const Pie = props => {

  const pieData = d3.pie().value(d => d.price)(props.userPurchases)

  const piePath = d3.arc()
  .outerRadius(100)
  .padAngle(0.05)
  .innerRadius(60)

  const colors = d3.scaleLinear()
    .domain([0, props.userPurchases.length]).range([0, 255])

// const label = d3.arc()
//   .outerRadius(80)
//   .innerRadius(60)

  return (
    <Group x={props.chartX} y={props.chartY}>
    {
        pieData.map((section, index) => (
        <Shape
            key={section.index}
            d={piePath(section)}
            stroke="#000"
            fill={`rgb(${50},${colors(index) / 1.5},${colors(index)})`}
            strokeWidth={1}
        />
        ))
    }
    </Group>
  )
}

export const userPurchases = [
  {
    itemName: 'Mountain Dew',
    category: 'Food and Drink',
    price: 3,
    transactionId: 1,
    createdAt: '2017-07-02'
  },
  {
    itemName: 'Shoes',
    category: 'Shopping',
    price: 50,
    transactionId: 1,
    createdAt: '2017-07-02'
  },
  {
    itemName: 'Kit Kat',
    category: 'Food and Drink',
    price: 1,
    transactionId: 1,
    createdAt: '2017-07-02'
  },
  {
    itemName: 'Taxi',
    category: 'Transportation',
    price: 24,
    transactionId: 2,
    createdAt: '2017-07-09'
  },
  {
    itemName: 'Watch',
    category: 'Shopping',
    price: 100,
    transactionId: 3,
    createdAt: '2017-07-15'
  },
  {
    itemName: 'Headphones',
    category: 'Shopping',
    price: 15,
    transactionId: 4,
    createdAt: '2017-07-20'
  },
  {
    itemName: 'Wine',
    category: 'Food and Drink',
    price: 16,
    transactionId: 5,
    createdAt: '2017-07-25'
  },
]

export default Pie
