import { combineReducers } from "redux";
import * as auth from "./auth";
import * as nodes from "./nodes";
import * as oneNode from "./oneNode";
import * as edges from "./edges";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  nodes: nodes.reducer,
  oneNode: oneNode.reducer,
  edges: edges.reducer,
});

export const actions = {
  auth: auth.actions,
  nodes: nodes.actions,
  oneNode: oneNode.actions,
  edges: edges.actions,
};

export const selectors = {
  auth: auth.selectors,
  nodes: nodes.selectors,
  oneNode: oneNode.selectors,
  edges: edges.selectors,
};

export const thunks = {
  auth: auth.thunks,
  nodes: nodes.thunks,
};
