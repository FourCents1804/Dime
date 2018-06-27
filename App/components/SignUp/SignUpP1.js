import React from 'react';
import { Text, View, Easing, ScrollView, Animated } from 'react-native';
import {slide, fade} from '../../../public/common-util'
import styles from '../../../public';
import {
  Divider,
  Button,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

let newUserData = []

export default  class SignUpP1 extends React.Component {
    state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: ''
      },
      submitTokins: 0,

    };
    componentDidMount() {
      let iteration = 0;
      slide.forEach(animation => {
        iteration++;
        Animated.timing(animation, {
          toValue: 1,
          duration: 175 * (iteration + 0.6),
          easing: Easing.in(Easing.ease)
        }).start();
        Animated.timing(
          fade[iteration - 1], // The animated value to drive
          {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: 300 * (iteration * 1.17) // Make it take a while
          }
        ).start(); // Starts the animation
      });
    }

    handleNextButton = () => {
      const { navigate } = this.props.navigation;
      this.setState({ submitTokins: 1 });
      if (this.handleError() === '') {
        newUserData.push(this.state.form)
          navigate('SignUpP2', {newUserData})
        }
    };

    handleError = () => {
      const { form, submitTokins } = this.state;
      for (let keys in form) {
        if (form[keys] === '') return `${keys} is a required field!`;
      }
      if (form.password !== form.rePassword) return 'Passwords Do not Match';
      if (form.password.length < 8) {
        return 'Password must be longer than 8 characters';
      } else {
        return '';
      }
    };

    createFormInput = () => {
      let formInputArr = [];

      let iteration = 0;
      for (let keys in this.state.form) {
        let stateFields = keys;
        formInputArr.push(
          <Animated.View
            style={{
              opacity: fade[iteration],
              transform: [{ translateY: slide[iteration] }]
            }}
          >
            <FormInput
              errorMessage
              autoCapitalize="none"
              containerStyle={styles.inputLine}
              placeholder={stateFields}
              onChangeText={value => {
                stateFields = { ...this.state.form };
                stateFields[keys] = value;
                this.setState({ form: stateFields });
              }}
            />
            <Divider style={styles.dividerS} />
          </Animated.View>
        );

        iteration++;
      }
      return formInputArr;
    };

    render() {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.createFormInput()}
          <FormValidationMessage>{this.handleError()}</FormValidationMessage>
          <Animated.View
            style={{
              opacity: fade[4],
              transform: [{ translateY: slide[4] }]
            }}
          >
            <Button
              onPress={() => {

                this.handleNextButton();
              }}
              width={400}
              title="Next 1 of 3"
              raised={true}
              rounded={true}
              backgroundColor="#388e3c"
            />
          </Animated.View>
        </ScrollView>
      );
    }
  }

