import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  View, Text } from 'react-native';
import  styles from '../../public/index'
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from 'react-native-elements';

class User extends Component {

  constructor () {
    super()
    this.state = {
      firstName: 'Jenny',
      lastName: 'Wang',
      email: 'jenny@jenny.com',
      error: ' '
    }
  }

  handleSubmit = async () => {
    await this.handleError()
    const { navigate } = this.props.navigation;
    const form = (({firstName, lastName, email}) => ({firstName, lastName, email}))(this.state)
  };

  render() {
    const { user } = this.props;
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View>
            <FormLabel>First Name</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              containerStyle={styles.inputLine}
              value={this.state.firstName}
              onChangeText={value => {
                this.setState({ firstName: value})
              }}
            />
          </View>

          <View>
          <FormLabel>Last Name</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              containerStyle={styles.inputLine}
              value={this.state.lastName}
              onChangeText={value => {
                this.setState({ firstName: value})
              }}
            />
          </View>


          <View>
          <FormLabel>Email</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="none"
              containerStyle={styles.inputLine}
              value={this.state.email}
              onChangeText={value => {
                this.setState({ email: value})
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
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User
});

export default connect(
  mapStateToProps,
  null
)(User);
