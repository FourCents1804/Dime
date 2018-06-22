import React from 'react';
import { Text, View } from 'react-native';
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

let newUserData = [];

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: ''
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="First Name"
          onChangeText={firstName => this.setState({ firstName })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerS} />
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Last Name"
          onChangeText={lastName => this.setState({ lastName })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerS} />
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerS} />
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerS} />
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Re-Type Password"
          onChangeText={rePassword => this.setState({ rePassword })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerVS} />
        <Button
          onPress={() => {
            newUserData.push(this.state);
            navigate('SignUp2');
          }}
          width={400}
          title="Next 1 of 3"
          raised={true}
          rounded={true}
          backgroundColor="#388e3c"
        />
      </View>
    );
  }
}
class SignUpV2 extends React.Component {
  state = {
    occupation: '',
    gender: '',
    monthlyIncome: 0,
    age: 0
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Monthly Income"
          onChangeText={monthlyIncome => this.setState({ monthlyIncome })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerS} />
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Occupation"
          onChangeText={occupation => this.setState({ occupation })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerS} />
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Gender"
          onChangeText={gender => this.setState({ gender })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerS} />
        <FormInput
          containerStyle={styles.inputLine}
          placeholder="Age"
          onChangeText={age => this.setState({ age })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Divider style={styles.dividerVS} />
        <Button
          onPress={() => {
            newUserData.push(this.state);
            navigate('SignUpV3');
          }}
          title="Next 2 of 3"
          raised={true}
          rounded={true}
          backgroundColor="green"
        />
      </View>
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
    this.props.sendInfo(newUserData, 'signup');
  };

  createCheckBox = () => {
    let checkBArr = [];
    for (keys in this.state) {
      let el = keys;
      checkBArr.push(
        <View>
          <CheckBox
            title={keys}
            checked={this.state[keys]}
            onPress={() =>
              this.setState(this.state[el] ? { [el]: 0 } : { [el]: 1 })
            }
          />
          {this.state[keys] ? (
            <View>
              <Slider
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
