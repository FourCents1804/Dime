import { createStore, combineReducers, applyMiddleware } from "redux";
// import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import User from "./Thunks/User";
import Purchase from "./Thunks/Purchase";

const reducer = combineReducers({ User, Purchase });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

export default store;
export * from "./Thunks/User";
export * from "./Thunks/Purchase";
// export * from "./ActionCreators/User";
// export * from "./ActionTypes/User";
// export * from "./Reducers/User";
// export * from "./Thunks/User";
