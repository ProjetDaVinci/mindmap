import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "../..";

export const SelectProject = (state: rootState) => state.project;

// // export const SelectFilter = (state: rootState) => state.tags;
// export const selectTagsMass = (id: number) =>
//   createSelector(SelectTags, (state) => {
//     if (state !== undefined && state) {
//       const find = state && state?.find((select) => select.id === id);
//       if (find !== undefined) {
//         return find.mass;
//       }
//     }
//   });
