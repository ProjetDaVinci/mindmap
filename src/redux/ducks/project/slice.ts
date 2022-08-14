import { ProjectItems, TagsItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NodesItem } from "../nodes/types";

const initialState: ProjectItems[] = [] as ProjectItems[];

const project = createSlice({
  initialState,
  name: "project",
  reducers: {
    addProject(state, { payload }: PayloadAction<{ text: string }>) {
      if (payload) {
        const newObj = {
          id: state.length + 1,
          sort: 1,
          structure: "text",
          company_id: "text",
          name: payload.text,
          qr: "text",
        };
        state.push(newObj);
        // state = payload;
        return state;
      }
    },
    deleteProject(state, { payload }: PayloadAction<number>) {
      const index = state.findIndex((n) => n.id === payload);
      if (payload) {
        if (index !== -1) {
          state.splice(index, 1);
          return state;
        }
      }
    },
  },
});

const reducer = project.reducer;
const actions = { ...project.actions };

export { reducer, actions };
