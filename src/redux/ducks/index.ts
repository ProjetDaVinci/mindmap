import { combineReducers } from "redux";
import * as auth from "./auth";
import * as nodes from "./nodes";
import * as oneNode from "./oneNode";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  nodes: nodes.reducer,
  oneNode: oneNode.reducer,
});

export const actions = {
  auth: auth.actions,
  nodes: nodes.actions,
  oneNode: oneNode.actions,
};

export const selectors = {
  auth: auth.selectors,
  nodes: nodes.selectors,
  oneNode: oneNode.selectors,
};

export const thunks = {
  auth: auth.thunks,
  nodes: nodes.thunks,
};
