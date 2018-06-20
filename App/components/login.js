import React from 'react';
import { StyleSheet, View } from 'react-native';
import {auth} from '../store'
import {connect} from 'react-redux'
import {
  Text,
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from 'react-native-elements';


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
    this.props.auth(this.state, formName )
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
        <Button
          onPress={this.handleSubmit}
          title="Login"
          raised={true}
          rounded={true}
          backgroundColor="green"
        />
        <Text> or </Text>
        <Button onPress={() => navigate('SignUp')} title="Sign Up" />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth:  (userData, formName) => dispatch(auth(userData, formName))
})

export default connect(null, mapDispatchToProps)(Login)
