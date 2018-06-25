import React, { Component } from "react";
import { CacheImage } from "./index";
import { View } from "react-native";

class TakenImage extends Component {
  render() {
    const uri = this.props.navigation.state.params.uri;
    return <CacheImage uri={uri} />;
  }
}

export default TakenImage;
