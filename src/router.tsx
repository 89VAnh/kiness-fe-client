import { Navigate, createBrowserRouter } from "react-router-dom";

import { IntroPage } from "./modules/about/intro";
import { MissionPage } from "./modules/about/mission";
import { NewsPage } from "./modules/about/news";
import AppLayout from "./modules/app/AppLayout";
import { BranchPage } from "./modules/branch/branch";
import { TestRegisterPage } from "./modules/branch/test-register";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import { HomePage } from "./modules/home";
import { TestPage } from "./modules/test";
import { EquipmentPage } from "./modules/training/equipment";
import { GrowthPage } from "./modules/training/growth";
import { ProgramPage } from "./modules/training/program";
import { QualityPage } from "./modules/training/quality";
import { LoginPage } from "./modules/user/login";
import { PrivacyPolicyPage } from "./modules/user/privacy-policy";
import { RegisterMemberPage } from "./modules/user/register-member";
import { TermsUsePage } from "./modules/user/terms-use";
import { WikiPage } from "./modules/wiki";
import {
  ADVISE_URL,
  BENEFIT_GROWTH_URL,
  BRANCH_URL,
  EXAM_GROWTH_URL,
  FEE_URL,
  GROWTH_FORECAST_URL,
  GROWTH_URL,
  HOME_URL,
  HORMONE_URL,
  INFO_GROWTH_URL,
  INTRO_URL,
  LOGIN_URL,
  MISSION_URL,
  NEWS_URL,
  POINT_GROWTH_URL,
  PRIVACY_POLICY,
  QUALITY_URL,
  RANGE_GROWTH_URL,
  REASONS_GROWTH_URL,
  REGISTER_URL,
  SCHEDULE_TRAIN_URL,
  STAGES_GROWTH_URL,
  SUPPORT_EQUIP_URL,
  TERMS_USE,
  TEST_REGISTER_URL,
  TRAINING_PROGRAM_URL,
  TRAINING_URL,
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

      // Training
      {
        path: TRAINING_URL,
        element: <Navigate to={GROWTH_URL} />,
      },
      {
        path: GROWTH_URL,
        element: <GrowthPage />,
      },
      {
        path: SUPPORT_EQUIP_URL,
        element: <EquipmentPage />,
      },
      {
        path: TRAINING_PROGRAM_URL,
        element: <ProgramPage />,
      },
      {
        path: FEE_URL,
        element: <GrowthPage />,
      },
      {
        path: QUALITY_URL,
        element: <QualityPage />,
      },

      // Wiki
      { path: STAGES_GROWTH_URL, element: <WikiPage /> },
      { path: BENEFIT_GROWTH_URL, element: <WikiPage /> },
      { path: HORMONE_URL, element: <WikiPage /> },
      { path: REASONS_GROWTH_URL, element: <WikiPage /> },
      { path: POINT_GROWTH_URL, element: <WikiPage /> },
      { path: RANGE_GROWTH_URL, element: <WikiPage /> },
      { path: INFO_GROWTH_URL, element: <WikiPage /> },
      { path: EXAM_GROWTH_URL, element: <WikiPage /> },

      // Test
      { path: GROWTH_FORECAST_URL, element: <TestPage /> },
      { path: SCHEDULE_TRAIN_URL, element: <TestPage /> },
      { path: ADVISE_URL, element: <TestPage /> },

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
