import React, { Component } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../public';
import { Location, Permissions } from 'expo';
import { commitPurchase } from '../store/Thunks/Purchase';
import {
  Button,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

class Purchase extends Component {
  state = {
    formType: '',
    error: '',
    location: '',
    date: Date.now(),
    form: {
      name: '',
      amount: '',
      categoryBroad: '',
      categoryDetailed: ''
    },
    quick: {
      amount: ''
    }
  };

  componentWillMount = () => {
    this._getLocationAsync();
  };

  createQuickInput = () => {
    const categoryNames = {
      amount: 'Amount'
    };
    let quickInputArr = [];
    for (let keys in this.state.quick) {
      let stateFields = keys;
      quickInputArr.push(
        <View key={stateFields}>
          <FormInput
            keyboardType="numeric"
            containerStyle={styles.inputLine}
            placeholder={categoryNames[stateFields]}
            onChangeText={value => {
              stateFields = { ...this.state.quick };
              stateFields[keys] = value;
              this.setState({ quick: stateFields });
            }}
          />
        </View>
      );
    }
    return quickInputArr;
  };

  createFormInput = () => {
    const categoryNames = {
      name: 'Name',
      amount: 'Amount',
      categoryBroad: 'Category',
      categoryDetailed: 'Subcategory'
    };

    let formInputArr = [];
    for (let keys in this.state.form) {
      let stateFields = keys;
      formInputArr.push(
        <View key={stateFields}>
          <FormInput
            keyboardType={(() => {
              if (keys === 'amount') return 'numeric';
              else return 'default';
            })()}
            containerStyle={styles.inputLine}
            placeholder={categoryNames[stateFields]}
            onChangeText={value => {
              stateFields = { ...this.state.form };
              stateFields[keys] = value;
              this.setState({ form: stateFields });
            }}
          />
        </View>
      );
    }
    return formInputArr;
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
    let formCheck = [];
    for (let keys in this.state.form) {
      formCheck.push(this.state.form[keys]);
    }

    if (formCheck.join('') !== '' && this.state.quick.amount !== '') {
      this.setState({ error: 'Please fill out only one form!' });
    }
    if (formCheck.join('') !== '') {this.setState({formType: 'ADVANCED'})}

    else {
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
        <KeyboardAvoidingView
          enabled
          behavior="padding"

        >
          <Text style={styles.thinTitle}>Add an Expense</Text>
          <Text style={styles.thinTitle}>I'll Do it Later</Text>

          <View style={styles.loginContainer}>{this.createQuickInput()}</View>

          <Text style={styles.thinTitle}>Or</Text>

          <Text style={styles.thinTitle}>I'll Do It Now</Text>

          <View style={styles.loginContainer}>{this.createFormInput()}</View>

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
  user: state.User
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchase);
