import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Camera, Permissions } from "expo";

export default class Webcam extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  async takePicture() {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ base64: true });
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                justifyContent: "space-evenly",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.takePicture();
                }}
              >
                <Image
                  style={{ height: 70, width: 70, marginBottom: 25 }}
                  source={require("../../public/capture.png")}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
