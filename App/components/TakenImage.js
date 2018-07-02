import React, { Component } from 'react';
import { CacheImage } from './index';
import { ScrollView, TouchableOpacity, Image, View } from 'react-native';
import { addNewPurchase, commitPurchase } from '../store/Thunks/Purchase';

import { connect } from 'react-redux';

class TakenImage extends Component {
  render() {
    const {uri, base64} = this.props.navigation.state.params
    const { purchase, user, addNewPurchase, commitPurchase } = this.props;
    return Object.keys(purchase).length === 0 ? (
      <ScrollView>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            width: '100%'
          }}
          onPress={() => {
            addNewPurchase(base64);
          }}
        >
          <Image
            style={{ top: 5, height: 80, width: 100 }}
            source={require('../../public/eye.png')}
          />
        </TouchableOpacity>
        <CacheImage uri={uri} />
      </ScrollView>
    ) : (
      <View>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            width: '100%'
          }}
          onPress={() => {

            commitPurchase(user.uid, purchase.data);
          }}
        >

          <Image
            style={{ top: 5, height: 80, width: 100 }}
            source={require('../../public/eye.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  purchase: state.Purchase,
  user: state.User
});

const mapDispatchToProps = dispatch => ({
  addNewPurchase: uri => dispatch(addNewPurchase(uri)),
  commitPurchase: (uuid, purchaseData) => dispatch(commitPurchase( uuid, purchaseData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TakenImage);
