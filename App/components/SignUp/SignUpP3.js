import React from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import { auth } from "../../store";
import { connect } from "react-redux";
import styles from "../../../public";
import { Slider, CheckBox, Divider, Button } from "react-native-elements";

class SignUpP3 extends React.Component {
  state = {
    rent: 0,
    electricity: 0,
    gas: 0,
    phone: 0,
    transportation: 0,
    entertainment: 0
  };
  handleSubmit = event => {
    event.preventDefault();
    const { popToTop } = this.props.navigation;
    let newUserData = this.props.navigation.state.params.newUserData;
    newUserData.push(this.state);
    this.props.sendInfo(newUserData, "signup");
    popToTop();
  };

  createCheckBox = () => {
    let checkBArr = [];
    for (keys in this.state) {
      let el = keys;
      checkBArr.push(
        <View>
          <CheckBox
            title={keys}
            checked={this.state[keys] > 0}
            onPress={() =>
              this.setState(this.state[el] ? { [el]: 0 } : { [el]: 1 })
            }
            checkedColor="#0080ff"
            containerStyle={styles.signUpCheckbox}
          />
          {this.state[keys] ? (
            <View style={styles.row}>
              <Slider
                style={styles.signUpSlider}
                minimumValue={0}
                maximumValue={4000}
                value={this.state[el]}
                onValueChange={value =>
                  this.setState({ [el]: Math.floor(value) })
                }
                thumbTintColor="#0080ff"
                minimumTrackTintColor="#99CCFF"
              />
              <View style={styles.signUpAmt}>
                <Text style={styles.searchResultText}>
                  {" "}
                  {`$${Math.floor(this.state[el])}`}
                </Text>
              </View>
            </View>
          ) : (
            <Divider style={styles.dividerVS} />
          )}
        </View>
      );
    }
    return checkBArr;
  };
  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
      >
        <ImageBackground
          source={require("../../../public/park3.jpg")}
          style={styles.backgroundImg}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            enabled
            behavior="position"
            style={{ paddingTop: 20 }}
          >
            <View style={styles.loginContainer}>
              <Text style={styles.thinTitle}>Monthly Expenses</Text>
              {this.createCheckBox()}
              <Button
                onPress={this.handleSubmit}
                title="Create Your Account"
                raised={true}
                backgroundColor="#0080ff"
                style={styles.signUpButton}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendInfo: (userData, formName) => dispatch(auth(userData, formName))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpP3);
