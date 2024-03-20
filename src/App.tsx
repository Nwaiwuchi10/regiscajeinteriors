import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateProject from "./screens/CreateProject";
import ViewProject from "./screens/ViewProjects";
import AboutUs from "./pages/AboutUs/AboutUs";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Contact from "./components/ContactUs/Contact";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Contact-us" element={<ContactPage />} />
        <Route path="/create" element={<CreateProject />} />

        <Route path="/view" element={<ViewProject />} />
      </Routes>
    </div>
  );
}

export default App;
