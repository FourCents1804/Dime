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

export default class SignUpP2 extends React.Component {
    state = {
      form: {
        occupation: '',
        gender: '',
        monthlyIncome: 0,
        age: 0,
        savingsGoal: 0
      },
      submitTokins: 0
    };

    componentDidMount() {
      let iteration = 0;
      slide.forEach(animation => {
        iteration++;
        Animated.timing(animation, {
          toValue: 0,
          duration: 350 * (iteration + 0.6),
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
        let newUserData = this.props.navigation.state.params.newUserData
        const { navigate } = this.props.navigation;
        this.setState({ submitTokins: 1 });

          newUserData.push(this.state.form)
            navigate('SignUpP3', {newUserData})

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

      const { navigate } = this.props.navigation;
      return (
        <ScrollView
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollContainer}
        >
          {this.createFormInput()}
          <Animated.View style={{opacity: fade[4],
              transform: [{ translateY: slide[4] }] }}>
          <Button
            onPress={() => {
            this.handleNextButton()
            }}
            title="Next 2 of 3"
            raised={true}
            rounded={true}
            backgroundColor="green"
          />
          </Animated.View>
        </ScrollView>
      );
    }
  }
