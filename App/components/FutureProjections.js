import React from 'react';
const Model = require('keras-js').Model;
import {
  AnimatedGaugeProgress,
  GaugeProgress
} from 'react-native-simple-gauge';
import styles from '../../public';
import { View, Text } from 'react-native';

const predict = async data => {
  const model = new Model({
    filepath:
      './KerasModelDir/savedModel.bin',
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
    console.log('purchases',purchases)
    // const prediction = predict(purchases);
    const size = 200;
    const width = 15;
    const cropDegree = 90;
    const textOffset = width;
    const textWidth = size - (textOffset * 2);
    const textHeight = size * (1 - cropDegree / 360) - (textOffset * 2);

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
          stroke={[2, 2]}
          strokeCap="circle">
          <View style={{position: 'absolute',
            top: textOffset,
            left: textOffset,
            width: textWidth,
            height: textHeight,
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>hello</Text>
          </View>
        </AnimatedGaugeProgress>
      </View>
    )
  }
}
export default FutureProjections
