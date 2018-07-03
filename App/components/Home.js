import { ScrollView, View, Text } from "react-native";
import { connect } from "react-redux";
import Pie from "../D3/Doughnut";
import { SpendTable } from "./";
import styles from "../../public";
import React, { Component } from "react";
import { Permissions } from "expo";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { getUser } from "../store/Thunks/User";
import User from "./Utility/exampleUser";

class Home extends Component {
  async componentDidMount() {
    await this.props.getUser(User);
  }

  componentWillMount() {
    Permissions.askAsync(Permissions.LOCATION);
  }

  render() {
    const { user, navigate, purchases } = this.props;
    const firstName = user ? `, ${user.firstName}` : ``;
    console.log(purchases);
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={{ paddingTop: 10 }}>
          <Text style={styles.thinTitle}>Welcome{firstName}!</Text>
          <Pie userPurchases={this.props.purchases || []} />
          <SpendTable userPurchases={purchases || []} />
        </ScrollView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          style={styles.actionButton}
        >
          <ActionButton.Item
            buttonColor="#3498db"
            title="Camera"
            onPress={() => navigate("Webcam")}
          >
            <Icon name="ios-camera" size={30} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Keyboard"
            onPress={() => navigate("Purchase")}
          >
            <Icon name="ios-keypad" size={30} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
    // }
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.userInfo
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(getUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
