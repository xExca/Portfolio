import { createHashRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage";
import Layout from "./Layout";
import Project from "./Components/Project";

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <AboutPage /> },
      { path: "/projects", element: <ProjectPage /> },
      { path: "/project/:id", element: <Project /> },
    ],
  },
]);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
