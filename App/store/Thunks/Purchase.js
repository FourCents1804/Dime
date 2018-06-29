import axios from 'axios';

export const ADD_PURCHASE = 'ADD_PURCHASE';

export const defaultPurchase = {};

const addPurchase = newPurchase => ({ type: ADD_PURCHASE, newPurchase });

export const addNewPurchase = img => async dispatch => {
  try {
    console.log('hittting image');
    const newPurchase = await axios.post(
      'https://safe-bastion-55889.herokuapp.com/api/receiptRecognition',
      { fileName: img }
    );
    console.log(newPurchase);
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
