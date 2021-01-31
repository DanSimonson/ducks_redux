import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";
import contactReducer from "./ducks/contact";
const reducer = combineReducers({
  counter: counterReducer,
  contacts: contactReducer,
});

const store = createStore(reducer);

export default store;
