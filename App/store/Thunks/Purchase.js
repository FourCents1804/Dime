import axios from 'axios';
import Expo from 'expo';

const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(`:`)
      .shift()
      .concat(`:19004`)
  : `localhost:19004`;

export const ADD_PURCHASE = 'ADD_PURCHASE';

export const defaultPurchase = {};

const addPurchase = newPurchase => ({ type: ADD_PURCHASE, newPurchase });

export const addNewPurchase = pictureUri => async dispatch => {
  const fileName = pictureUri
  console.log('ENTERTHUNK', fileName)
  const { data } = await axios.post(`http://${ip}/api/receiptRecognition`, fileName);
  console.log('DATA', data)
  dispatch(addPurchase(data));
};


export default function(state = defaultPurchase, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return action.newPurchase;
    default:
      return state;
  }
}
