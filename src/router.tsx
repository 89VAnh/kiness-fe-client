import { createBrowserRouter } from "react-router-dom";

import { OverhaulPage } from "./modules/advice";
import AppLayout from "./modules/app/AppLayout";
import ProtectedComponent from "./modules/app/ProtectComponent";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import { GreetingPage, HistoryPage, OrganPage } from "./modules/greetings";
import Home from "./modules/home/Home";
import {
  ADVICE_OVERHAUL_URL,
  GREETING_URL,
  HISTORY_URL,
  HOME_URL,
  ORGAN_URL,
} from "./urls";

export const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <AppLayout />,
    errorElement: (
      <AppLayout>
        <ErrorBoundaryPage />
      </AppLayout>
    ),
    children: [
      {
        path: HOME_URL,
        element: (
          <ProtectedComponent
            Element={Home}
            title="Kiness Việt Nam"
            url={HOME_URL}
          />
        ),
      },
      {
        path: GREETING_URL,
        element: (
          <ProtectedComponent
            Element={GreetingPage}
            title="Lời chào của CEO"
            url={GREETING_URL}
          />
        ),
      },
      {
        path: HISTORY_URL,
        element: (
          <ProtectedComponent
            Element={HistoryPage}
            title="Lịch sử"
            url={HISTORY_URL}
          />
        ),
      },
      {
        path: ORGAN_URL,
        element: (
          <ProtectedComponent
            Element={OrganPage}
            title="Sơ đồ tổ chức"
            url={ORGAN_URL}
          />
        ),
      },

      // advice
      {
        path: ADVICE_OVERHAUL_URL,
        element: (
          <ProtectedComponent
            Element={OverhaulPage}
            title="Kiểm tra tăng trưởng"
            url={ADVICE_OVERHAUL_URL}
          />
        ),
      },
    ],
  },
]);
