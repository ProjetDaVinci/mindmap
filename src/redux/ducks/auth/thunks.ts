import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../../constants";
import { IAuthData, IAuthReg } from "./types";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";

export const registration = createAsyncThunk(
  "/user/reg",
  async (authData: IAuthReg) => {
    const { data }: AxiosResponse = await http.post("/user/reg", {
      password_hash: authData.password_hash,
      login: authData.login,
      name: authData.name,
    });

    console.log("registration", data);
    console.log();
    return data;
  }
);

// export const signIn = createAsyncThunk(
//   "/user/login",
//   async (authData: IAuthData) => {
//     const { data }: AxiosResponse = await http.post(SIGN_IN_URL, authData);
//     console.log("data", data);

//     return data;
//   }
// );

export const login = createAsyncThunk(
  "/user/login",
  async (authData: IAuthData) => {
    const { data }: AxiosResponse = await http.post(`/user/login`, {
      password_hash: authData.password_hash,
      login: authData.login,
    });
    console.log("data", data);

    return data;
  }
);
