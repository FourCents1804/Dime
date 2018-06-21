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
class LLogin extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const formName = "login";
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.props.sendInfo(formName, email, password);
  };

  render() {
    return (
      <View style={styles.container}>
        <FormLabel> Email </FormLabel>
        <FormInput ref={ref => (this.formInput = ref)} />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Password </FormLabel>
        <FormInput />
        <FormValidationMessage>Error</FormValidationMessage>
        <Button
          onPress={this.handleSubmit}
          title="Login"
          raised={true}
          rounded={true}
          backgroundColor="green"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendInfo: (formName, email, password) =>
    dispatch(auth(formName, email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(LLogin);
