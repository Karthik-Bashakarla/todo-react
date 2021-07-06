import { combineReducers } from "redux";
import addTaskReducer from "./addTaskReducer";

export default combineReducers({
  addTaskReducer: addTaskReducer,
});
