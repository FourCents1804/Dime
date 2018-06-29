import axios from "axios";
import Expo from "expo";
import uuidV1 from "uuid/v1";
import Firebase from "../../components/Firebase/Firebase";
const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(`:`)
      .shift()
      .concat(`:19004`)
  : `localhost:19004`;

export const GET_USER = "GET_USER";
export const REMOVE_USER = "REMOVE_USER";
const COMMITED_PURCHASE = "COMMITED_PURCHASE";

export const defaultUser = {};

export const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });
const commitedPurchase = () => ({type: COMMITED_PURCHASE})

export const me = () => async dispatch => {
  Firebase.auth.onAuthStateChanged(user => {
    user ? dispatch(getUser(user)) : dispatch(getUser(defaultUser));
  });
};

export const auth = (userData, method) => async dispatch => {
  if (method === "signup") {
    await Firebase.auth
      .createUserWithEmailAndPassword(userData[0].email, userData[0].password)
      .then(user => {
        Firebase.database.ref(`users/${user.uid}`).set({
          userData: {
            ...userData[0],
            ...userData[1]
          },
          recurringExpenses: {
            ...userData[2]
          }
        });
        dispatch(getUser(user.user.uid));
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    await Firebase.auth
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(async user => {
        const allPurchases = await Firebase.database
          .ref(`users/${user.user.uid}/purchases`)
          .once("value");
        const userData = await Firebase.database
          .ref(`users/${user.user.uid}/userData`)
          .once("value");

        dispatch(
          getUser({
            uid: user.user.uid,
            purchases: allPurchases,
            userInfo: userData
          })
        );
      })
      .catch(err => {
        console.error(err);
      });
  }
};

export const logout = () => dispatch => {
  Firebase.auth
    .signOut()
    .then(() => dispatch(removeUser()))
    .catch(err => console.error(err));
};

export const commitPurchase = (user, purchaseToCommit) => dispatch => {
  let upid = uuidV1();

  Firebase.database
    .ref(`users/${user}/purchases/${upid}`)
    .set({ ...purchaseToCommit });
  // dispatch(commitedPurchase())
};

export const addPicture = (uuid, uri) => dispatch => {
  Firebase.database.ref(`users/${uuid}`).set({ uri: uri });
};

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case COMMITED_PURCHASE:
      return "Purchase Has Been Noted";
    default:
      return state;
  }
}
