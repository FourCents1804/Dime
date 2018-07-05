import React from 'react'
import {View, Text} from 'react-native'
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge'
import styles from '../../public'
// import Counter from 'react-native-counter';

const size = 200;
const width = 15;
const cropDegree = 90;
const textOffset = width;
const textWidth = size - (textOffset * 2);
const textHeight = size * (1 - cropDegree / 360) - (textOffset * 2);

const FutureProjections = props => {
  return (
    <View style={styles.container}>
      <AnimatedGaugeProgress
        size={200}
        width={15}
        fill={100}
        rotation={90}
        cropDegree={90}
        tintColor="#4682b4"
        backgroundColor="#b0c4de"
        stroke={[2, 2]}
        strokeCap="circle">
        <View style={{position: 'absolute',
          top: textOffset,
          left: textOffset,
          width: textWidth,
          height: textHeight,
          alignItems: 'center',
          justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>hello</Text>
        </View>
      </AnimatedGaugeProgress>
    </View>
  )
}

export default FutureProjections
