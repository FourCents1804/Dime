import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Location, Permissions } from 'expo';
import styles from '../../public';
import { connect } from 'react-redux';

class PurchaseMap extends Component {
  state = {
    location: {
      coords: {
        latitude: 0,
        longitude: 0
      }
    }
  };

  componentWillMount() {
    this._getLocationAsync();
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

  render() {
    const { purchases } = this.props.navigation.state.params;
    const { location } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
          {purchases.map(purchase => {
            return (
              <Marker
                key={purchase.purchaseUid}
                title={purchase.name}
                coordinate={{
                  latitude: purchase.location.coords.latitude,
                  longitude: purchase.location.coords.longitude
                }}
                onCalloutPress={() => this.props.navigation.navigate('Search', {purchases: [purchase]})}

              />
            );
          })}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User
});

export default connect(
  mapStateToProps,
  null
)(PurchaseMap);
