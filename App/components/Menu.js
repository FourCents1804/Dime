import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "../../public";

const Menu = props => {
  const { navigate } = props;
  return (
    <View style={styles.menu}>
      <View style={styles.menuLabel}>
        <Text style={styles.menuLabelText}>TRANSACTIONS</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigate("Webcam")}
        style={styles.menuLinks}
      >
        <Text style={styles.menuLinkText}>Receipt Wallet</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigate("Search")}
        style={styles.menuLinks}
      >
        <Text style={styles.menuLinkText}>Find Transactions</Text>
      </TouchableHighlight>
      <View style={styles.menuLabel}>
        <Text style={styles.menuLabelText}>ANALYSIS AND INSIGHTS</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigate("PastSpend")}
        style={styles.menuLinks}
      >
        <Text style={styles.menuLinkText}>Past Expense Analysis</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigate("Webcam")}
        style={styles.menuLinks}
      >
        <Text style={styles.menuLinkText}>Future Projections</Text>
      </TouchableHighlight>
      <View style={styles.menuLabel}>
        <Text style={styles.menuLabelText}>CONNECT</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigate("FAQ")}
        style={styles.menuLinks}
        navigate={props.navigate}
      >
        <Text style={styles.menuLinkText}>FAQ</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigate("AboutUs")}
        style={styles.menuLinks}
        navigate={props.navigate}
      >
        <Text style={styles.menuLinkText}>About Us</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Menu;
