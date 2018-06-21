import axios from "axios";
import { getUser, removeUser } from "../ActionCreators/User";

export const me = () => dispatch =>
  axios
    .get("/auth/me")
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.error(err));

export const auth = (email, password, method) => dispatch =>
  axios
    .post(`/auth/${method}`, { email, password })
    .then(
      res => {
        dispatch(getUser(res.data));
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const logout = () => dispatch =>
  axios
    .post("/auth/logout")
    .then(_ => {
      dispatch(removeUser());
    })
    .catch(err => console.error(err));
