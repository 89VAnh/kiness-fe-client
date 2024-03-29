import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { queryClient } from "./lib/react-query";
import "./locale/i18n";
import { router } from "./router";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={theme}
        locale={viVN}
        pagination={{
          showSizeChanger: true,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </RecoilRoot>,
  // </React.StrictMode>,
);

// Reload the page when the i18n file changes
if (import.meta.hot) {
  import.meta.hot.accept(["./locale/i18n"], () => {});
}
