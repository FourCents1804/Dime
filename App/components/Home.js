import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { logout } from '../store/Thunks/User';

class Home extends Component {
handleSubmit = () => {
    this.props.logout()
    console.log(this.props.user)
}
  render() {
    const { user, navigate } = this.props;
    return (
      <View>
        <Button
          onPress={this.handleSubmit}
          icon={{
            name: 'logout',
            type: 'simple-line-icon',
            size: 15,
            color: 'red'
          }}
        />

        <Button onPress={() => navigate('Webcam')} title="To Camera" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
