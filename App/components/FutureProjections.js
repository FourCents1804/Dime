import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from './Firebase/Firebase';
import axios from 'axios';
import styles from '../../public';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';
import * as d3 from 'd3';

const formatter = d3.timeFormat('%B %d, %Y')
const parser = d3.timeParse('%B %d, %Y');

class FutureProjections extends Component {
  handlePrediction = async data => {
    const result = await axios.get(
      `https://safe-bastion-55889.herokuapp.com/api/loadKeras?d1=${data[0] || 0}&d2=${data[1] || 0}&d3=${data[2] || 0}`
    );
    return result
  };

  formatMoney = number => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  render() {
    const {purchases} = this.props.navigation.state.params;
    const purchasesReduced = purchases.reduce((purchaseObj, curr) => {
      const parsedDate = parser(formatter(new Date(curr.date)))
      const purchase = {name: curr.name, amount: curr.amount}
      if (!purchaseObj[parsedDate]) {
        purchaseObj[parsedDate] = Number(purchase.amount);
      } else {
        purchaseObj[parsedDate] += Number(purchase.amount);
      }
      return purchaseObj;
    }, {});
    const pastThreeDays = Object.keys(purchasesReduced).sort((a, b) => b - a).slice(0, 3).map(date => purchasesReduced[date])

    console.log('lastThreeDays', purchasesReduced, pastThreeDays)

    const result = this.handlePrediction(pastThreeDays)
    console.log(result)
    const size = 200;
    const width = 15;
    const cropDegree = 90;
    const textOffset = width;
    const textWidth = size - textOffset * 2;
    const textHeight = size * (1 - cropDegree / 360) - textOffset * 2;
    const ErrorStd = 3.12;
    const low = result - ErrorStd;
    const high = result + ErrorStd;
    const average = result;
    console.log('average', average)
    return (
      <View style={styles.futureProjectionsContainer}>
        <Text style={styles.futureProjectionsTitle}>Future Projections</Text>
        <AnimatedGaugeProgress
          size={200}
          width={15}
          fill={100}
          rotation={90}
          cropDegree={90}
          tintColor="#008ECC"
          backgroundColor="#b0c4de"
          stroke={[2, 2]}
          strokeCap="circle"
        >
          <View
            style={{
              position: 'absolute',
              top: textOffset,
              left: textOffset,
              width: textWidth,
              height: textHeight,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={styles.futureProjectionsText}>Projected Spend:</Text>
            <Text style={styles.futureProjectionsTitle}>
              {this.formatMoney(average)}
            </Text>
          </View>
        </AnimatedGaugeProgress>
        <Text style={styles.futureProjectionsText}>
          Based on your spending habits, you are projected to spend between{' '}
          {this.formatMoney(low)} and {this.formatMoney(high)} today.
        </Text>
      </View>
    );
  }
}

export default FutureProjections;
