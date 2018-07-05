import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {  ImagePicker, Camera, Permissions } from 'expo';
import { connect } from 'react-redux';
import { addNewPurchase } from '../store/Thunks';

class Webcam extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentWillMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async takePicture() {
    const { navigate } = this.props.navigation;
    const { user } = this.props;
    if (this.camera) {
      let photo = await ImagePicker.launchCameraAsync({ allowsEditing: true });

      navigate('TakenImage', {
        uri: photo.uri,
        base64: photo.base64,
        navigate: navigate
      });
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

          ImagePicker.launchCameraAsync({ allowsEditing: true })

        // <View style={{ flex: 1 }}>
          // <Camera
        //     ref={ref => (this.camera = ref)}
        //     style={{ flex: 1 }}
        //     type={this.state.type}
        //   >
        //     <View
        //       style={{
        //         flex: 1,
        //         backgroundColor: 'transparent',
        //         justifyContent: 'space-evenly',
        //         flexDirection: 'row'
        //       }}
        //     >
        //       <TouchableOpacity
        //         style={{
        //           alignSelf: 'flex-end',
        //           alignItems: 'center'
        //         }}
        //         onPress={() => {
        //           this.takePicture();
        //         }}
        //       >
        //         <Image
        //           style={{ height: 70, width: 70, marginBottom: 25 }}
        //           source={require('../../public/capture.png')}
        //         />
        //       </TouchableOpacity>
        //     </View>
        //   </Camera>
        // </View>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  addNewPurchase: uri => dispatch(addNewPurchase(uri))
});

const mapStateToProps = state => ({
  user: state.User
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Webcam);
