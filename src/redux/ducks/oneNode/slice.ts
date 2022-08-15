import { TagsItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NodesItem } from "../nodes/types";
import { Node } from "react-flow-renderer";

const initialState: Node = {} as Node;

const oneNode = createSlice({
  initialState,
  name: "oneNode",
  reducers: {
    changeNode(state, { payload }: PayloadAction<Node>) {
      if (payload) {
        state = payload;
        return state;
      }
    },
    changeLabel(state, { payload }: PayloadAction<{ text: string }>) {
      if (payload) {
        state.data.label = payload.text;
        return state;
      }
      return state;
    },
  },
});

const reducer = oneNode.reducer;
const actions = { ...oneNode.actions };

export { reducer, actions };
