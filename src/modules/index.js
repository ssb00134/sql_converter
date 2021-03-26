import React from "react";
import { combineReducers } from "redux";
import IdxTables from "./IdxTables";
import todos from "./todos";

const rootReducer = combineReducers({
  IdxTables,
  todos,
});

export default rootReducer;
