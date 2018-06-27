import axios from 'axios';
import Expo from 'expo';
import Firebase from '../../components/Firebase/Firebase';
const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(`:`)
      .shift()
      .concat(`:19004`)
  : `localhost:19004`;

export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';
const GOT_PURCHASES = 'GOT_PURCHASES'

export const defaultUser = {user: {}, purchases: []};

export const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });
const gotPurchases = (data) => ({ type: GOT_PURCHASES, data})

export const me = () => async dispatch => {
  Firebase.auth.onAuthStateChanged(user => {
    user ? dispatch(getUser(user)) : dispatch(getUser(defaultUser));
  });
};

export const auth = (userData, method) => async dispatch => {
  if (method === 'signup') {
    Firebase.auth
      .createUserWithEmailAndPassword(userData[0].email, userData[0].password)
      .then(user => {
        Firebase.database.ref(`users/${user.user.uid}`).set({
          ...userData[0],
          ...userData[1],
          ...userData[2]
        });
        dispatch(getUser(user));
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    Firebase.auth
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(user => {
        console.log(user);
        dispatch(getUser(user));
      })
      .catch(err => {
        dispatch(getUser('Failed'));
        console.error(err);
      });
  }
};

export const logout = () => dispatch => {
  Firebase.auth
    .signOut()
    .then(() => dispatch(removeUser()))
    .catch(err => console.error(err));
  dispatch(removeUser());
};

export const getPurchases = uuid => dispatch => {
  console.log('YEahhhhh', uuid)
  Firebase.database
    .ref(`users/${uuid}`)
    .once('value')
    .then(snapshot => {
      let purchases = (snapshot.val().purchases)
      dispatch(gotPurchases(purchases))
    });
};

export const addPicture = (uuid, uri) => dispatch => {
  Firebase.database.ref(`users/${uuid}`).set({ uri })
};

export default function(state = defaultUser, action) {
  console.log(action)
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.user.user}
    case REMOVE_USER:
      return defaultUser;
    case GOT_PURCHASES:
    return {...state, purchases: action.data}
    default:
      return state;
  }
}
