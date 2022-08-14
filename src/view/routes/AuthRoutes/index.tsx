import { useEffect } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import { AppWrapper } from "../../components";
import LoginPage from "./LoginPage";
import RegPage from "./RegPage";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "./routes";
import { Container } from "./styles";
const AuthScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(LOGIN_ROUTE);
  }, []);

  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={REGISTER_ROUTE} element={<RegPage />} />
    </Routes>
  );
};

export default AuthScreen;
