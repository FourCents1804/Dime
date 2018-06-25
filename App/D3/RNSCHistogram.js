import * as d3 from 'd3'
import React from 'react'
import { View, ART } from 'react-native';
const {
  Group,
  Shape,
} = ART
import { YAxis, XAxis, AreaChart, BarChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import dateFns from 'date-fns'

const RNSCHistogram = props => {
  const margin = 10
  return (
    <View style={{ height: props.height}}>
        <View style={{ height: props.height - margin}} flexDirection="row">
          <YAxis
            data={ props.userPurchases }
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={ 10 }
            formatLabel={ value => `$${value}` }
            yAccessor={ ({ item }) => item.price }
          />
          <BarChart
            style={{ flex: 1 }}
            data={ props.userPurchases }
            contentInset={{ top: 20, bottom: 20 }}
            svg={{ fill: 'rgba(54, 125, 224, 0.8)' }}
            yAccessor={ ({ item }) => item.price }
            xAccessor={ ({ item }) => new Date(item.createdAt) }
            // xScale={ scale.scaleTime }
          >
          <Grid />
          </BarChart>
        </View>
        <XAxis
          data={ props.userPurchases }
          numberOfTicks={ 6 }
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          contentInset={{ left: 20 }}
          margin
          xAccessor={ ({ item }) => new Date(item.createdAt) }
          // scale={ scale.scaleTime }
          formatLabel={ (value) => dateFns.format(value, 'MMM YY')}
          />
    </View>
  )
}
//Need to map/reduce data to get it into the correct form.
export default RNSCHistogram

export const userPurchasesYear = [
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
    createdAt: '2018-02-10'
  },
  {
    itemName: 'Mountain Dew',
    category: 'Food and Drink',
    price: 20,
    transactionId: 11,
    createdAt: '2018-03-16'
  },
  {
    itemName: 'Concert',
    category: 'Entertainment',
    price: 45,
    transactionId: 12,
    createdAt: '2018-04-20'
  },
  {
    itemName: 'Scarf',
    category: 'Shopping',
    price: 10,
    transactionId: 13,
    createdAt: '2018-05-16'
  },
  {
    itemName: 'Taxi',
    category: 'Transportation',
    price: 10,
    transactionId: 14,
    createdAt: '2018-06-04'
  },
]