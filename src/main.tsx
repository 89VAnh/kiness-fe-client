import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import { queryClient } from "./lib/react-query";
import "./locale/i18n";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={viVN}
        pagination={{
          showSizeChanger: true,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// Reload the page when the i18n file changes
if (import.meta.hot) {
  import.meta.hot.accept(["./locale/i18n"], () => {});
}
