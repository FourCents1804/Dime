import React, { Component } from 'react';
import axios from 'axios';
import { BarCodeScanner, Permissions, Location } from 'expo';
import styles from '../../public';
import {commitPurchase} from '../store/Thunks/Purchase'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from 'react-native-elements';
import { barcodeKey } from '../../secrets';

class BarcodeScanner extends Component {
  state = {
    date: Date.now(),
    amount: '',
    name: '',
    location: null
  };


  handleSubmit = async () => {

      this.setState({location: this._getLocationAsync()})
      const {user} = this.props.navigation.state.params
      console.log(user.uid)
      const {data} = await axios.post(
         'https://safe-bastion-55889.herokuapp.com/api/sentimentAnalysis', {product: this.state.name}
          // 'http://192.168.1.38:3000/api/sentimentAnalysis', {product: this.state.name}
        )
        let purchaseToCommit = {...this.state, category: data}
        this.props.commitPurchase(user.uid, purchaseToCommit)
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        location
      });
    }
  };
  _handleBarCodeRead = async ({ type, data }) => {
    try {
      const returnData = await axios.get(
        `https://api.upcdatabase.org/product/${data}/${barcodeKey}`
      );

      alert(
        `Bar code with type ${data} returned ${
          returnData.data.description
        } after scan!`
      );
      if (returnData.data.description) {
        this.setState({ name: returnData.data.description });
      }
    } catch (err) {
      alert('Product Not Found!');
    }
  };
  render() {
    const { name, amount } = this.state;
    return this.state.name === '' ? (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          // autoFocus={true}
          onBarCodeRead={this._handleBarCodeRead}
          style={StyleSheet.absoluteFill}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: 'space-evenly',
              flexDirection: 'row'
            }}
          />
        </BarCodeScanner>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.thinTitle}>Scanned Product</Text>
          <View>
            <FormLabel>Product Name</FormLabel>
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
              containerStyle={styles.inputLine}
              value={amount}
              onChangeText={value => {
                this.setState({ amount: value });
              }}
            />
          </View>
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            raised={true}
            backgroundColor="#0080ff"
            style={styles.signUpButton}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    commitPurchase: (uid, purchaseToCommit) => dispatch(commitPurchase(uid, purchaseToCommit))
})


export default connect(null, mapDispatchToProps)(BarcodeScanner)
