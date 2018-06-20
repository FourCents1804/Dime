import React from 'react';
import { StyleSheet, TextInput,  View } from 'react-native';
import {auth} from '../store'

import {connect} from 'react-redux'
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from 'react-native-elements';
import {StackNavigator} from 'react-navigation'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
class Login extends React.Component {
  state = {
    email: '',
    password: ''

  }

  handleSubmit = event => {
    event.preventDefault();
    const formName = 'login'
    const {email, password} = this.state
    this.props.auth(email, password, formName )
  };
  render() {
    const {navigate} = this.props.navigation
    console.log(this.state)

    return (
      <View style={styles.container}>
        <FormLabel> Email </FormLabel>
        <FormInput  onChangeText={email => this.setState({email})} />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Password </FormLabel>
        <FormInput onChangeText={password => this.setState({password})} />
        <FormValidationMessage>Error</FormValidationMessage>
        <Button onPress={() => navigate('LLogin')} title="To Login" />
        <Button
          onPress={this.handleSubmit}
          title="Login"
          raised={true}
          rounded={true}
          backgroundColor="green"
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth:  (email, password, formName) => dispatch(auth(email, password, formName))
})

export default connect(null, mapDispatchToProps)(Login)
