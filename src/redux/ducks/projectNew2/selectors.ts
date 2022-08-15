import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "../..";

export const SelectProject = (state: rootState) => state.projectNew2.project;

export const SelectEdges = (state: rootState) => state.projectNew2.edges;

export const SelectNodes = (state: rootState) => state.projectNew2.nodes;

// export const SelectFilter = (state: rootState) => state.tags;
export const selectItemId = (id: number) =>
  createSelector(SelectProject, (state) => {
    if (state !== [] && state) {
      const find = state && state?.find((select) => select.id === id);
      if (find !== undefined) {
        return find;
      }
    }
  });

export const selectLastProject = () =>
  createSelector(SelectProject, (state) => {
    if (state !== [] && state) {
      let lastItem = state[state.length - 1];
      return lastItem;
    }
  });
