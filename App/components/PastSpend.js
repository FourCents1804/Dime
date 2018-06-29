import React from "react";
import { Line } from "./";
import SpendHistory from "./SpendHistory";
import { View, Text, ScrollView } from "react-native";
import styles from "../../public";

const PastSpend = () => {
  return (
    <ScrollView bounce={false}>
      <View>
        <Text style={styles.h1Text}>You have spent $'' in the past year.</Text>
      </View>
      <View>
        <Line />
        <SpendHistory style={styles.spendHistory} />
      </View>
    </ScrollView>
  );
};

export default PastSpend;
