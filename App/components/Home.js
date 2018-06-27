import {
  ScrollView,
  TouchableOpacity,
  ART,
  Image,
  View,
  Text
} from 'react-native';
import { Header, Divider } from 'react-native-elements';
const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;
import { connect } from 'react-redux';
import Pie, { userPurchases } from '../D3/Doughnut';
import RNSCHistogram, { userPurchasesYear } from '../D3/RNSCHistogram';
import {SpendTable} from './'
import styles from '../../public';
import React, { Component } from 'react';
import Histogram from '../D3/Histogram';
import Line from '../D3/Line';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = props => {
  const chartWidth = 250;
  const chartHeight = 250;
  const { user, navigate } = props;
  return (
    <View style={styles.homeContainer}>
      <ScrollView>
        <Text style={styles.h1Text}>Welcome, {user.firstName}! </Text>
        <Pie userPurchases={userPurchases} />
        <SpendTable/>
      </ScrollView>
        <ActionButton
            buttonColor="rgba(231,76,60,1)"
            style={styles.actionButton}>
            <ActionButton.Item
            buttonColor="#3498db"
            title="Camera"
            onPress={() => navigate('Webcam')}
            >
            <Icon name="ios-camera" size={30} />
            </ActionButton.Item>
            <ActionButton.Item
            buttonColor="#3498db"
            title="Keyboard"
            onPress={() => navigate('Purchase')}
            >
            <Icon name="ios-keypad" size={30} />
            </ActionButton.Item>
        </ActionButton>
    </View>

  );
};

const mapStateToProps = state => ({
  user: state.User
});


export default connect(
  mapStateToProps,
  null
)(Home);
