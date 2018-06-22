import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { user, navigate } = this.props;
    return (
      <View>
          <Button icon={{
          name: 'logout',
          type: 'simple-line-icon',
          size: 15,
          color: 'red',
        }} />


        <Button onPress={() => navigate('Webcam')} title="To Camera" />
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
)(Home);
