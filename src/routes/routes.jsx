import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Promotion from "../pages/Promotion";
import Home from "../pages/Home";
import HelpModal from "../pages/HelpModal";
import PersonalCenterModal from "../pages/PersonalCenterModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/promotion", element: <Promotion /> },
      { path: "/helpbar", element: <HelpModal /> },
      { path: "/information", element: <PersonalCenterModal /> },
    ],
  },
  
]);

export default router;
