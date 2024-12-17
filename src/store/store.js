import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userInfoReducers";

const reducer = combineReducers({
	userState: userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
