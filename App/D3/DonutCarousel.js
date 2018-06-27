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
    height: 140,
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
          category: 'Total',
          value: 140,
          sectionId: -1
        },
        {
          category: 'Transportation',
          value: 60,
          sectionId: 0
        },
        {
          category: 'Food and Dining',
          value: 70,
          sectionId: 1
        },
        {
          category: 'Entertainment',
          value: 10,
          sectionId: 2
        }
      ],
    }
  }
  render () {
    return (
      <View style={styles.viewStyle}>
        <Swiper
          loadMinimal loadMinimalSize={1}
          style={styles.wrapper}
          loop={false}
          onIndexChanged={index => this.props.setSection(index)}
        >
        {this.state.categories.map(category => (
          <View key={category} style={styles.slide1}>
            <Text style={styles.text}>You have spent</Text>
            <Text style={styles.textValue}>${category.value}</Text>
            <Text style={styles.text}>in {category.category}</Text>
            <Text style={styles.text}>this month.</Text>
          </View>
        ))}
        </Swiper>
      </View>
    )
  }
}


export default DonutCarousel
