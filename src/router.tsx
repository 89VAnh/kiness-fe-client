import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  ExPage,
  FaqPage,
  InquiryListPage,
  InquiryWritePage,
  OverhaulPage,
} from "./modules/advice";
import AppLayout from "./modules/app/AppLayout";
import ProtectedComponent from "./modules/app/ProtectComponent";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import {
  BookPage,
  GreetingPage,
  HistoryPage,
  MapDetailPage,
  MapListPage,
  OrganPage,
  PatentPage,
  ResearcherPage,
  ThesisDetailPage,
  ThesisPage,
} from "./modules/greetings";
import Home from "./modules/home/Home";
import {
  ADVICE_EX_URL,
  ADVICE_FAQ_URL,
  ADVICE_INQUIRY_URL,
  ADVICE_INQUIRY_WRITE_URL,
  ADVICE_OVERHAUL_URL,
  BOOK_URL,
  GREETING_URL,
  HISTORY_URL,
  HOME_URL,
  INFO_BRANCH_URL,
  INFO_HISTORY_URL,
  INFO_LAB_URL,
  MAP_DETAIL_URL,
  MAP_URL,
  ORGAN_URL,
  PATENT_URL,
  RESEARCHER_URL,
  THESIS_DETAIL_URL,
  THESIS_URL,
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
        path: INFO_HISTORY_URL,
        element: <Navigate to={GREETING_URL}></Navigate>,
      },
      {
        path: INFO_BRANCH_URL,
        element: <Navigate to={ORGAN_URL}></Navigate>,
      },
      {
        path: INFO_LAB_URL,
        element: <Navigate to={RESEARCHER_URL}></Navigate>,
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
      {
        path: MAP_URL,
        element: (
          <ProtectedComponent
            Element={MapListPage}
            title="Tìm chi nhánh"
            url={MAP_URL}
          />
        ),
      },
      {
        path: MAP_DETAIL_URL,
        element: (
          <ProtectedComponent
            Element={MapDetailPage}
            title="Chi nhánh"
            url={MAP_DETAIL_URL}
          />
        ),
      },
      {
        path: RESEARCHER_URL,
        element: (
          <ProtectedComponent
            Element={ResearcherPage}
            title="Các nhà nghiên cứu"
            url={RESEARCHER_URL}
          />
        ),
      },
      {
        path: THESIS_URL,
        element: (
          <ProtectedComponent
            Element={ThesisPage}
            title="Bài nghiên cứu"
            url={THESIS_URL}
          />
        ),
      },
      {
        path: THESIS_DETAIL_URL,
        element: (
          <ProtectedComponent
            Element={ThesisDetailPage}
            title="Bài nghiên cứu"
            url={THESIS_DETAIL_URL}
          />
        ),
      },
      {
        path: PATENT_URL,
        element: (
          <ProtectedComponent
            Element={PatentPage}
            title="Bằng sáng chế"
            url={PATENT_URL}
          />
        ),
      },
      {
        path: BOOK_URL,
        element: (
          <ProtectedComponent
            Element={BookPage}
            title="Sách xuất bản"
            url={BOOK_URL}
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
      {
        path: ADVICE_EX_URL,
        element: (
          <ProtectedComponent
            Element={ExPage}
            title="Đặt lịch trải nghiệm 1 ngày"
            url={ADVICE_EX_URL}
          />
        ),
      },
      {
        path: ADVICE_FAQ_URL,
        element: (
          <ProtectedComponent
            Element={FaqPage}
            title="Các câu hỏi thường gặp"
            url={ADVICE_FAQ_URL}
          />
        ),
      },
      {
        path: ADVICE_INQUIRY_URL,
        element: (
          <ProtectedComponent
            Element={InquiryListPage}
            title="Hỏi đáp tư vấn"
            url={ADVICE_INQUIRY_URL}
          />
        ),
      },
      {
        path: ADVICE_INQUIRY_WRITE_URL,
        element: (
          <ProtectedComponent
            Element={InquiryWritePage}
            title="Viết câu hỏi tư vấn"
            url={ADVICE_INQUIRY_WRITE_URL}
          />
        ),
      },
    ],
  },
]);
