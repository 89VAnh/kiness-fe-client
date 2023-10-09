import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./modules/app/AppLayout";
import { HomePage } from "./modules/home";
import { HOME_URL } from "./urls";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <AppLayout>{/* <ErrorBoundary /> */}</AppLayout>,
    children: [
      {
        path: HOME_URL,
        element: <HomePage />,
      },
    ],
  },
]);
