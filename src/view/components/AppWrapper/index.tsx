import React, { FC } from "react";
import AppHeader from "../SideBar";
import { Container } from "./styles";
import { WrapperType } from "./types";

const AppWrapper: FC<WrapperType> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppWrapper;
