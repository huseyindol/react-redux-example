import { combineReducers } from "redux";

import todoReducers from "./todoReducers";
import typicodeReducers from "./typicodeReducers";

export default combineReducers({
  todoReducers,
  typicodeReducers
})