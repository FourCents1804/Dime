import React from "react";
import { ScrollView, View, Text, TouchableHighlight } from "react-native";
import styles from "../../public";
import { connect } from "react-redux";
import { logout } from "../store/Thunks/User";

const Menu = props => {
  const { purchases, navigate } = props;
  return (
    <ScrollView style={styles.menu}>
      <View style={styles.menuLabel}>
        <Text style={styles.menuLabelText}>TRANSACTIONS</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigate("PurchaseMap", { purchases })}
        style={styles.menuLinks}
      >
        <Text style={styles.menuLinkText}>Purchase Map</Text>
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
        onPress={() => navigate("FutureProjections")}
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

      <View style={styles.menuLabel}>
        <Text style={styles.menuLabelText}>SETTINGS</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigate("User")}
        style={styles.menuLinks}
      >
        <Text style={styles.menuLinkText}>Edit Settings</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.logout()}
        style={styles.menuLinks}
      >
        <Text style={styles.menuLinkText}>Logout</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(
  null,
  mapDispatchToProps
)(Menu);
