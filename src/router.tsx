import { createBrowserRouter } from "react-router-dom";

import { IntroPage } from "./modules/about/intro";
import { NewsPage } from "./modules/about/news";
import AppLayout from "./modules/app/AppLayout";
import { HomePage } from "./modules/home";
import { HOME_URL, INTRO_URL, NEWS_URL } from "./urls";

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
        element: <IntroPage />,
      },
      {
        path: NEWS_URL,
        element: <NewsPage />,
      },
    ],
  },
]);
