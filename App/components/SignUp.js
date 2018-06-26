import React from 'react';
import { Text, View, Easing, ScrollView, Animated } from 'react-native';
import { auth } from '../store';
import { connect } from 'react-redux';
import styles from '../../public';
import {
  Slider,
  CheckBox,
  Divider,
  Button,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
import Firebase from './Firebase/Firebase';

let newUserData = [];

class SignUp extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: ''
    },
    submitTokins: 0,
    slide: [
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500)
    ],
    fade: [
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500)
    ]
  };
  componentDidMount() {
    let iteration = 0;
    this.state.slide.forEach(animation => {
      iteration++;
      Animated.timing(animation, {
        toValue: 1,
        duration: 350 * (iteration + 0.6),
        easing: Easing.in(Easing.ease)
      }).start();
      Animated.timing(
        this.state.fade[iteration - 1], // The animated value to drive
        {
          toValue: 1, // Animate to opacity: 1 (opaque)
          duration: 250 * (iteration * 1.17) // Make it take a while
        }
      ).start(); // Starts the animation
    });
  }

  handleNextButton = () => {
    const { navigate } = this.props.navigation;
    this.setState({ submitTokins: 1 });
    if (this.handleError() === '') navigate('SignUp2');
  };

  handleError = () => {
    const { form, submitTokins } = this.state;
    for (let keys in form) {
      if (form[keys] === '') return `${keys} is a required field!`;
    }
    if (form.password !== form.rePassword) return 'Passwords Do not Match';
    if (form.password.length < 8) {return 'Password must be longer than 8 characters';}
    else {return '';}
  };

  createFormInput = () => {
    let formInputArr = [];

    let iteration = 0;
    for (let keys in this.state.form) {
      let stateFields = keys;
      formInputArr.push(
        <Animated.View
          style={{
            opacity: this.state.fade[iteration],
            transform: [{ translateY: this.state.slide[iteration] }]
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
          style={{ transform: [{ translateY: this.state.slide[4] }] }}
        >
          <Button
            onPress={() => {
              newUserData.push(this.state.form)
              this.handleNextButton()}}
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

class SignUpV2 extends React.Component {
  state = {
    form: {
      occupation: '',
      gender: '',
      monthlyIncome: 0,
      age: 0,
      savingsGoal: 0
    },
    slide: [
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500)
    ]
  };

  componentDidMount() {
    let iteration = 0;
    this.state.slide.forEach(animation => {
      iteration++;
      Animated.timing(animation, {
        toValue: 0,
        duration: 350 * (iteration + 0.6),
        easing: Easing.in(Easing.ease)
      }).start();
    });
  }

  createFormInput = () => {
    let formInputArr = [];
    let iteration = 0;
    for (let keys in this.state.form) {
      let stateFields = keys;
      formInputArr.push(
        <Animated.View
          style={{ transform: [{ translateY: this.state.slide[iteration] }] }}
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
        <Button
          onPress={() => {
            newUserData.push(this.state.form);
            navigate('SignUpV3');
          }}
          title="Next 2 of 3"
          raised={true}
          rounded={true}
          backgroundColor="green"
        />
      </ScrollView>
    );
  }
}

class SignUpV3 extends React.Component {
  state = {
    rent: 0,
    electricity: 0,
    gas: 0,
    phone: 0,
    transportation: 0,
    entertainment: 0
  };
  handleSubmit = event => {
    event.preventDefault();
    newUserData.push(this.state);
    console.log(newUserData)
    Firebase.auth.createUserWithEmailAndPassword(
      newUserData[0].email,
      newUserData[0].password
    );
    // this.props.sendInfo(newUserData, 'signup');
  };

  createCheckBox = () => {
    let checkBArr = [];
    for (keys in this.state) {
      let el = keys;
      checkBArr.push(
        <View>
          <CheckBox
            title={keys}
            checked={this.state[keys] > 0}
            onPress={() =>
              this.setState(this.state[el] ? { [el]: 0 } : { [el]: 1 })
            }
          />
          {this.state[keys] ? (
            <View>
              <Slider
                style={{ width: 100 }}
                minimumValue={0}
                maximumValue={4000}
                value={this.state[el]}
                onValueChange={value => this.setState({ [el]: value })}
              />
              <Text> {Math.floor(this.state[el])}</Text>
            </View>
          ) : (
            <Divider style={styles.dividerVS} />
          )}
        </View>
      );
    }
    return checkBArr;
  };
  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <Text>What Are Your Monthly Expenses</Text>
          <Divider style={styles.dividerS} />
          {this.createCheckBox()}
          <Divider style={styles.dividerVS} />
          <Button
            rounded={true}
            backgroundColor="green"
            onPress={this.handleSubmit}
            title="Create Your Account"
          />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendInfo: (userData, formName) => dispatch(auth(userData, formName))
});

export const SignUp1 = connect(
  null,
  mapDispatchToProps
)(SignUp);

export const SignUp2 = connect(
  null,
  mapDispatchToProps
)(SignUpV2);
export const SignUp3 = connect(
  null,
  mapDispatchToProps
)(SignUpV3);
