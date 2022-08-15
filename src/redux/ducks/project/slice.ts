import { ProjectItems, ProjectState, TagsItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NodesItem } from "../nodes/types";
import { EdgesItem } from "../edges/types";
import { Edge } from "react-flow-renderer";

const initialState: ProjectState = {} as ProjectState;

const project = createSlice({
  initialState,
  name: "project",
  reducers: {
    addProject(state, { payload }: PayloadAction<{ text: string }>) {
      if (payload) {
        const newObj = {
          id: state.project.length + 1,
          sort: 1,
          structure: "text",
          company_id: "text",
          name: payload.text,
          qr: "text",
        };
        state.project.push(newObj);
        // state = payload;
        return state;
      }
    },
    deleteProject(state, { payload }: PayloadAction<number>) {
      const index = state.project.findIndex((n) => n.id === payload);
      if (payload) {
        if (index !== -1) {
          state.project.splice(index, 1);
          return state;
        }
      }
    },
    changeNodes(state, { payload }: PayloadAction<NodesItem[]>) {
      if (payload) {
        state.nodes = payload;
        return state;
      }
    },
    changeEdges(state, { payload }: PayloadAction<Edge[]>) {
      if (payload) {
        state.edges = payload;
        return state;
      }
    },
  },
});

const reducer = project.reducer;
const actions = { ...project.actions };

export { reducer, actions };
