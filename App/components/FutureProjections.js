import React from 'react';
const Model = require('keras-js').Model;
import {
  AnimatedGaugeProgress,
  GaugeProgress
} from 'react-native-simple-gauge';
import styles from '../../public';
import { View } from 'react-native';

const predict = async data => {
  const model = new Model({
    filepath:
      '/home/yacinus/Desktop/Capstone/App/components/KerasModelDir/savedModel.bin',
    filesystem: true,
    gpu: false
  });
  await model.ready();
  const minConst = -0.00029065;
  const scaleConst = 0.00145323;

  let scaled = data * scaleConst + minConst;

  const inputData = {
    input: new Float32Array(scaled)
  };
  const outputData = await model.predict(inputData);
  console.log('arrFrom', Array.from(outputData.output)[0]);
  //MinMAx scaler inverse_transform
  const finalPred = (Array.from(outputData.output)[0] + minConst) / scaleConst;
  return finalPred;
};

class FutureProjections extends React.Component {
  render(props) {
    const { purchases } = this.props.navigation.state.params;
    const prediction = predict(purchases);
    return (
      <View style={styles.container}>
        <AnimatedGaugeProgress
          size={200}
          width={15}
          fill={100}
          rotation={90}
          cropDegree={90}
          tintColor="#4682b4"
          backgroundColor="#b0c4de"
          stroke={[2, 2]} //For a equaly dashed line
          strokeCap="circle"
        />
      </View>
    );
  }
}
export default FutureProjections;
