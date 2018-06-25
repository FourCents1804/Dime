import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, ART, Image, View } from 'react-native';
import { Header, Divider } from 'react-native-elements';
const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;
import { connect } from 'react-redux';
import Pie, { userPurchases } from '../D3/doughnut';
import RNSCHistogram, { userPurchasesYear } from '../D3/RNSCHistogram';
import { logout } from '../store';
import styles from '../../public';

const Home = props => {
  const handleSubmit = () => {
    props.logout();
  };

  const chartWidth = 250;
  const chartHeight = 250;
  const { user, navigate } = props;
  return (
    <ScrollView>
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff', size: 35 }}
        centerComponent={{
          text: user.firstName + ' ' + user.lastName,
          style: { fontSize: 25, color: '#fff' }
        }}
        rightComponent={{ icon: 'person', color: '#fff', size: 35 }}
      />
      <View style={styles.container}>
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
        <Divider style={styles.dividerS} />
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center'
          }}
          onPress={() => navigate('Webcam')}
        >
          <Image
            style={{ height: 70, width: 70, marginBottom: 25 }}
            source={require('../../public/plus.png')}
          />
        </TouchableOpacity>
      </View>
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
