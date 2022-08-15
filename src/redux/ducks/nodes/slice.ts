import { AnyAction } from "redux";
import { NodesItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "react-flow-renderer";

const initialState: Node[] = [] as Node[];

const nodes = createSlice({
  initialState,
  name: "nodes",
  reducers: {
    addTags(state, { payload }: PayloadAction<{ id: number; name: string }>) {
      if (payload) {
      }
    },

    changeNodes(state, { payload }: PayloadAction<Node[]>) {
      if (payload) {
        state = payload;
        return state;
      }
    },

    addNodes(state, { payload }: PayloadAction<Node>) {
      if (payload) {
        state.push(payload);
        return state;
      }
    },

    deleteNode(state, { payload }: PayloadAction<[]>) {
      if (payload) {
        state = [];
        return initialState;
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
