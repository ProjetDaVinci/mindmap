import { ProjectItems, TagsItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NodesItem } from "../nodes/types";
import { EdgesItem } from "../edges/types";
import { Edge } from "react-flow-renderer";

const initialState: ProjectItems = {} as ProjectItems;

const selectedProject = createSlice({
  initialState,
  name: "selectedProject",
  reducers: {
    addProject(state, { payload }: PayloadAction<ProjectItems>) {
      if (payload) {
        // state = payload;
        return payload;
      }
    },
  },
});

const reducer = selectedProject.reducer;
const actions = { ...selectedProject.actions };

export { reducer, actions };
