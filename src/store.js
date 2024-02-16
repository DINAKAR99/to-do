import { combineReducers, legacy_createStore } from "redux";
import todoReducer from "../redux/reducers/todoReducer";
const rootreducer = combineReducers({ todo: todoReducer });

const store = legacy_createStore(rootreducer);

export default store;
