import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  class Home extends Component {
      render() {
        const {user} = this.props
          return (
              <View>
                  <Text>{user.firstName}</Text>
              </View>
          )
      }
  }

const mapStateToProps = state => ({
    user: state.User
})

export default connect(mapStateToProps, null)(Home)
