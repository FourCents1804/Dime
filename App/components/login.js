import React from 'react';
import {
  Text,
  View,
  Animated,
  Button as ButtonAlt,
  ImageBackground,
  Image

} from 'react-native';
import { auth } from '../store/Thunks/User';
import styles from '../../public';
import { connect } from 'react-redux';
import { me } from '../store';
import {
  Button,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
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
    const formName = 'login';
    this.props.auth(this.state, formName);
  };

  render() {
    let { fadeAnim, fadeAnim2 } = this.state;
    const { navigate } = this.props;
    return (
      <View>
        <ImageBackground source={require('../../public/city.jpg')} style={styles.backgroundImg}
        resizeMode="cover">
        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={styles.logo} />
          <View style={styles.loginContainer}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FormInput
              placeholder="Email"
              containerStyle={styles.inputLine}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
            />
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
          <Animated.View style={{ opacity: fadeAnim2, width: 300 }}>
            <Button
              onPress={this.handleSubmit}
              title="Login"
              raised={true}
              backgroundColor="#0080ff"
              style={styles.loginButton}
            />
            <ButtonAlt
              buttonStyle={styles.signUp}
              onPress={() => navigate('SignUp')}
              title="Sign Up"><Text style={styles.signUpFont}>Sign Up</Text>
            </ButtonAlt>
          </Animated.View>
          </View>
        </ImageBackground>
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
