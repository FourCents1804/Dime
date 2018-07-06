import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, KeyboardAvoidingView } from "react-native";
import styles from "../../public/index";
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from "react-native-elements";

class User extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      error: " "
    };
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleError = () => {
    const { firstName, lastName, email } = this.state;
    if (firstName === "") {
      this.setState({ error: `First name is a required field` });
    } else if (lastName === "") {
      this.setState({ error: `Last name is a required field` });
    } else if (!this.validateEmail(email)) {
      this.setState({ error: `Please enter a valid email` });
    } else {
      this.setState({ error: " " });
    }
  };

  handleSubmit = async () => {
    await this.handleError();
    const { navigate } = this.props.navigation;
    const form = (({ firstName, lastName, email }) => ({
      firstName,
      lastName,
      email
    }))(this.state);
    if (this.state.error === " ") {
      console.log("ADD USER PUT THUNK HERE", form);
      navigate("Home");
    }
  };

  cancel = () => {
    this.props.navigation.popToTop();
  };

  render() {
    console.log(this.props.user);
    const { firstName, lastName, email } = this.props.user.userInfo
      ? this.props.user.userInfo
      : { firstName: "", lastName: "", email: "" };
    return (
      <View style={styles.editUserContainer}>
        <KeyboardAvoidingView enabled behavior="padding">
          <View style={styles.loginContainer}>
            <Text style={styles.thinTitle}>Edit Profile</Text>
            <View>
              <FormLabel>First Name</FormLabel>
              <FormInput
                errorMessage
                autoCapitalize="words"
                containerStyle={styles.inputLine}
                value={firstName}
                onChangeText={value => {
                  this.setState({ firstName: value });
                }}
              />
            </View>

            <View>
              <FormLabel>Last Name</FormLabel>
              <FormInput
                errorMessage
                autoCapitalize="words"
                containerStyle={styles.inputLine}
                value={lastName}
                onChangeText={value => {
                  this.setState({ lastName: value });
                }}
              />
            </View>

            <View>
              <FormLabel>Email</FormLabel>
              <FormInput
                errorMessage
                autoCapitalize="none"
                containerStyle={styles.inputLine}
                value={email}
                onChangeText={value => {
                  this.setState({ email: value });
                }}
              />
            </View>
            <View>
              <Button
                onPress={() => {
                  this.handleSubmit();
                }}
                title="Save"
                raised={true}
                backgroundColor="#0080ff"
                style={styles.signUpButton}
              />
            </View>
            <View>
              <Button
                onPress={this.cancel}
                title="Cancel"
                raised={true}
                backgroundColor="#0080ff"
                style={styles.signUpButton}
              />
            </View>
            <FormValidationMessage>{this.state.error}</FormValidationMessage>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userInfo
});

export default connect(
  mapStateToProps,
  null
)(User);
