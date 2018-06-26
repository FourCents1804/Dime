import {
  ScrollView,
  TouchableOpacity,
  ART,
  Image,
  View,
  Text
} from "react-native";
import { Header, Divider } from "react-native-elements";
const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;
import { connect } from "react-redux";
import Pie, { userPurchases } from "../D3/Doughnut";
import RNSCHistogram, { userPurchasesYear } from "../D3/RNSCHistogram";
import { logout } from "../store";
import styles from "../../public";
import React, { Component } from "react";
import Histogram from "../D3/Histogram";
import Line from "../D3/Line";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

const Home = props => {
  const chartWidth = 250;
  const chartHeight = 250;
  const { user, navigate } = props;
  return (
    <ScrollView>
      <Header
        placement="left"
        leftComponent={
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={() => navigate("Webcam")}
          >
            <Image
              style={{ top: 20, height: 80, width: 60 }}
              source={require("../../public/menu.png")}
            />
          </TouchableOpacity>
        }
        centerComponent={{
          text: user.firstName + " " + user.lastName,
          style: { fontSize: 25, color: "#fff" }
        }}
        rightComponent={
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={() => navigate("User")}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../../public/user.png")}
            />
          </TouchableOpacity>
        }
      />
      <Text>Welcome, {user.firstName} </Text>
      <Pie userPurchases={userPurchases} />
      <RNSCHistogram
        userPurchases={userPurchasesYear}
        width={chartWidth}
        height={chartHeight}
      />
      <Histogram width={250} height={200} margin={20} />
      <Line />
      <Divider style={styles.dividerS} />
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#3498db"
          title="Camera"
          onPress={() => navigate("Webcam")}
        >
          <Icon name="ios-camera" size={30} />
          {/* <Image
            style={{ height: 40, width: 40 }}
            source={require("../../public/capture.png")}
          /> */}
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Keyboard"
          onPress={() => {}}
        >
          <Icon name="ios-keypad" size={30} />
        </ActionButton.Item>
      </ActionButton>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  user: state.User
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
