import { createBrowserRouter } from "react-router-dom";

import { IntroPage } from "./modules/about/intro";
import { MissionPage } from "./modules/about/mission";
import { NewsPage } from "./modules/about/news";
import AppLayout from "./modules/app/AppLayout";
import { BranchPage } from "./modules/branch/branch";
import { TestRegisterPage } from "./modules/branch/test-register";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import { HomePage } from "./modules/home";
import { LoginPage } from "./modules/user/login";
import { PrivacyPolicyPage } from "./modules/user/privacy-policy";
import { RegisterMemberPage } from "./modules/user/register-member";
import { TermsUsePage } from "./modules/user/terms-use";
import {
  BRANCH_URL,
  HOME_URL,
  INTRO_URL,
  LOGIN_URL,
  MISSION_URL,
  NEWS_URL,
  PRIVACY_POLICY,
  REGISTER_URL,
  TERMS_USE,
  TEST_REGISTER_URL,
} from "./urls";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <AppLayout>
        <ErrorBoundaryPage />
      </AppLayout>
    ),
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
        element: <RegisterMemberPage />,
      },
      {
        path: PRIVACY_POLICY,
        element: <PrivacyPolicyPage />,
      },
      {
        path: TERMS_USE,
        element: <TermsUsePage />,
      },

      // Branch
      {
        path: BRANCH_URL,
        element: <BranchPage />,
      },
      {
        path: TEST_REGISTER_URL,
        element: <TestRegisterPage />,
      },
    ],
  },
]);
