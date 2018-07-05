import axios from 'axios';
import uuidV1 from 'uuid/v1';
import Firebase from '../../components/Firebase/Firebase';

export const ADD_PURCHASE = 'ADD_PURCHASE';
const COMMITED_PURCHASE = 'COMMITED_PURCHASE';

export const defaultPurchase = {};

const addPurchase = newPurchase => ({ type: ADD_PURCHASE, newPurchase });
const commitedPurchase = () => ({ type: COMMITED_PURCHASE });

export const addNewPurchase = () => async dispatch => {
  try {
    // console.log(uri, path);
    // const newImage = await FileSystem.downloadAsync(base64);
    console.log('htting image')

    const newPurchase = await axios.get(
      'https://safe-bastion-55889.herokuapp.com/api/receiptRecognition',
      // 'http://192.168.1.38:3000/api/receiptRecognition',

    );
    dispatch(addPurchase(newPurchase));
  } catch (err) {
    console.error(err);
  }
};

export const commitPurchase = (user, purchaseToCommit) => dispatch => {
  let upid = uuidV1();
  Firebase.database
    .ref(`users/${user}/purchases/${upid}`)
    .set({...purchaseToCommit });
  dispatch(commitedPurchase());
};

export default function(state = defaultPurchase, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return action.newPurchase;
    case COMMITED_PURCHASE:
      return defaultPurchase;
    default:
      return state;
  }
}
