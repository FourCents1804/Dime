import React from 'react';
import { FormInput, FormLabel, Button,FormValidationMessage } from 'react-native-elements';
import styles from '../../public/index';
import { View, Text, KeyboardAvoidingView } from 'react-native';

export default class PurchaseConf extends React.Component {
    state = {
      category: this.props.category || '',
      amount: this.props.amount || 0,
      error: ' '
    };

  handleError = () => {
    const { amount, category } = this.state;
    if (amount === 0 || typeof amount !== 'number') {
      this.setState({ error: `Amount is invalid` });
    } else if (category === '') {
      this.setState({ error: `Category is a required field` });
    } else {
      this.setState({ error: ' ' });
    }
  };

  handleSubmit = async () => {
    await this.handleError();
    const { navigate } = this.props.navigation;
    const form = (({ category, amount }) => ({ category, amount }))(this.state);
    if (this.state.error === ' ') {
      console.log('ADD USER PUT THUNK HERE', form);
      navigate('Home');
    }
  };

  render() {
    const { amount, category } = this.props;
    console.log(this.state.amount)
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.loginContainer}>
          <Text style={styles.thinTitle}>Confirm Purchase</Text>
          <View>
            <FormLabel>Amount</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              containerStyle={styles.inputLine}
              value={amount}
              onChangeText={value => {
                this.setState({ amount: Number(value) });
              }}
            />
          </View>

          <View>
            <FormLabel>Category</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              containerStyle={styles.inputLine}
              value={category}
              onChangeText={value => {
                this.setState({ category: value });
              }}
            />
          </View>

          <View>
            <Button
              onPress={() => {
                this.handleSubmit();
              }}
              title="Submit"
              raised={true}
              backgroundColor="#0080ff"
              style={styles.signUpButton}
            />
          </View>
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
