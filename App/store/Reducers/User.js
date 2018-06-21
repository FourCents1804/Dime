import { defaultUser } from "../ActionCreators/User";
import { GET_USER, REMOVE_USER } from "../ActionTypes/User";

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
