import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./modules/app/AppLayout";
import ProtectedComponent from "./modules/app/ProtectComponent";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import Home from "./modules/home/Home";
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
            Element={Home}
            title="Kiness Việt Nam"
            url={HOME_URL}
          />
        ),
      },
    ],
  },
]);
