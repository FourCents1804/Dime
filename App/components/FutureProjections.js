import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from './Firebase/Firebase';
import axios from 'axios';
import styles from '../../public';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';

class FutureProjections extends Component {
  handlePrediction = async () => {
    await Firebase.ref('/dummyData').once(async snapshot => {
      const result = await axios.get(
        `https://safe-bastion-55889.herokuapp.com/api/loadKeras?lastThreeDays=${snapshot}`
      );
      console.log(result);
    });
  };

  formatMoney = number => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  render() {
    const size = 200;
    const width = 15;
    const cropDegree = 90;
    const textOffset = width;
    const textWidth = size - textOffset * 2;
    const textHeight = size * (1 - cropDegree / 360) - textOffset * 2;
    const ErrorStd = 3.12;
    const low = this.result - ErrorStd;
    const high = this.result + ErrorStd;
    const average = this.result;

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
