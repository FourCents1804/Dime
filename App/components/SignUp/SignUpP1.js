import React from 'react';
import { Text, View, Easing, ScrollView, Animated } from 'react-native';
import {slide, fade} from '../../../public/common-util'
import styles from '../../../public';
import {
  Button,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

let newUserData = []

export default class SignUpP1 extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      error: ' ',
    };

    handleNextButton = async () => {
      await this.handleError()
      const { navigate } = this.props.navigation;
      if (this.state.error === ' ') {
        newUserData.push(this.state)
          navigate('SignUpP2', {newUserData})
      }
    };

    handleError = () => {
      const {firstName, lastName, email, password, rePassword} = this.state;
      if (firstName === '') {
        this.setState({error: `First name is a required field`})
      } else if (lastName === '') {
        this.setState({error: `Last name is a required field`})
      } else if (email === '') {
        this.setState({error: `Email is a required field`})
      } else if (password !== rePassword) {
        this.setState({error: 'Passwords Do not Match'})
      } else if (password.length < 8) {
        this.setState({error: 'Password must be longer than 8 characters'})
      } else {
        this.setState({error: ' '})
      }
    };

    render() {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.loginContainer}>
                <View>
                  <FormInput
                    errorMessage
                    autoCapitalize="none"
                    containerStyle={styles.inputLine}
                    placeholder="First Name (required)"
                    onChangeText={value => {
                      this.setState({ firstName: value})
                    }}
                  />
                </View>

                <View>
                  <FormInput
                    errorMessage
                    autoCapitalize="none"
                    containerStyle={styles.inputLine}
                    placeholder="Last Name (required)"
                    onChangeText={value => {
                      this.setState({ lastName: value})
                    }}
                  />
                </View>

                <View>
                  <FormInput
                    errorMessage
                    autoCapitalize="none"
                    containerStyle={styles.inputLine}
                    placeholder="Email (required)"
                    onChangeText={value => {
                      this.setState({ email: value})
                    }}
                  />
                </View>

                <View>
                  <FormInput
                    secureTextEntry
                    errorMessage
                    autoCapitalize="none"
                    containerStyle={styles.inputLine}
                    placeholder="Password (required)"
                    onChangeText={value => {
                      this.setState({ password: value})
                    }}
                  />
                </View>

                <View>
                  <FormInput
                    secureTextEntry
                    errorMessage
                    autoCapitalize="none"
                    containerStyle={styles.inputLine}
                    placeholder="Confirm Password"
                    onChangeText={value => {
                      this.setState({ rePassword: value})
                    }}
                  />
                </View>


            <View>
              <Button
                onPress={() => {
                  this.handleNextButton();
                }}
                title="Next (1 of 3)"
                raised={true}
                backgroundColor="#0080ff"
                style={styles.signUpButton}
              />
            </View>
            <FormValidationMessage>{this.state.error}</FormValidationMessage>
          </View>
        </ScrollView>
      );
    }
  }

