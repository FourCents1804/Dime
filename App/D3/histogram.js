import * as d3 from 'd3'
import React from 'react'
import { ART } from 'react-native';
const {
  Group,
  Shape,
} = ART
import {
  Svg, Rect
} from 'react-native-svg'


		//Width and height
var w = 200;
var h = 200;
var padding = 10;


//Create scale functions

//Define X axis



const Histogram = props => {

  const dataset = [1, 2, 3, 4, 5]

  const x = d3.scaleLinear()
  .domain([0, dataset.length])
  .range([0, props.width]);

  const y = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, props.height]);

  var xAxis = d3.axisBottom()
  .scale(x)
  .ticks(5)

  const yAxis = d3.axisLeft()
    .scale(y)
    .ticks(5)
  return (
    <Svg width={props.width} height={props.height}>
    {
      dataset.map((data, i) => (
        <Rect
          key={data}
          x={x(i)}
          y={props.height - y(data)}
          width={props.width / dataset.length}
          height={y(data)}
          fill="rgb(0,0,255)"
          strokeWidth="1"
          stroke="rgb(0,0,0)"
        />
        ))
    }
    </Svg>
  )
}

export default Histogram

const userPurchases = [
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
    createdAt: '2017-08-01'
  },
  {
    itemName: 'Headphones',
    category: 'Shopping',
    price: 15,
    transactionId: 4,
    createdAt: '2017-08-15'
  },
  {
    itemName: 'Wine',
    category: 'Food and Drink',
    price: 16,
    transactionId: 5,
    createdAt: '2017-08-30'
  },
  {
    itemName: 'Cheese',
    category: 'Food and Drink',
    price: 5,
    transactionId: 5,
    createdAt: '2017-08-30'
  },
  {
    itemName: 'Taxi',
    category: 'Transportation',
    price: 12,
    transactionId: 6,
    createdAt: '2017-09-12'
  },
  {
    itemName: 'Shirt',
    category: 'Shopping',
    price: 25,
    transactionId: 7,
    createdAt: '2017-10-01'
  },
  {
    itemName: 'Movie',
    category: 'Entertainment',
    price: 15,
    transactionId: 8,
    createdAt: '2017-11-20'
  },
  {
    itemName: 'Gifts',
    category: 'Entertainment',
    price: 15,
    transactionId: 9,
    createdAt: '2017-12-20'
  },
  {
    itemName: 'Dinner',
    category: 'Food and Drink',
    price: 30,
    transactionId: 10,
    createdAt: '2017-02-10'
  },
  {
    itemName: 'Mountain Dew',
    category: 'Food and Drink',
    price: 20,
    transactionId: 11,
    createdAt: '2017-03-16'
  },
  {
    itemName: 'Concert',
    category: 'Entertainment',
    price: 45,
    transactionId: 12,
    createdAt: '2017-04-20'
  },
  {
    itemName: 'Scarf',
    category: 'Shopping',
    price: 10,
    transactionId: 13,
    createdAt: '2017-05-16'
  },
  {
    itemName: 'Taxi',
    category: 'Transportation',
    price: 10,
    transactionId: 14,
    createdAt: '2017-06-04'
  },
]
