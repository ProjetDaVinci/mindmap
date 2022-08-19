import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";
import { Edge } from "react-flow-renderer";
// import { TagsItem, TagsItemRes } from "./types";

export const createProject = createAsyncThunk(
  "/project/create",
  async (name: string, { getState }) => {
    const { nodes, edges } = getState() as { nodes: Node[]; edges: Edge[] };

    const { data }: AxiosResponse = await http.post("/project/create", {
      sort: 1,
      structure: nodes.join() + edges.join(),
      company_id: 1,
      name: name,
      qr: "text",
    });

    console.log("/project/create", data);

    // return data;
    return data;
  }
);

export const getListProjects = createAsyncThunk(
  "/project/get-list",
  async () => {
    const { data }: AxiosResponse = await http.post("/project/get-list", {
      limit: 0,
      offset: 0,
    });

    console.log("/project/get-list", data);

    return data;
  }
);

export const deleteProject = createAsyncThunk(
  "/project/delete",
  async (keyId: number) => {
    console.log("/project/delete", keyId);

    const { data }: AxiosResponse = await http.delete("/project/delete", {
      data: { id: keyId },
    });
    console.log("/telegram/delete", data);

    return data;
  }
);

export const updateProject = createAsyncThunk(
  "/project/update",
  async (item: { id: number; status: string }) => {
    const { data }: AxiosResponse = await http.put("/project/update", item);

    // return data;
  }
);
