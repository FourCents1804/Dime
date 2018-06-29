import React from 'react';
import { Text, View, Easing, ScrollView, Animated } from 'react-native';
import { auth } from '../../store';
import { connect } from 'react-redux';
import {slide, fade} from '../../../public/common-util'
import styles from '../../../public';
import {
  Slider,
  CheckBox,
  Divider,
  Button,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

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
      let newUserData = this.props.navigation.state.params.newUserData
      newUserData.push(this.state);
      this.props.sendInfo(newUserData, 'signup');
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
            />
            {this.state[keys] ? (
              <View>
                <Slider
                  style={{ width: 100 }}
                  minimumValue={0}
                  maximumValue={4000}
                  value={this.state[el]}
                  onValueChange={value => this.setState({ [el]: value })}
                />
                <Text> {Math.floor(this.state[el])}</Text>
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
