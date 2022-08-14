import { useEffect } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import { AppWrapper } from "../../components";
import LoginPage from "../AuthRoutes/LoginPage";
import DemoPage from "./DemoPage";
import MapsPage from "./MapsPage";
import { DEMO_ROUTE, MAPS_ROUTE } from "./routes";
const UserScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(MAPS_ROUTE);
  }, []);

  return (
    <Routes>
      <Route path={MAPS_ROUTE} element={<MapsPage />} />
      <Route path={DEMO_ROUTE} element={<DemoPage />} />
      {/* <Route path={LOGIN_ROUTE} element={<LoginPage />} /> */}
    </Routes>
  );
};

export default UserScreen;
