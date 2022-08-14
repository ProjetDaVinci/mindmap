import { combineReducers } from "redux";
import * as auth from "./auth";

export const rootReducer = combineReducers({
  auth: auth.reducer,
});

export const actions = {
  auth: auth.actions,
};

export const selectors = {
  auth: auth.selectors,
};

export const thunks = {
  auth: auth.thunks,
};
