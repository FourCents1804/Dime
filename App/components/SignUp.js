import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { auth } from "../store";
import { connect } from "react-redux";
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    const formName = "signup";
    this.props.sendInfo(this.state, formName);
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FormLabel> First Name </FormLabel>
        <FormInput
          textAlign="center"
          onChangeText={firstName => this.setState({ firstName })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Last Name </FormLabel>
        <FormInput
          textAlign="center"
          onChangeText={lastName => this.setState({ lastName })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Email </FormLabel>
        <FormInput
          textAlign="center"
          onChangeText={email => this.setState({ email })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Password </FormLabel>
        <FormInput
          textAlign="center"
          onChangeText={password => this.setState({ password })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Re-Enter Password </FormLabel>
        <FormInput
          textAlign="center"
          onChangeText={rePassword => this.setState({ rePassword })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Button
          onPress={() => navigate("SignUp2")}
          title="Next"
          raised={true}
          rounded={true}
          backgroundColor="green"
        />
      </View>
    );
  }
}

class SignUpV2 extends React.Component {
  state = {
    occupation: "",
    gender: "",
    monthlyIncome: "",
    age: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.sendInfo(this.state, formName);
  };
  render() {
    return (
      <View style={styles.container}>
        <FormLabel> Monthly Income </FormLabel>
        <FormInput
          onChangeText={monthlyIncome => this.setState({ monthlyIncome })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Occupation </FormLabel>
        <FormInput onChangeText={occupation => this.setState({ occupation })} />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Gender </FormLabel>
        <FormInput onChangeText={gender => this.setState({ gender })} />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Age </FormLabel>
        <FormInput onChangeText={age => this.setState({ age })} />
        <FormValidationMessage>Error</FormValidationMessage>
        <Button
          onPress={this.handleSubmit}
          title="Next"
          raised={true}
          rounded={true}
          backgroundColor="green"
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
