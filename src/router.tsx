import { createBrowserRouter } from "react-router-dom";

import { IntroPage } from "./modules/about/intro";
import { MissionPage } from "./modules/about/mission";
import { NewsPage } from "./modules/about/news";
import AppLayout from "./modules/app/AppLayout";
import { HomePage } from "./modules/home";
import FloatButtons from "./modules/shared/float-button/FloatButton";
import { LoginPage } from "./modules/user/login";
import RegisterMember from "./modules/user/register-member/RegisterMember";
import {
  HOME_URL,
  INTRO_URL,
  LOGIN_URL,
  MISSION_URL,
  NEWS_URL,
  REGISTER_URL,
} from "./urls";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout children={<FloatButtons />} />,
    errorElement: <AppLayout>{/* <ErrorBoundary /> */}</AppLayout>,
    children: [
      {
        path: HOME_URL,
        element: <HomePage />,
      },

      // Intro
      {
        path: INTRO_URL,
        element: <IntroPage />,
      },
      {
        path: NEWS_URL,
        element: <NewsPage />,
      },
      {
        path: MISSION_URL,
        element: <MissionPage />,
      },

      // User
      {
        path: LOGIN_URL,
        element: <LoginPage />,
      },
      {
        path: REGISTER_URL,
        element: <RegisterMember />,
      },
    ],
  },
]);
