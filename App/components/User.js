import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  View, Text } from 'react-native';
import  styles from '../../public/index'

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          {user.firstName}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User
});

export default connect(
  mapStateToProps,
  null
)(User);
