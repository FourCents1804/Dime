import React from "react";
import { View, Animated } from "react-native";
import { auth } from "../store/Thunks/User";
import styles from "../../public";
import { connect } from "react-redux";
import { me } from "../store";
import {
  Text,
  Button,
  FormInput,
  Divider,
  FormValidationMessage
} from "react-native-elements";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    fadeAnim: new Animated.Value(0),
    fadeAnim2: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000 // Make it take a while
      }
    ).start(); // Starts the animation
    Animated.timing(
      this.state.fadeAnim2, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 3000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  handleSubmit = event => {
    event.preventDefault();
    const formName = "login";
    this.props.auth(this.state, formName);
  };

  render() {
    let { fadeAnim, fadeAnim2 } = this.state;
    const { navigate } = this.props;
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <FormInput
            placeholder="Email"
            containerStyle={styles.inputLine}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
          <Divider style={styles.dividerM} />
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnim2 }}>
          <FormInput
            containerStyle={styles.inputLine}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
          <FormValidationMessage>Error</FormValidationMessage>
        </Animated.View>
        <Divider style={styles.dividerS} />
        <Animated.View style={{ opacity: fadeAnim2 }}>
          <Button
            onPress={this.handleSubmit}
            title="Login"
            raised={true}
            rounded={true}
            backgroundColor="#388e3c"
          />
          <Divider style={styles.dividerVS} />
          <Text style={styles.fontM}> or </Text>
          <Divider style={styles.dividerVS} />
          <Button
            buttonStyle={styles.signUp}
            onPress={() => navigate("SignUp")}
            rounded={true}
            title="Sign Up"
          />
        </Animated.View>
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
