import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { sanFranciscoWeights } from "react-native-typography";
import styles from "../../public";

const AboutUs = props => {
  const { navigate } = props;
  return (
    <View>
      <TouchableHighlight
        onPress={() => navigate("Webcam")}
        style={styles.menuLinks}
      >
        <Text style={[sanFranciscoWeights.medium, styles.linkText]}>FAQ</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => console.log("hello")}
        style={styles.menuLinks}
      >
        <Text style={[sanFranciscoWeights.medium, styles.linkText]}>
          Contact
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default AboutUs;
