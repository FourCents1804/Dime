import axios from "axios";
import Expo from "expo";

const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(`:`)
      .shift()
      .concat(`:19004`)
  : `localhost:19004`;

export const ADD_PURCHASE = "ADD_PURCHASE";
// export const REMOVE_USER = "REMOVE_USER";

export const defaultPurchase = {};

export const addPurchase = newPurchase => ({ type: ADD_PURCHASE, newPurchase });
// export const removeUser = () => ({ type: REMOVE_USER });

export const addNewPurchase = newPurchase => async dispatch => {
  const { data } = await axios.post(`http://${ip}/api/purchase`, newPurchase);
  dispatch(addPurchase(data || defaultPurchase));
};

// export const auth = (userData, method) => async dispatch => {
//   try {
//     if (method === "signup") {
//       const { data } = await axios.post(`http://${ip}/auth/${method}`, {
//         ...userData[0],
//         ...userData[1],
//         ...userData[2]
//       });
//       dispatch(getUser(data));
//     } else {
//       const { data } = await axios.post(
//         `http://${ip}/auth/${method}`,
//         userData
//       );
//       dispatch(getUser(data));
//     }
//   } catch (error) {
//     dispatch(getUser("Failed"));
//   }
// };

// export const logout = () => dispatch => {
//   axios.post(`http://${ip}/auth/logout`);
//   dispatch(removeUser());
// };

export default function(state = defaultPurchase, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return action.newPurchase;
    // case REMOVE_USER:
    //   return defaultUser;
    default:
      return state;
  }
}
