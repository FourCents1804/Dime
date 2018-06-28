import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  View, Text, Button, StyleSheet } from 'react-native';
import t from 'tcomb-form-native'
const Form = t.form.Form;

class User extends Component {

  handleSubmit () {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {

    const userForm = t.struct({
      email: t.String,
      username: t.String,
      password: t.String,
      terms: t.String
    });

    return (
      <View style={styles.container}>
        <Text>
          <Form
          ref={c => this._form = c}
            type={userForm}
            />
        </Text>
        <Button
          title="Save"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

const mapStateToProps = state => ({
  user: state.User
});

export default connect(
  mapStateToProps,
  null
)(User);
