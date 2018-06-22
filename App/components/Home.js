import React, {Component} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';


  class Home extends Component {
      render() {
        const {user, navigate} = this.props
          return (
              <View >
                   <Button onPress={() => navigate('Webcam')} title="To Camera" />
              </View>
          )
      }
  }

const mapStateToProps = state => ({
    user: state.User
})

export default connect(mapStateToProps, null)(Home)
