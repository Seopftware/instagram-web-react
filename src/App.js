import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";

import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
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
  );
}

export default App;
