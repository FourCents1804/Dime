import React, { Component } from 'react';
import { CacheImage, PurchaseConf } from './index';
import { ScrollView, TouchableOpacity, Image, View } from 'react-native';
import style from '../../public';
import { commitPurchase } from '../store/Thunks';

import { connect } from 'react-redux';

class TakenImage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { uri } = this.props.navigation.state.params;
    const { purchase, user, commitPurchase } = this.props;
    return Object.keys(purchase).length === 0 ? (
      <ScrollView>
        <CacheImage uri={uri} navigate={navigate} />
      </ScrollView>
    ) : (
      <View style={style.container}>
        {/* <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            backgroundColor: "lightblue",
            width: "100%"
          }}
          onPress={() => {
            console.log("In the Onpress", purchase.data, user.uid);
            commitPurchase(user.uid, purchase.data);
          }}
        >
          <Image
            style={{ top: 5, height: 80, width: 100 }}
            source={require("../../public/eye.png")}
          />
        </TouchableOpacity> */}
        <PurchaseConf purchase={purchase} popToTop={this.props.navigation.popToTop} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  purchase: state.purchaseToCommit,
  user: state.user.userInfo
});

// const mapDispatchToProps = dispatch => ({
//   commitPurchase: (uuid, purchaseData) =>
//     dispatch(commitPurchase(uuid, purchaseData))
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(TakenImage);
