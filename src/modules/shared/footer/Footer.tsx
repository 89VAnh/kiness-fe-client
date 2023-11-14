import { Col, Image, Row, Space, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/img/logo/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/assets/svg";
import { INTRO_URL, TRAINING_URL } from "@/urls";

import styles from "./scss/footer.module.scss";

export default function Footer(): JSX.Element {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24} md={12} lg={7}>
            <div>
              <Space direction="vertical">
                <Image src={logo} preview={false} />

                <Space direction="vertical">
                  <Space style={{ marginBottom: 10 }}>
                    <LocationIcon />
                    <Typography.Text style={{ whiteSpace: "nowrap" }}>
                      Số 2 Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội
                    </Typography.Text>
                  </Space>
                  <Space style={{ marginBottom: 16 }}>
                    <PhoneIcon />
                    <Typography.Link
                      style={{ color: "#000" }}
                      href="tel:024 3382 4929"
                    >
                      024 3382 4929
                    </Typography.Link>
                  </Space>
                  <Space style={{ marginBottom: 16 }}>
                    <MailIcon />
                    <Typography.Link
                      style={{ color: "#000" }}
                      href="mailto:yoox@kiness.co.kr"
                    >
                      yoox@kiness.co.kr
                    </Typography.Link>
                  </Space>
                </Space>
              </Space>
            </div>
          </Col>
          <Col span={24} md={12} lg={6}>
            <div>
              <Space direction="vertical" className={styles.quickLink}>
                <Typography.Title level={4}>Quick link</Typography.Title>
                <Link
                  to={INTRO_URL}
                  className={
                    location.pathname.includes(INTRO_URL) ? styles.active : ""
                  }
                >
                  <Typography.Text>Giới thiệu</Typography.Text>
                </Link>
                <Link
                  to={TRAINING_URL}
                  className={
                    location.pathname.includes(TRAINING_URL)
                      ? styles.active
                      : ""
                  }
                >
                  <Typography.Text>Chương trình huấn luyện</Typography.Text>
                </Link>
                <Link to="/">
                  <Typography.Text>
                    Bách khoa tăng trưởng về chiều cao
                  </Typography.Text>
                </Link>
                <Link to="/">
                  <Typography.Text>Kiểm tra tăng trưởng</Typography.Text>
                </Link>
              </Space>
            </div>
          </Col>
          <Col span={24} md={12} lg={5}>
            <div>
              <Space direction="vertical" className={styles.quickLink}>
                <Typography.Title level={4}>Đăng ký </Typography.Title>
                <Link to="/">
                  <Typography.Text>Đăng ký trải nghiệm</Typography.Text>
                </Link>
                <Link to="/">
                  <Typography.Text>Đăng ký kiểm tra</Typography.Text>
                </Link>
                <Link to="/">
                  <Typography.Text>Đăng ký thành viên</Typography.Text>
                </Link>
                <Link to="/">
                  <Typography.Text>Đăng ký đối tác</Typography.Text>
                </Link>
              </Space>
            </div>
          </Col>
          <Col
            span={24}
            md={12}
            lg={6}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <div>
              <Space style={{ gap: 28 }}>
                <a href="/#">
                  <TwitterIcon />
                </a>
                <a href="/#">
                  <InstagramIcon />
                </a>
                <a href="/#">
                  <FacebookIcon />
                </a>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

// is_active, created_at, created_by_user, lu_updated, lu_by_user
