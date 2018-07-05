import React, { Component } from 'react';
import styles from '../../public';
import { View, ScrollView, Text } from 'react-native';
import { FormInput, FormLabel, Button, FormValidationMessage} from 'react-native-elements';
import { connect } from 'react-redux';
import {editPurchase} from '../store/Thunks'

class EditPurchase extends Component {
  state = {
      upc: '',
      date: null,
    location: {},
    purchasedBy: '',
    purchaseUid: '',
    name: '',
    amount: '',
    categoryBroad: ''
  };

  componentDidMount() {
    const {product} = this.props.navigation.state.params
    this.setState({
        upc: product.upc,
        date: product.date,
        location: product.location,
        purchaseUid: product.purchaseUid,
        purchasedBy: product.purchasedBy,
        name: product.name,
        amount: product.amount,
        categoryBroad: product.categoryBroad
    })
  }
  handleSubmit =  () => {
    const purchase = { ...this.state}
    console.log(purchase)
    this.props.editPurchase(purchase.purchasedBy, this.state);
    alert('Puchase Has Been Updated!')
    this.props.navigation.popToTop()
  };

  render() {
    const { amount, name, categoryBroad } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.thinTitle}>Edit Purchase</Text>
          <View>
            <FormLabel>Name</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              containerStyle={styles.inputLine}
              value={name}
              onChangeText={value => {
                this.setState({ name: value });
              }}
            />
          </View>

          <View>
            <FormLabel>Amount</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              keyboardType="numeric"
              containerStyle={styles.inputLine}
              value={amount}
              onChangeText={value => {
                this.setState({ amount: value });
              }}
            />
          </View>

          <View>
            <FormLabel>Category</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              containerStyle={styles.inputLine}
              value={categoryBroad}
              onChangeText={value => {
                this.setState({ categoryBroad: value });
              }}
            />
          </View>

          <View>
            <Button
              onPress={
                this.handleSubmit
            }
              title="Save"
              raised={true}
              backgroundColor="#0080ff"
              style={styles.signUpButton}
            />
          </View>
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editPurchase: (user, purchase) => dispatch(editPurchase(user, purchase))
})

export default connect(
  null,
  mapDispatchToProps
)(EditPurchase);
