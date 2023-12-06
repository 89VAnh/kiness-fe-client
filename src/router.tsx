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
import {
  FatDetailPage,
  FatListPage,
  OldDetailPage,
  OldListPage,
  PoseDetailPage,
  PoseListPage,
  StoryDetailPage,
  StoryListPage,
} from "./modules/case";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import { ChartGrowthPage, CurrentPage, GenPage } from "./modules/expected";
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
  ColumnDetailPage,
  ColumnListPage,
  FatPage,
  HeightPage,
  PeriodPage,
  StandingPage,
} from "./modules/info-growth";
import Policy from "./modules/policy/Policy";
import PrivacyTerm from "./modules/privacy-term/PrivacyTerm";
import {
  GrowthMethodPage,
  GrowthSystemPage,
  QuestionPage,
} from "./modules/program";
import { TVLocalPage, TVWorldPage } from "./modules/tv";
import {
  ADVICE_EX_URL,
  ADVICE_FAQ_URL,
  ADVICE_INQUIRY_URL,
  ADVICE_INQUIRY_WRITE_URL,
  ADVICE_OVERHAUL_URL,
  BOOK_URL,
  CASE_FAT_DETAIL_URL,
  CASE_FAT_URL,
  CASE_OLD_DETAIL_URL,
  CASE_OLD_URL,
  CASE_POSTURE_DETAIL_URL,
  CASE_POSTURE_URL,
  CASE_STORY_DETAIL_URL,
  CASE_STORY_URL,
  EXPECTED_CHART_URL,
  EXPECTED_CURRENT_URL,
  EXPECTED_GEN_URL,
  GREETING_URL,
  HISTORY_URL,
  HOME_URL,
  INFO_BRANCH_URL,
  INFO_GROWTH_COLUMN_DETAIL_URL,
  INFO_GROWTH_COLUMN_URL,
  INFO_GROWTH_FAT_URL,
  INFO_GROWTH_HEIGHT_URL,
  INFO_GROWTH_PERIOD_URL,
  INFO_GROWTH_STANDING_URL,
  INFO_HISTORY_URL,
  INFO_LAB_URL,
  MAP_DETAIL_URL,
  MAP_URL,
  ORGAN_URL,
  PATENT_URL,
  POLICY_URL,
  PRIVACY_TERM_URL,
  PROGRAM_METHOD_URL,
  PROGRAM_QUESTION_URL,
  PROGRAM_SYSTEM_URL,
  RESEARCHER_URL,
  THESIS_DETAIL_URL,
  THESIS_URL,
  TV_LOCAL_URL,
  TV_WORLD_URL,
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

      // Program
      {
        path: PROGRAM_QUESTION_URL,
        element: (
          <ProtectedComponent
            Element={QuestionPage}
            title="Kiểm tra tăng trưởng là gì?"
            url={PROGRAM_QUESTION_URL}
          />
        ),
      },
      {
        path: PROGRAM_METHOD_URL,
        element: (
          <ProtectedComponent
            Element={GrowthMethodPage}
            title="Phương pháp tăng trưởng"
            url={PROGRAM_METHOD_URL}
          />
        ),
      },
      {
        path: PROGRAM_SYSTEM_URL,
        element: (
          <ProtectedComponent
            Element={GrowthSystemPage}
            title="Hệ thống tăng trưởng"
            url={PROGRAM_SYSTEM_URL}
          />
        ),
      },

      // Case
      {
        path: CASE_STORY_URL,
        element: (
          <ProtectedComponent
            Element={StoryListPage}
            title="Câu chuyện tăng trưởng"
            url={CASE_STORY_URL}
          />
        ),
      },
      {
        path: CASE_STORY_DETAIL_URL,
        element: (
          <ProtectedComponent
            Element={StoryDetailPage}
            title="Chi tiết câu chuyện tăng trưởng"
            url={CASE_STORY_DETAIL_URL}
          />
        ),
      },
      {
        path: CASE_POSTURE_URL,
        element: (
          <ProtectedComponent
            Element={PoseListPage}
            title="Trường hợp chỉnh sửa tư thế"
            url={CASE_POSTURE_URL}
          />
        ),
      },
      {
        path: CASE_POSTURE_DETAIL_URL,
        element: (
          <ProtectedComponent
            Element={PoseDetailPage}
            title="Chi tiết chỉnh sửa tư thế"
            url={CASE_POSTURE_DETAIL_URL}
          />
        ),
      },
      {
        path: CASE_OLD_URL,
        element: (
          <ProtectedComponent
            Element={OldListPage}
            title="Trường hợp trễ hạn"
            url={CASE_OLD_URL}
          />
        ),
      },
      {
        path: CASE_OLD_DETAIL_URL,
        element: (
          <ProtectedComponent
            Element={OldDetailPage}
            title="Chi tiết trường hợp trễ hạn"
            url={CASE_OLD_DETAIL_URL}
          />
        ),
      },
      {
        path: CASE_FAT_URL,
        element: (
          <ProtectedComponent
            Element={FatListPage}
            title="Trường hợp béo phì"
            url={CASE_FAT_URL}
          />
        ),
      },
      {
        path: CASE_FAT_DETAIL_URL,
        element: (
          <ProtectedComponent
            Element={FatDetailPage}
            title="Chi tiết trường hợp béo phì"
            url={CASE_FAT_DETAIL_URL}
          />
        ),
      },

      // info growth
      {
        path: INFO_GROWTH_HEIGHT_URL,
        element: (
          <ProtectedComponent
            Element={HeightPage}
            title="Tăng trưởng chiều cao"
            url={INFO_GROWTH_HEIGHT_URL}
          />
        ),
      },
      {
        path: INFO_GROWTH_STANDING_URL,
        element: (
          <ProtectedComponent
            Element={StandingPage}
            title="Tư thế đúng"
            url={INFO_GROWTH_STANDING_URL}
          />
        ),
      },
      {
        path: INFO_GROWTH_PERIOD_URL,
        element: (
          <ProtectedComponent
            Element={PeriodPage}
            title="Kỳ hạn / đáo hạn sớm"
            url={INFO_GROWTH_PERIOD_URL}
          />
        ),
      },
      {
        path: INFO_GROWTH_FAT_URL,
        element: (
          <ProtectedComponent
            Element={FatPage}
            title="Béo phì thời thơ ấu"
            url={INFO_GROWTH_FAT_URL}
          />
        ),
      },
      {
        path: INFO_GROWTH_COLUMN_URL,
        element: (
          <ProtectedComponent
            Element={ColumnListPage}
            title="Cột tăng trưởng"
            url={INFO_GROWTH_COLUMN_URL}
          />
        ),
      },
      {
        path: INFO_GROWTH_COLUMN_DETAIL_URL,
        element: (
          <ProtectedComponent
            Element={ColumnDetailPage}
            title="Chi tiết cột tăng trưởng"
            url={INFO_GROWTH_COLUMN_DETAIL_URL}
          />
        ),
      },

      // tv
      {
        path: TV_LOCAL_URL,
        element: (
          <ProtectedComponent
            Element={TVLocalPage}
            title="Kênh trong nước"
            url={TV_LOCAL_URL}
          />
        ),
      },
      {
        path: TV_WORLD_URL,
        element: (
          <ProtectedComponent
            Element={TVWorldPage}
            title="Kênh thế giới"
            url={TV_WORLD_URL}
          />
        ),
      },

      // expected
      {
        path: EXPECTED_GEN_URL,
        element: (
          <ProtectedComponent
            Element={GenPage}
            title="Chiều cao dự kiến do di truyền"
            url={EXPECTED_GEN_URL}
          />
        ),
      },
      {
        path: EXPECTED_CURRENT_URL,
        element: (
          <ProtectedComponent
            Element={CurrentPage}
            title="Chiều cao dự kiến theo chiều cao hiện tại"
            url={EXPECTED_CURRENT_URL}
          />
        ),
      },
      {
        path: EXPECTED_CHART_URL,
        element: (
          <ProtectedComponent
            Element={ChartGrowthPage}
            title="Biểu đồ tăng trưởng tiêu chuẩn Việt Nam"
            url={EXPECTED_CHART_URL}
          />
        ),
      },

      // single page
      {
        path: PRIVACY_TERM_URL,
        element: (
          <ProtectedComponent
            Element={PrivacyTerm}
            title="Chính sách bảo mật"
            url={PRIVACY_TERM_URL}
          />
        ),
      },
      {
        path: POLICY_URL,
        element: (
          <ProtectedComponent
            Element={Policy}
            title="Điều khoản sử dụng"
            url={POLICY_URL}
          />
        ),
      },
    ],
  },
]);
