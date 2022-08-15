import { combineReducers } from "redux";
import * as auth from "./auth";
import * as nodes from "./nodes";
import * as oneNode from "./oneNode";
import * as project from "./project";
import * as edges from "./edges";
import * as selectedProject from "./selectedProject";
import * as projectNew2 from "./projectNew2";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  nodes: nodes.reducer,
  oneNode: oneNode.reducer,
  edges: edges.reducer,
  project: project.reducer,
  projectNew2: projectNew2.reducer,
  selectedProject: selectedProject.reducer,
});

export const actions = {
  auth: auth.actions,
  nodes: nodes.actions,
  oneNode: oneNode.actions,
  edges: edges.actions,
  project: project.actions,
  projectNew2: projectNew2.actions,

  selectedProject: selectedProject.actions,
};

export const selectors = {
  auth: auth.selectors,
  nodes: nodes.selectors,
  oneNode: oneNode.selectors,
  edges: edges.selectors,
  project: project.selectors,
  projectNew2: projectNew2.selectors,

  selectedProject: selectedProject.selectors,
};

export const thunks = {
  auth: auth.thunks,
  nodes: nodes.thunks,
  project: project.thunks,
  projectNew2: projectNew2.thunks,

  selectedProject: selectedProject.thunks,
};
