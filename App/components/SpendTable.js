import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from '../../public'
const purchaseData = require('../../seed/purchaseData')
import * as d3 from 'd3'

function formatMoney(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const formatter = d3.timeFormat('%b %d %y');
const parser = d3.timeParse('%b %d %y');
const truncate = (str, length) => {
  return str.slice(0, length)
}
const DaySpend = props => {
  const {date, purchases} = props
  return (
      <View style={styles.spendTableContainer}>
        <View style={styles.spendTableDate}>
          <Text>{formatter(new Date(date))}</Text>
        </View>
        {purchases.map((purchase, index) => (
        <View key={purchase + index} style={styles.spendTableRow}>
          <Text>
            {truncate(purchase.name, 30)}
          </Text>
          <Text style={styles.spendTableAmount}>
            {formatMoney(purchase.amount)}
          </Text>
        </View>
        ))}
      </View>
)
}

const SpendTable = props => {

  const last50Purchases = purchaseData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).slice(0, 50)

  console.log('last50', last50Purchases)

  const purchases = last50Purchases.reduce((purchaseObj, curr, index) => {
    const parsedDate = parser(formatter(new Date(curr.createdAt)))
    console.log('parsed', purchaseObj, index)
    const purchase = {name: curr.name, amount: curr.amount}
    if (!purchaseObj[parsedDate]) {
      purchaseObj[parsedDate] = [purchase]
    } else {
      purchaseObj[parsedDate].push(purchase)
    }
    return purchaseObj
  }, {})


      return (
          <View>
          {
              Object.keys(purchases).map((date) => {
                  return <DaySpend key={date} date={date} purchases={purchases[date]} />
              })
          }
          hi
          </View>
      );
}

export default SpendTable
