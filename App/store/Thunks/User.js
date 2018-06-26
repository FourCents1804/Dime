import axios from "axios";
import Expo from "expo";
const { manifest } = Expo.Constants;
const ip = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(`:`)
      .shift()
      .concat(`:19004`)
  : `localhost:19004`;

export const GET_USER = "GET_USER";
export const REMOVE_USER = "REMOVE_USER";

export const defaultUser = {};

export const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });

export const me = () => async dispatch => {
  const { data } = await axios.get(`http://${ip}/auth/me`);
  dispatch(getUser(data || defaultUser));
};

export const auth = (userData, method) => async dispatch => {
  try {
    if (method === "signup") {
      const { data } = await axios.post(`http://${ip}/auth/${method}`, {
        ...userData[0],
        ...userData[1],
        ...userData[2]
      });
      dispatch(getUser(data));
    } else {
      const { data } = await axios.post(
        `http://${ip}/auth/${method}`,
        userData
      );
      dispatch(getUser(data));
    }
  } catch (error) {
    dispatch(getUser("Failed"));
  }
};

export const logout = () => dispatch => {
  axios.post(`http://${ip}/auth/logout`);
  dispatch(removeUser());
};

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
