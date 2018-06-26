import React, { Component } from "react";
import { Text, View, Easing, ScrollView, Animated } from "react-native";
import { auth } from "../store";
import { connect } from "react-redux";
import styles from "../../public";
import {
  Slider,
  CheckBox,
  Divider,
  Button,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

class Expense extends Component {
  state = {
    form: {
      category: "",
      value: 0
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

  // handleSubmit = event => {
  //   event.preventDefault();
  //   newUserData.push(this.state);
  //   this.props.sendInfo(newUserData, "signup");
  // };

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          {/* <Text>Hello world</Text> */}
          {/* <Divider style={styles.dividerS} />
          <Divider style={styles.dividerVS} /> */}
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

export default connect(
  null,
  null
)(Expense);
