import React from "react";
import { View, ActivityIndicator } from "react-native";


const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#008ECC" />
    </View>
  )
}

export default Loading
