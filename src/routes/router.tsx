import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import ViewUser from "../pages/ViewUser";
import EditUser from "../pages/EditUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create-user",
        element: <CreateUser />,
      },
      {
        path: "/view-user/:id",
        element: <ViewUser />,
      },
      {
        path: "/edit-user/:id",
        element: <EditUser />,
      },
    ],
  },
]);
