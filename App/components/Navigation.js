import React, {Component} from 'react'
import {Modal, Text, TouchableOpacity, TouchableHighlight, Image, View} from 'react-native'
import {Header} from 'react-native-elements'
import styles from '../../public'

const Navigation = props => {

  const {navigate} = props
  return (
    <View style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0}}>
    <Header
    placement="left"
    outerContainerStyles={{ backgroundColor: '#008ECC',
    height: 70
    }}
    leftComponent={
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: 'center'
        }}
        onPress={() => {
          props.openMenu();
        }}>
        <Image
          source={require("../../public/menu.png")}
        />
      </TouchableOpacity>
    }
    centerComponent={{
      text: 'LOGO',
      style: { fontSize: 25, color: "#fff" }
    }}
    rightComponent={
      <TouchableOpacity
        style={{
          alignItems: "center"
        }}
        onPress={() => navigate("User")}
      >
        <Image
          source={require("../../public/user.png")
          }
        />
      </TouchableOpacity>
    }
  />
  </View>
  )
}


export default Navigation
