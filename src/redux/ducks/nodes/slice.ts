import { NodesItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: NodesItem[] = [] as NodesItem[];

const nodes = createSlice({
  initialState,
  name: "nodes",
  reducers: {
    addTags(state, { payload }: PayloadAction<{ id: number; name: string }>) {
      if (payload) {
      }
    },
    // deleteTags(
    //   state,
    //   { payload }: PayloadAction<{ id: number; name: string }>
    // ) {
    //   if (payload) {
    //     const index = state.find((item) => item.id === payload.id);
    //     if (index !== undefined) {
    //       const deleted = index.mass.findIndex((n) => n === payload.name);
    //       index.mass.splice(deleted, 1);
    //       return state;
    //     }
    //     // return state;
    //   }
    // },
  },
});

const reducer = nodes.reducer;
const actions = { ...nodes.actions };

export { reducer, actions };
