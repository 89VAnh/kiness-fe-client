import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./modules/app/AppLayout";
import { HomePage } from "./modules/home";
import Intro from "./modules/intro/Intro";
import { HOME_URL, INTRO_URL } from "./urls";

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
      {
        path: INTRO_URL,
        element: <Intro />,
      },
    ],
  },
]);
