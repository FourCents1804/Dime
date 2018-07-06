import React, { Component } from "react";
import styles from "../../public";
import { View, ScrollView, Text, KeyboardAvoidingView } from "react-native";
import {
  FormInput,
  FormLabel,
  Button,
  FormValidationMessage
} from "react-native-elements";
import { connect } from "react-redux";
import { editPurchase } from "../store/Thunks";

class EditPurchase extends Component {
  state = {
    upc: "",
    date: null,
    location: {},
    purchasedBy: "",
    purchaseUid: "",
    name: "",
    amount: "",
    category: ""
  };

  componentDidMount() {
    const { product } = this.props.navigation.state.params;
    this.setState({
      upc: product.upc,
      date: product.date,
      location: product.location,
      purchaseUid: product.purchaseUid,
      purchasedBy: this.props.user.uid,
      name: product.name,
      amount: product.amount,
      category: product.category
    });
  }

  handleSubmit = () => {
    const purchase = { ...this.state };
    console.log(purchase);
    this.props.editPurchase(purchase.purchasedBy, this.state);
    alert("Puchase Has Been Updated!");
    this.props.navigation.popToTop();
  };

  cancel = () => {
    this.props.navigation.pop(2);
  };
  render() {
    const { amount, name, category } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          enabled
          behavior="padding"
          style={styles.loginContainer}
        >
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
              textContentType=""
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
              value={category}
              onChangeText={value => {
                this.setState({ category: value });
              }}
            />
          </View>

          <View>
            <Button
              onPress={this.handleSubmit}
              title="Save"
              raised={true}
              backgroundColor="#0080ff"
              style={styles.signUpButton}
            />
          </View>
          <View>
            <Button
              onPress={this.cancel}
              title="Cancel"
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

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  editPurchase: (user, purchase) => dispatch(editPurchase(user, purchase))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPurchase);
