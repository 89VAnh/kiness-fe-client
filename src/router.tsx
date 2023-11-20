import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./modules/app/AppLayout";
import ProtectedComponent from "./modules/app/ProtectComponent";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import { HomePage } from "./modules/home";
import { HOME_URL } from "./urls";

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
            Element={HomePage}
            title="Kiness Việt Nam"
            url={HOME_URL}
          />
        ),
      },
    ],
  },
]);
