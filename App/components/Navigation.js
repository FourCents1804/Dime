import React, {Component} from 'react'
import {Modal, Text, TouchableOpacity, TouchableHighlight, Image, View} from 'react-native'
import {Header} from 'react-native-elements'
import {connect} from 'react-redux'
import { logout } from '../store';

const Navigation = props => {

  const {navigate} = props
  return (
    <View style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0}}>
    <Header
    placement="left"
    leftComponent={
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          alignItems: 'center'
        }}
        onPress={() => {
          props.openMenu();
        }}>
        <Image
          style={{ top: 20, height: 80, width: 60 }}
          source={require('../../public/menu.png')}
        />
      </TouchableOpacity>
    }
    centerComponent={{
      text: 'LOGO',
      style: { fontSize: 25, color: '#fff' }
    }}
    rightComponent={
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          alignItems: 'center'
        }}
        onPress={() => props.logout()}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={require('../../public/user.png')}
        />
      </TouchableOpacity>
    }
  />
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(null, mapDispatchToProps)(Navigation)
