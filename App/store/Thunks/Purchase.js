import axios from 'axios';
import Expo from 'expo';
import { key } from '../../../secrets';

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

export const addNewPurchase = img => async dispatch => {
  try {
    const newPurchase = await axios.post(
      'https://safe-bastion-55889.herokuapp.com/api/receiptRecognition',
      { fileName: img }
    );
    dispatch(addPurchase(newPurchase));
  } catch (err) {
    console.error(err);
  }
};

export default function(state = defaultPurchase, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return action.newPurchase;
    default:
      return state;
  }
}
