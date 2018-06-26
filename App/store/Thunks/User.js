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

//...

export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const defaultUser = {};

export const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });

// export const me = () => async dispatch => {
//   dispatch(getUser(defaultUser));
// };

export const auth = (userData, method) => async dispatch => {
  if (method === 'signup') {
    Firebase.auth
      .createUserWithEmailAndPassword(userData[0].email, userData[0].password)
      .then(user => {
        console.log(user);
        dispatch(getUser(user));
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    Firebase.auth
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(user => {
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

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
