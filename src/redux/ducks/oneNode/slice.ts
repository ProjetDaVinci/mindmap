import { TagsItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NodesItem } from "../nodes/types";

const initialState: NodesItem = {} as NodesItem;

const oneNode = createSlice({
  initialState,
  name: "oneNode",
  reducers: {
    changeNode(state, { payload }: PayloadAction<NodesItem>) {
      if (payload) {
        state = payload;
        return state;
      }
    },
    changeLabel(state, { payload }: PayloadAction<{ text: string }>) {
      if (payload) {
        state.data.label === payload.text;
        return state;
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

const reducer = oneNode.reducer;
const actions = { ...oneNode.actions };

export { reducer, actions };
