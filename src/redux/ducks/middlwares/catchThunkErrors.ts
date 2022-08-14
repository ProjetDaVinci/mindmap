import { AxiosError } from "axios";

export const ThunkErrorsHandler = (err: AxiosError) => {
  console.log("request error", err);
};
