import { EdgesItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: EdgesItem[] = [] as EdgesItem[];

const edges = createSlice({
  initialState,
  name: "edges",
  reducers: {
    changeEdges(state, { payload }: PayloadAction<EdgesItem[]>) {
      if (payload) {
        state = payload;
        return state;
      }
    },
  },
});

const reducer = edges.reducer;
const actions = { ...edges.actions };

export { reducer, actions };
