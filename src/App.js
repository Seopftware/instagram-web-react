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

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
