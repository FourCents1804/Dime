import React, { Component } from 'react';
import { CacheImage, PurchaseConf } from './index';
import { ScrollView, TouchableOpacity, Image, View } from 'react-native';
import style from '../../public';


import { connect } from 'react-redux';

class TakenImage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { uri } = this.props.navigation.state.params;
    const { purchase } = this.props;
    return Object.keys(purchase).length === 0 ? (
      <ScrollView>
        <CacheImage uri={uri} navigate={navigate} />
      </ScrollView>
    ) : (
      <View style={style.container}>
        <PurchaseConf purchase={purchase} popToTop={this.props.navigation.popToTop} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  purchase: state.purchaseToCommit,
  user: state.user.userInfo
});


export default connect(
  mapStateToProps
)(TakenImage);
