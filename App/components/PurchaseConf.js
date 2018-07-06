import React from "react";
import {
  FormInput,
  FormLabel,
  Button,
  FormValidationMessage
} from "react-native-elements";
import styles from "../../public/index";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { commitPurchase } from "../store/Thunks";

class PurchaseConf extends React.Component {
  state = {
    name: "",
    category: "",
    amount: "",
    error: " ",
    date: Date.now()
  };
  componentDidMount() {
    const { data } = this.props.purchase;
    this.setState({ amount: data.amount, category: data.category });
  }

  handleSubmit = async () => {
    const { user } = this.props;
    await this.setState({ amount: this.state.amount.slice(1) });
    await this.props.commitPurchase(user.uid, this.state);
    this.props.popToTop();
  };

  render() {
    return (
      <KeyboardAvoidingView enabled behavior="padding">
        <View style={styles.loginContainer}>
          <Text style={styles.thinTitle}>Confirm Purchase</Text>
          <View>
            <FormLabel>Name</FormLabel>
            <FormInput
              errorMessage
              autoCapitalize="words"
              containerStyle={styles.inputLine}
              value={this.state.name}
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
              containerStyle={styles.inputLine}
              value={this.state.amount}
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
              value={this.state.category}
              onChangeText={value => {
                this.setState({ category: value });
              }}
            />
          </View>

          <View>
            <Button
              onPress={this.handleSubmit}
              title="Submit"
              raised={true}
              backgroundColor="#0080ff"
              style={styles.signUpButton}
            />
          </View>
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  purchase: state.purchaseToCommit,
  user: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
  commitPurchase: (uuid, purchaseData) =>
    dispatch(commitPurchase(uuid, purchaseData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseConf);
