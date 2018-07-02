import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
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
    console.log(purchases)
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
            console.log(purchase)
            return (
              <MapView.Marker
                coordinate={{
                  latitude: 70.404034,
                  longitude: 41.0359036,
                }}
                title={purchase.name}
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
