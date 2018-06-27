import React from 'react-native'
import Swiper from 'react-native-swiper'

const {
  View,
  Text,
  StyleSheet
} = React

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const TitleText = props => {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {props.label}
      </Text>
    )
}

const DonutCarousel = props => {

    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={styles.view}>
          <TitleText label="Left" />
        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={styles.view}>
            <TitleText label="Top" />
          </View>
          <View style={styles.view}>
            <TitleText label="Home" />
          </View>
          <View style={styles.view}>
            <TitleText label="Bottom" />
          </View>
        </Swiper>
        <View style={styles.view}>
          <TitleText label="Right" />
        </View>
      </Swiper>

    )
}

export default DonutCarousel
