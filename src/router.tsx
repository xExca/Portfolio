import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage";
import Layout from "./Layout";
import Project from "./Components/Project";

export default function AppRoute() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/project/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
