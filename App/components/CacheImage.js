import React, { Component } from "react";
import { Image, View } from "react-native";
import shorthash from "shorthash";
import { FileSystem, Permissions, ImagePicker } from "expo";
import Firebase from "../components/Firebase/Firebase";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../public";
import { addNewPurchase } from "../store/Thunks";
import { connect } from "react-redux";

class CacheImage extends Component {
  state = {
    source: {}
  };
  componentDidMount = async () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);
    const path = `${FileSystem.cacheDirectory}${name}`;

    const image = await FileSystem.getInfoAsync(uri);
    this.uploadImage(image.uri, "send-to-google");

    if (image.exists) {
      this.setState({
        source: {
          uri: image.uri,
          path: path
        }
      });
      return;
    }

    const newImage = await FileSystem.downloadAsync(uri, path);
    console.log(newImage.uri);
    this.uploadImage(newImage.uri, "send-to-google");
    this.setState({
      source: {
        uri: newImage.uri,
        path: path
      }
    });
  };

  uploadImage = async (uri, imageName) => {
    const responce = await fetch(uri);
    const blob = await responce.blob();
    const ref = Firebase.storage.ref().child("/images" + imageName);
    return ref.put(blob);
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
              this.props.addNewPurchase();
            }}
          >
            <Icon name="ios-checkmark" size={50} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#11EC43"
            title="Retake"
            onPress={async () => {
              Permissions.askAsync(Permissions.CAMERA);
              Permissions.askAsync(Permissions.CAMERA_ROLL);
              const image = await ImagePicker.launchCameraAsync({
                allowsEditing: true
              });

              if (!image.cancelled) navigate("TakenImage", { uri: image.uri });
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

const mapDispatchToProps = dispatch => ({
  addNewPurchase: () => dispatch(addNewPurchase())
});

export default connect(
  null,
  mapDispatchToProps
)(CacheImage);
