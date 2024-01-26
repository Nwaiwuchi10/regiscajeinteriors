import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateProject from "./screens/CreateProject";
import ViewProject from "./screens/ViewProjects";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateProject />} />
        <Route path="/view" element={<ViewProject />} />
      </Routes>
    </div>
  );
}

export default App;
