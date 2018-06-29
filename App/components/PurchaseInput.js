import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import styles from "../../public";
import { commitPurchase } from "../store/Thunks/User";
import { Button, FormInput } from "react-native-elements";

class Purchase extends Component {
  state = {
    form: {
      name: "",
      amount: 0,
      categoryBroad: "",
      categoryDetailed: ""
    }
  };

  createFormInput = () => {
    const categoryNames = {
      name: "Name",
      amount: "Amount",
      categoryBroad: "Category",
      categoryDetailed: "Subcategory"
    };

    let formInputArr = [];
    for (let keys in this.state.form) {
      let stateFields = keys;
      formInputArr.push(
        <View key={stateFields}>
          <FormInput
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.commitPurchase(this.props.user, this.state.form);
  };

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Text style={styles.thinTitle}>Add an Expense</Text>
            {this.createFormInput()}
            <Button
              onPress={this.handleSubmit}
              title="Submit"
              raised={true}
              backgroundColor="#0080ff"
              style={styles.signUpButton}
            />
          </View>
        </View>
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
