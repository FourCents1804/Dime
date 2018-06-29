import React, { Component } from "react";
import { View, Easing, ScrollView, Animated } from "react-native";
import { connect } from "react-redux";
import styles from "../../public";
import { commitPurchase } from "../store/Thunks/User";
import {
  Divider,
  Button,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

class Purchase extends Component {
  state = {
    form: {
      name: "",
      amount: 0,
      categoryBroad: "",
      categoryDetailed: ""
    },
    slide: [
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500),
      new Animated.Value(-500)
    ]
  };

  componentDidMount() {
    let iteration = 0;
    this.state.slide.forEach(animation => {
      iteration++;
      Animated.timing(animation, {
        toValue: 0,
        duration: 350 * (iteration + 0.6),
        easing: Easing.in(Easing.ease)
      }).start();
    });
  }

  createFormInput = () => {
    let formInputArr = [];
    let iteration = 0;
    for (let keys in this.state.form) {
      let stateFields = keys;
      formInputArr.push(
        <Animated.View
          key={stateFields}
          style={{ transform: [{ translateY: this.state.slide[iteration] }] }}
        >
          <FormInput
            containerStyle={styles.inputLine}
            placeholder={stateFields[0].toUpperCase() + stateFields.slice(1)}
            onChangeText={value => {
              stateFields = { ...this.state.form };
              stateFields[keys] = value;
              this.setState({ form: stateFields });
            }}
          />
          <Divider style={styles.dividerS} />
        </Animated.View>
      );
      iteration++;
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
          {this.createFormInput()}
          <Button
            rounded={true}
            backgroundColor="green"
            onPress={this.handleSubmit}
            title="Create New Expense"
          />
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
