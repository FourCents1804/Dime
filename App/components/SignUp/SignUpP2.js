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
    };


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
          <View
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
          </View>
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
          <View>
          <Button
            onPress={() => {
            this.handleNextButton()
            }}
            title="Next 2 of 3"
            raised={true}
            rounded={true}
            backgroundColor="green"
          />
          </View>
        </ScrollView>
      );
    }
  }
