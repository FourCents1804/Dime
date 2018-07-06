import React from "react";
import {
  Text,
  View,
  Animated,
  ImageBackground,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { auth } from "../store/Thunks";
import styles from "../../public";
import { connect } from "react-redux";
import {
  Button,
  Divider,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    fadeAnim: new Animated.Value(0),
    error: " "
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  handleSubmit = async event => {
    event.preventDefault();
    const formName = "login";
    const error = await this.props.auth(this.state, formName);
    if (error) {
      this.setState({ error });
    }
  };

  render() {
    const { fadeAnim } = this.state;
    const { navigate } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../public/city.jpg")}
          style={styles.backgroundImg}
          resizeMode="cover"
        >
          <KeyboardAvoidingView enabled behavior="position">
            <Animated.View style={{ opacity: fadeAnim }}>
              <View style={styles.loginContainer}>
                <Image
                  style={{ height: 50, width: 200 }}
                  resizeMode="contain"
                  source={require("../../public/DimeLogo.png")}
                />
                <FormInput
                  placeholder="Email"
                  containerStyle={styles.inputLine}
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                />
                <Divider style={styles.dividerVS} />
                <FormInput
                  containerStyle={styles.inputLine}
                  autoCapitalize="none"
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                />
                <FormValidationMessage>
                  {this.state.error}
                </FormValidationMessage>

                <Button
                  onPress={this.handleSubmit}
                  title="Login"
                  raised={true}
                  backgroundColor="#0080ff"
                  style={styles.wideButton}
                />
                <Button
                  style={styles.wideButton}
                  onPress={() => navigate("SignUpP1")}
                  title="Sign Up"
                  raised={true}
                  backgroundColor="#0080ff"
                >
                  <Text style={styles.signUpFont}>Sign Up</Text>
                </Button>
              </View>
            </Animated.View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  auth: (userData, formName) => dispatch(auth(userData, formName))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
