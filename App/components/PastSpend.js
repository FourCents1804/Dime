import React from "react";
import { Line } from "./";
import SpendHistory from "./SpendHistory";
import { View, Text } from "react-native";
import styles from "../../public";

const PastSpend = () => {
  return (
    <View>
      <View>
        <Text style={styles.h1Text}>You have spent $'' in the past year.</Text>
      </View>
      <View>
        <Line />
      </View>
      <View>
        <SpendHistory />
      </View>
    </View>
  );
};

export default PastSpend;
