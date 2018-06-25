import React, { Component } from 'react';
import { StyleSheet, View, Text, ART } from 'react-native';
import { Button } from 'react-native-elements';
const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;
import { connect } from 'react-redux';
import Pie, { userPurchases } from '../D3/Doughnut';
import RNSCHistogram, { userPurchasesYear } from '../D3/RNSCHistogram';
import styles from '../../public';

const Home = props => {
  const handleSubmit = () => {
    props.logout();
  };

  const chartWidth = 250;
  const chartHeight = 250;
  const { user, navigate } = props;
  return (
    <View>
      <Button
        onPress={handleSubmit}
        icon={{
          name: 'logout',
          type: 'simple-line-icon',
          size: 15,
          color: 'red'
        }}
      />
      <Button onPress={() => navigate('Webcam')} title="To Camera" />
      <Surface width={chartWidth} height={chartHeight}>
        <Pie
          userPurchases={userPurchases}
          chartX={chartWidth / 2}
          chartY={chartHeight / 2}
        />
        <ARTText
          font="bold 15px Arial"
          fill="#000"
          x={chartWidth / 2 - 40} //Find some way to center
          y={chartHeight / 2 - 10}
        >
          Chart Label
        </ARTText>
      </Surface>
      <RNSCHistogram
        userPurchases={userPurchasesYear}
        width={chartWidth}
        height={chartHeight}
      />
    </View>
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
