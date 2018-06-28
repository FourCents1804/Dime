import React from "react";
import { Line } from "./";
import SpendHistory from "./SpendHistory";
import { View, Text, ScrollView } from "react-native";
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
      <ScrollView>
        <SpendHistory />
      </ScrollView>
    </View>
  );
};

export default PastSpend;
