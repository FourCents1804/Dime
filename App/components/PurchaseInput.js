import React, { Component } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../public';
import { Location, Permissions } from 'expo';
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
    location: '',
    date: Date.now(),
    form: {
      name: '',
      amount: '',
      categoryBroad: ''
    }
  };

  componentWillMount = () => {
    this._getLocationAsync();
  };


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        location
      });
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
    const { navigation } = this.props;
    await this.handleError();
    if (this.state.error === '') {
      const newPurchase = this.props.commitPurchase(this.props.user.uid, {
        ...this.state.form,
        date: this.state.date,
        location: this.state.location
      });
      alert('Expense successfully submitted!');
      navigation.popToTop();
    }
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
                // keyboardType="numeric"
                // containerStyle={styles.inputLine}
                name="Amount"
                onChange={value => {
                  stateFields = { ...this.state.form };
                  stateFields.amount = value;
                  this.setState({ form: stateFields })
                }}
                required
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
                  this.setState({ form: stateFields })}}
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
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    commitPurchase: (uid, purchase) => dispatch(commitPurchase(uid, purchase))
  };
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchase);
