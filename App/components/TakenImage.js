import React, { Component } from 'react';
import { CacheImage } from './index';
import { ScrollView, TouchableOpacity, Image, View } from 'react-native';

import { addNewPurchase } from '../store/Thunks/Purchase';
import { connect } from 'react-redux';

class TakenImage extends Component {
  render() {
    const uri = this.props.navigation.state.params.uri;
    const { purchase } = this.props;
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
            this.props.addNewPurchase(uri);
          }}
        >
          <Image
            style={{ top: 5, height: 80, width: 100 }}
            source={require('../../public/eye.png')}
          />
        </TouchableOpacity>
        {/* <CacheImage uri={uri} /> */}
      </ScrollView>
    ) : (
      <View>{console.log(purchase)}</View>
    );
  }
}

const mapStateToProps = state => ({
  purchase: state.Purchase
});

const mapDispatchToProps = dispatch => ({
  addNewPurchase: uri => dispatch(addNewPurchase(uri))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TakenImage);
