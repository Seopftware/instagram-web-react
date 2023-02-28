import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./routes";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Layout from "./components/Layout";

import { useReactiveVar } from "@apollo/client";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import KakaoLogin from "./components/auth/KakaoLogin";
import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "api";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  const { isLoading, data, isError } = useQuery(["myinfo"], getMyInfo, {
    retry: false,
  });

  if (!isError) {
    console.log("app.js - data", data);
    if (data) {
      isLoggedInVar(true);
    }
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path={routes.home}
            element={
              isLoggedIn ? (
                <Layout>
                  <Home />
                </Layout>
              ) : (
                <Login />
              )
            }
          />
          {!isLoggedIn ? (
            <Route path={routes.signUp} element={<SignUp />} />
          ) : null}

          <Route
            path={`/users/:username`}
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route path={`/oauth/kakao`} element={<KakaoLogin />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
