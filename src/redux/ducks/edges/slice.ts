import { EdgesItem } from "./types";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edge } from "react-flow-renderer";

const initialState: Edge[] = [] as Edge[];

const edges = createSlice({
  initialState,
  name: "edges",
  reducers: {
    changeEdges(state, { payload }: PayloadAction<Edge[]>) {
      if (payload) {
        state = payload;
        return state;
      }
    },
    deleteEdges(state, { payload }: PayloadAction<[]>) {
      if (payload) {
        return initialState;
      }
    },
  },
});

const reducer = edges.reducer;
const actions = { ...edges.actions };

export { reducer, actions };
