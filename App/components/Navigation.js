import React from 'react'
import {TouchableOpacity, Image, View} from 'react-native'
import {Header} from 'react-native-elements'

const Navigation = props => {
  const {navigate} = props

  return (
    <View style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0}}>
    <Header
    placement="left"
    leftComponent={
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          alignItems: "center"
        }}
        onPress={() => navigate("Webcam")}
      >
        <Image
          style={{ top: 20, height: 80, width: 60 }}
          source={require("../../public/menu.png")}
        />
      </TouchableOpacity>
    }
    centerComponent={{
      text: 'hey',
      style: { fontSize: 25, color: "#fff" }
    }}
    rightComponent={
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          alignItems: "center"
        }}
        onPress={() => navigate("User")}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../public/user.png")}
        />
      </TouchableOpacity>
    }
  />
  </View>
  )
}

export default Navigation
