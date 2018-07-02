import React, { Component } from "react";
import { Image, View } from "react-native";
import shorthash from "shorthash";
import { FileSystem } from "expo";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../public";
import { addNewPurchase, commitPurchase } from "../store/Thunks/Purchase";

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
    const { base64, navigate } = this.props;
    return uri ? (
      <View>
        <Image
          style={{ height: 600, resizeMode: "contain" }}
          source={this.state.source}
        />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          style={styles.actionButton}
        >
          <ActionButton.Item
            buttonColor="#11EC43"
            title="Analyze Receipt"
            onPress={() => {
              addNewPurchase(base64);
            }}
          >
            <Icon name="ios-checkmark" size={50} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#11EC43"
            title="Retake"
            onPress={() => {
              navigate("Webcam");
            }}
          >
            <Icon name="ios-camera" size={40} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    ) : (
      <View />
    );
  }
}

export default CacheImage;
