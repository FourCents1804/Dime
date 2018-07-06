import React, { Component } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../public';

import { commitPurchase } from '../store';
import { Dropdown } from 'react-native-material-dropdown';
import { categories } from './Utility/purchaseInput';


import {
  Button,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

class Purchase extends Component {
  state = {
    error: '',
    form: {
      name: '',
      amount: '',
      categoryBroad: ''
    }
  };


  handleError = () => {
    if (this.state.form.amount === '') {
      this.setState({ error: 'Amount is A required Field' });
    } else {
      this.setState({ error: '' });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { navigation, commitPurchase } = this.props;
    const { form} = this.state
    await this.handleError();
    if (this.state.error === '') {
      commitPurchase(this.props.user.uid, {
        ...form
      });
      alert(`${form.name} Successfully Added to Purchases!`);
      navigation.popToTop();
    }
  };

  cancel = () => {
    this.props.navigation.popToTop();
  };

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
      >
        <KeyboardAvoidingView enabled behavior="padding">
          <Text style={styles.thinTitle}>Add an Expense</Text>
          <View style={styles.loginContainer}>
            <View>

              <FormInput
                containerStyle={styles.inputLine}
                autoCapitalize="words"
                placeholder="Name"
                onChangeText={value => {
                  stateFields = { ...this.state.form };
                  stateFields.name = value;
                  this.setState({ form: stateFields });
                }}
              />
            </View>
            <View>
              <FormInput
                keyboardType="numeric"
                containerStyle={styles.inputLine}
                placeholder="Amount (Required)"
                onChangeText={value => {
                  stateFields = { ...this.state.form };
                  stateFields.amount = value;
                  this.setState({ form: stateFields });
                }}
              />
            </View>
            <View>
              <Dropdown
                label="Category"
                data={categories}
                containerStyle={styles.signUpDropdown}
                onChangeText={value => {
                  stateFields = { ...this.state.form };
                  stateFields.categoryBroad = value;
                  this.setState({ form: stateFields });
                }}
              />
            </View>
          </View>
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            raised={true}
            backgroundColor="#0080ff"
            style={styles.signUpButton}
          />
          <Button
            onPress={this.cancel}
            title="Cancel"
            raised={true}
            backgroundColor="red"
            style={styles.signUpButton}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    commitPurchase: (userUid, purchase) => dispatch(commitPurchase(userUid, purchase))
  };
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchase);
