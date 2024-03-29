import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.jsx";
import CreateProject from "./pages/CreateProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import NavBar from './components/NavBar';
  import { AuthProvider } from "./components/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage />},
      { path: "/nominate", element: <CreateProject />},
      { path: "/contact", element: <ContactPage />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);