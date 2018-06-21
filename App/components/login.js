import React from "react";
import { StyleSheet, View } from "react-native";
import { auth } from "../store/Thunks/User";
import { Home } from "./index";
import { connect } from "react-redux";
import { me } from "../store";
import {
  Text,
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
class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const formName = "login";
    this.props.auth(this.state, formName);
  };

  render() {
    const { navigate } = this.props.navigation;
    const { user } = this.props;
    if (user === undefined) user = {};
    return user.id ? (
      <View>
        <Home style={styles.container} navigate={navigate} />
      </View>
    ) : (
      <View style={styles.container}>
        <FormLabel> Email </FormLabel>
        <FormInput
          autoCapitalize="none"
          textAlign="center"
          onChangeText={email => this.setState({ email })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <FormLabel> Password </FormLabel>
        <FormInput
          autoCapitalize="none"
          textAlign="center"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <FormValidationMessage>Error</FormValidationMessage>
        <Button
          onPress={this.handleSubmit}
          title="Login"
          raised={true}
          rounded={true}
          backgroundColor="green"
        />
        <Text> or </Text>
        <Button onPress={() => navigate("SignUp")} title="Sign Up" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User
});

const mapDispatchToProps = dispatch => ({
  isLoggedIn: () => dispatch(me()),
  auth: (userData, formName) => dispatch(auth(userData, formName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
