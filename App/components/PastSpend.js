import React from 'react'
import {Line} from './'
import {View, Text} from 'react-native'
import styles from '../../public'

const PastSpend = () => {
  return (
    <View>
      <Text style={styles.h1Text}>
        You have spent $'' in the past year.
      </Text>
      <Line />
    </View>
  )
}

export default PastSpend
