import { Navigate, createBrowserRouter } from "react-router-dom";

import { IntroPage } from "./modules/about/intro";
import { MissionPage } from "./modules/about/mission";
import { NewsPage } from "./modules/about/news";
import AppLayout from "./modules/app/AppLayout";
import ProtectedComponent from "./modules/app/ProtectComponent";
import { BranchPage } from "./modules/branch/branch";
import { BranchRegisterPage } from "./modules/branch/branch-register";
import { ExperienceRegisterPage } from "./modules/branch/experence-register";
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
  PRIVACY_POLICY_URL,
  QUALITY_URL,
  RANGE_GROWTH_URL,
  REASONS_GROWTH_URL,
  REGISTER_BRANCH_URL,
  REGISTER_EXPERIENCE_URL,
  REGISTER_URL,
  SCHEDULE_TRAIN_URL,
  STAGES_GROWTH_URL,
  SUPPORT_EQUIP_URL,
  TERMS_USE_URL,
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
        element: (
          <ProtectedComponent
            Element={HomePage}
            title="Kiness Việt Nam"
            url={HOME_URL}
          />
        ),
      },

      // Intro
      {
        path: INTRO_URL,
        element: (
          <ProtectedComponent
            Element={IntroPage}
            title="Giới thiệu"
            url={INTRO_URL}
          />
        ),
      },
      {
        path: NEWS_URL,
        element: (
          <ProtectedComponent
            Element={NewsPage}
            title="Tin tức"
            url={NEWS_URL}
          />
        ),
      },
      {
        path: MISSION_URL,
        element: (
          <ProtectedComponent
            Element={MissionPage}
            title="Sứ mệnh và tầm nhìn"
            url={MISSION_URL}
          />
        ),
      },

      // Training
      {
        path: TRAINING_URL,
        element: <Navigate to={GROWTH_URL} />,
      },
      {
        path: GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={GrowthPage}
            title="Phương pháp tăng trưởng"
            url={GROWTH_URL}
          />
        ),
      },
      {
        path: SUPPORT_EQUIP_URL,
        element: (
          <ProtectedComponent
            Element={EquipmentPage}
            title="Thiết bị hỗ trợ"
            url={SUPPORT_EQUIP_URL}
          />
        ),
      },
      {
        path: TRAINING_PROGRAM_URL,
        element: (
          <ProtectedComponent
            Element={ProgramPage}
            title="Chương trình tập luyện"
            url={TRAINING_PROGRAM_URL}
          />
        ),
      },
      {
        path: FEE_URL,
        element: (
          <ProtectedComponent
            Element={GrowthPage}
            title="Chi phí"
            url={FEE_URL}
          />
        ),
      },
      {
        path: QUALITY_URL,
        element: (
          <ProtectedComponent
            Element={QualityPage}
            title="Đảm bảo chất lượng"
            url={QUALITY_URL}
          />
        ),
      },

      // Wiki
      {
        path: STAGES_GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Các giai đoạn phát triển"
            url={STAGES_GROWTH_URL}
          />
        ),
      },
      {
        path: BENEFIT_GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Lợi ích tăng trưởng chiều cao"
            url={BENEFIT_GROWTH_URL}
          />
        ),
      },
      {
        path: HORMONE_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Hóc môn tăng trưởng"
            url={HORMONE_URL}
          />
        ),
      },
      {
        path: REASONS_GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Các yếu tố giúp tăng trưởng chiều cao"
            url={REASONS_GROWTH_URL}
          />
        ),
      },
      {
        path: POINT_GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Điểm tăng trưởng chiều cao"
            url={POINT_GROWTH_URL}
          />
        ),
      },
      {
        path: RANGE_GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Tầm tăng trưởng"
            url={RANGE_GROWTH_URL}
          />
        ),
      },
      {
        path: INFO_GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Thông tin tăng trưởng"
            url={INFO_GROWTH_URL}
          />
        ),
      },
      {
        path: EXAM_GROWTH_URL,
        element: (
          <ProtectedComponent
            Element={WikiPage}
            title="Bài kiểm tra tăng trưởng"
            url={EXAM_GROWTH_URL}
          />
        ),
      },

      // Test
      {
        path: GROWTH_FORECAST_URL,
        element: (
          <ProtectedComponent
            Element={TestPage}
            title="Dự đoán tăng trưởng"
            url={GROWTH_FORECAST_URL}
          />
        ),
      },
      {
        path: SCHEDULE_TRAIN_URL,
        element: (
          <ProtectedComponent
            Element={TestPage}
            title="Lên lịch tập luyện"
            url={SCHEDULE_TRAIN_URL}
          />
        ),
      },
      {
        path: ADVISE_URL,
        element: (
          <ProtectedComponent
            Element={TestPage}
            title="Tư vấn tăng trưởng"
            url={ADVISE_URL}
          />
        ),
      },

      // User
      {
        path: LOGIN_URL,
        element: (
          <ProtectedComponent
            Element={LoginPage}
            title="Đăng nhập"
            url={LOGIN_URL}
          />
        ),
      },
      {
        path: REGISTER_URL,
        element: (
          <ProtectedComponent
            Element={RegisterMemberPage}
            title="Đăng ký thành viên"
            url={REGISTER_URL}
          />
        ),
      },
      {
        path: PRIVACY_POLICY_URL,
        element: (
          <ProtectedComponent
            Element={PrivacyPolicyPage}
            title="Chính sách bảo mật"
            url={PRIVACY_POLICY_URL}
          />
        ),
      },
      {
        path: TERMS_USE_URL,
        element: (
          <ProtectedComponent
            Element={TermsUsePage}
            title="Điều khoản sử dụng"
            url={TERMS_USE_URL}
          />
        ),
      },

      // Branch
      {
        path: BRANCH_URL,
        element: (
          <ProtectedComponent
            Element={BranchPage}
            title="Chi nhánh"
            url={BRANCH_URL}
          />
        ),
      },
      {
        path: TEST_REGISTER_URL,
        element: (
          <ProtectedComponent
            Element={TestRegisterPage}
            title="Đăng ký kiểm tra"
            url={TEST_REGISTER_URL}
          />
        ),
      },
      {
        path: REGISTER_EXPERIENCE_URL,
        element: (
          <ProtectedComponent
            Element={ExperienceRegisterPage}
            title="Đăng ký trải nghiệm"
            url={REGISTER_EXPERIENCE_URL}
          />
        ),
      },
      {
        path: REGISTER_BRANCH_URL,
        element: (
          <ProtectedComponent
            Element={BranchRegisterPage}
            title="Đăng ký trung tâm"
          />
        ),
      },
    ],
  },
]);
