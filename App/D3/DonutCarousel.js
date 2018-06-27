import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
    height: 120,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
  },
  textValue: {
    alignSelf: 'center',
    fontSize: 30
  }
}

class DonutCarousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [
        {
          category: 'Transportation',
          value: 60
        },
        {
          category: 'Food and Dining',
          value: 70
        },
        {
          category: 'Entertainment',
          value: 10
        }
      ],
    }
  }
  render () {
    return (
      <View style={styles.viewStyle}>
        <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
        {this.state.categories.map(category => (
          <View key={category} style={styles.slide1}>
            <Text style={styles.text}>You have spent</Text>
            <Text style={styles.textValue}>${category.value}</Text>
            <Text style={styles.text}>on {category.category}.</Text>
          </View>
        ))}
        </Swiper>
      </View>
    )
  }
}


export default DonutCarousel
