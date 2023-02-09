import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";

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
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
