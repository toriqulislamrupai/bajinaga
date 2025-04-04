import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Promotion from "../pages/Promotion";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/promotion", element: <Promotion /> },
    ],
  },
]);

export default router;
