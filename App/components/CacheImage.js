import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';
import shorthash from 'shorthash';
import { FileSystem } from 'expo';
import styles from '../../public/index'

class CacheImage extends Component {
  state = {
    source: {}
  };
  componentDidMount = async () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
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
    console.log(uri);
    return uri ? (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={{ height: 70, width: 70 }} uri={this.state.source.uri} />
      </ScrollView>
    ) : (
      <View />
    );
  }
}

export default CacheImage;
