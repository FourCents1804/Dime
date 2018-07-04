import React from 'react';
import { View, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import styles from '../../../public';
import {
  Button,
  FormInput,
} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown'
import {occupations, genders} from '../Utility/signUpData'

export default class SignUpP2 extends React.Component {
    state = {
      occupation: '',
      gender: '',
      monthlyIncome: 0,
      age: 0,
      savingsGoal: 0
    };

    handleNextButton = () => {
        let newUserData = this.props.navigation.state.params.newUserData
        const { navigate } = this.props.navigation;
        newUserData.push(this.state)
        navigate('SignUpP3', {newUserData})
      };


    render() {
      return (
        <ScrollView
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollContainer}
        >
          <ImageBackground
          source={require('../../../public/park2.jpg')}
          style={styles.backgroundImg}
          resizeMode="cover"
          >
            <KeyboardAvoidingView style={styles.loginContainer}>
            <View>
            <Dropdown
              label="Occupation"
              data={occupations}
              containerStyle={styles.signUpDropdown}
              onChangeText={(value) => this.setState({occupation: value})}
            />
            </View>
            <View>
            <Dropdown
              label="Gender"
              data={genders}
              containerStyle={styles.signUpDropdown}
              onChangeText={(value) => this.setState({gender: value})}
            />
            </View>
            <View>
              <FormInput
                errorMessage
                autoCapitalize="none"
                containerStyle={styles.inputLine}
                placeholder="Monthly Income"
                onChangeText={value => {
                  this.setState({ monthlyIncome: value})
                }}
              />
            </View>
            <View>
              <FormInput
                errorMessage
                autoCapitalize="none"
                containerStyle={styles.inputLine}
                placeholder="Age"
                onChangeText={value => {
                  this.setState({ age: value})
                }}
              />
            </View>
            <View>
              <FormInput
                errorMessage
                autoCapitalize="none"
                containerStyle={styles.inputLine}
                placeholder="Savings Goal"
                onChangeText={value => {
                  this.setState({ savingsGoal: value})
                }}
              />
            </View>
              <View>
              <Button
                onPress={() => {
                this.handleNextButton()
                }}
                title="Next 2 of 3"
                raised={true}
                backgroundColor="#0080ff"
                style={styles.signUpButton}
              />
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </ScrollView>
      );
    }
  }
