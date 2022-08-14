import React from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../redux/ducks";
import UserScreen from "./UserRoutes";
// import {selectors} from '../../redux/ducks';
// import UserScreen from './UserRoutes';
import AuthScreen from "./AuthRoutes";

const Routes = () => {
  const token = useSelector(selectors.auth.SelectToken);
  return token ? <UserScreen /> : <AuthScreen />;
};

export default Routes;
