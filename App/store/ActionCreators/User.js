import { GET_USER, REMOVE_USER } from "../ActionTypes/User";

export const defaultUser = {
  user: {}
};

export const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });
