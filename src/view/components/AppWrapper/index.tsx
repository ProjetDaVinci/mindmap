import React, { FC, useState } from "react";
import { Menu } from "../../UI/icons";
import SideBar from "../SideBar";
import AppHeader from "../SideBar";
import { Container } from "./styles";
import { WrapperType } from "./types";

const AppWrapper: FC<WrapperType> = ({ children }) => {
  return <Container>{children} </Container>;
};

export default AppWrapper;
