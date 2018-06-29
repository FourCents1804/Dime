import React, { Component } from 'react';
import { Image, View } from 'react-native';
import shorthash from 'shorthash';
import { FileSystem } from 'expo';

class CacheImage extends Component {
  state = {
    source: {}
  };
  componentDidMount = async () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(uri);
    if (image.exists) {
      this.setState({
        source: {
          uri: image.uri
        }
      });
      return;
    }
    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
      source: {
        uri: newImage.uri
      }
    });
  };

  render() {
    const { uri } = this.state.source;
    return uri ? (
      <View>
        <Image
          style={{ height: 600, resizeMode: 'contain' }}
          source={this.state.source}
        />
      </View>
    ) : (
      <View />
    );
  }
}

export default CacheImage;
