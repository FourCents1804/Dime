import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Location, Permissions } from 'expo';
import styles from '../../public';

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
      console.log(this.state.location);
    }
  };
  render() {
    console.log(this.state);
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
        />
      </View>
    );
  }
}

export default PurchaseMap;
