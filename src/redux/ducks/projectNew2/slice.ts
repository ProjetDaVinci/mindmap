import {
  ProjectCreateRes,
  ProjectItems,
  ProjectItemsRes,
  ProjectRes,
  ProjectState,
  TagsItem,
} from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NodesItem } from "../nodes/types";
import { EdgesItem } from "../edges/types";
import { Edge } from "react-flow-renderer";
import { createProject, deleteProject, getListProjects } from "./thunks";

const initialState: ProjectState = {
  project: [] as ProjectItemsRes[],
  edges: [],
  nodes: [],
} as ProjectState;

const projectNew2 = createSlice({
  initialState,
  name: "projectNew2",
  reducers: {
    delete(state, { payload }: PayloadAction<number>) {
      if (payload) {
        const index = state.project.findIndex((n) => n.id === payload);

        if (index !== -1) {
          state.project.splice(index, 1);
          return state;
        }
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getListProjects.fulfilled,
      (state, { payload }: PayloadAction<ProjectRes>) => {
        state.project = payload.data;
        return state;
      }
    );
    builder.addCase(getListProjects.rejected, (state) => {
      return state;
    });
    builder.addCase(
      createProject.fulfilled,
      (state, { payload }: PayloadAction<ProjectCreateRes>) => {
        state.project.push(payload.project);
        return state;
      }
    );
    builder.addCase(createProject.rejected, (state) => {
      return state;
    });
  },
});

const reducer = projectNew2.reducer;
const actions = { ...projectNew2.actions };

export { reducer, actions };
