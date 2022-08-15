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
import { createProject, getListProjects } from "./thunks";

const initialState: ProjectState = {
  project: [] as ProjectItemsRes[],
  edges: [],
  nodes: [],
} as ProjectState;

const projectNew2 = createSlice({
  initialState,
  name: "projectNew2",
  reducers: {
    // addProject(state, { payload }: PayloadAction<{ text: string }>) {
    //   if (payload) {
    //     const newObj = {
    //       id: state.project.length + 1,
    //       sort: 1,
    //       structure: "text",
    //       company_id: "text",
    //       name: payload.text,
    //       selected: false,
    //       qr: "text",
    //     };
    //     state.project.push(newObj);
    //     // state = payload;
    //     return state;
    //   }
    // },
    // deleteProject(state, { payload }: PayloadAction<number>) {
    //   const index = state.project.findIndex((n) => n.id === payload);
    //   if (payload) {
    //     if (index !== -1) {
    //       state.project.splice(index, 1);
    //       return state;
    //     }
    //   }
    // },
    // changeProject(state, { payload }: PayloadAction<number>) {
    //   const index = state.project.find((n) => n.id === payload);
    //   if (payload) {
    //     if (index) {
    //       state.project.map((p) => p.selected === false);
    //       index.selected = true;
    //       return state;
    //     }
    //   }
    // },
    // changeNodes(state, { payload }: PayloadAction<NodesItem[]>) {
    //   if (payload) {
    //     state.nodes = payload;
    //     return state;
    //   }
    // },
    // changeEdges(state, { payload }: PayloadAction<Edge[]>) {
    //   if (payload) {
    //     state.edges = payload;
    //     return state;
    //   }
    // },
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
