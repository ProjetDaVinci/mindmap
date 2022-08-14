import { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { AppWrapper } from "../../components";
import LoginPage from "../AuthRoutes/LoginPage";
import MapsPage from "./MapsPage";
import { MAPS_ROUTE } from "./routes";
const UserScreen = () => {
  return (
    <Routes>
      <Route path={MAPS_ROUTE} element={<MapsPage />} />
      {/* <Route path={LOGIN_ROUTE} element={<LoginPage />} /> */}
    </Routes>
  );
};

export default UserScreen;
