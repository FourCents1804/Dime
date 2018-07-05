import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Firebase from './Firebase/Firebase';
import axios from 'axios';
import styles from '../../public'

class FutureProjections extends Component {
  handlePrediction = async () => {
    const result = await axios.post(
          'https://safe-bastion-55889.herokuapp.com/api/loadKeras',
          { lastThreeDays: [30, 22, 37] }
        );
    // Firebase.ref('/dummyData').once(async snapshot => {
    //   const result = await axios.post(
    //     'https://safe-bastion-55889.herokuapp.com/api/loadKeras',
    //     { lastThreeDays: snapshot }
    //   );
    // });
    console.log(result);
  };
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.handlePrediction();
          }}
          title="Give Me Prediction"
          raised={true}
          backgroundColor="#0080ff"
          style={styles.signUpButton}
        />
      </View>
    );
  }
}

export default FutureProjections;
