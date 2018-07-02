import axios from 'axios';
import uuidV1 from 'uuid/v1';
import Firebase from '../../components/Firebase/Firebase';

export const ADD_PURCHASE = 'ADD_PURCHASE';
const COMMITED_PURCHASE = 'COMMITED_PURCHASE';

export const defaultPurchase = {};

const addPurchase = newPurchase => ({ type: ADD_PURCHASE, newPurchase });
const commitedPurchase = () => ({ type: COMMITED_PURCHASE });

export const addNewPurchase = (base64) => async dispatch => {
  try {
    // console.log(uri, path);
    // const newImage = await FileSystem.downloadAsync(base64);
    // console.log(newImage)
    // Firebase.storage.ref().put(path).then(snapshot => {
    //   console.log(snapshot)
    // })
    const newPurchase = await axios.post(
      // 'https://safe-bastion-55889.herokuapp.com/api/receiptRecognition',
      'http://172.16.22.102:3000/api/receiptRecognition',
      { fileName: base64 }
    );
    dispatch(addPurchase(newPurchase));
  } catch (err) {
    console.error(err);
  }
};

export const commitPurchase = (user, purchaseToCommit) => dispatch => {
  let upid = uuidV1();
  console.log('Commiting Purchase', user, purchaseToCommit);
  Firebase.database
    .ref(`users/${user}/purchases/${upid}`)
    .set({ ...purchaseToCommit });
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
