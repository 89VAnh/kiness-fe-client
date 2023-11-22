import { Space, Typography } from "antd";

import { GREETING_URL, MAP_URL } from "@/urls";

import { info, socials } from "./data/data-fake";
import styles from "./scss/footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <section className={styles.footer}>
      <div className={styles.footerNav}>
        <div className="inner">
          <Space className={styles.listNav} wrap>
            <Typography.Link href={GREETING_URL}>
              Giới thiệu về Kiness
            </Typography.Link>
            <Typography.Link href={MAP_URL}>Mạng lưới Kiness</Typography.Link>
            <Typography.Link>Chính sách bảo mật</Typography.Link>
            <Typography.Link className="last">
              Điều khoản sử dụng
            </Typography.Link>
          </Space>
        </div>
      </div>
      <div className={`inner ${styles.footerInfo}`}>
        <article>
          <Typography.Paragraph>{info.company}</Typography.Paragraph>
          <Space wrap align="center" style={{ gap: 0, marginTop: 8 }}>
            <Typography.Text>{info.address}</Typography.Text>
            <Typography.Text className="last">
              Đại diện: {info.deputy}
            </Typography.Text>
          </Space>
          <Space wrap align="center" style={{ gap: 0, marginTop: 8 }}>
            <Typography.Text>Số đăng ký kinh doanh: {info.tax}</Typography.Text>
            <Typography.Text className="last">
              Người liên hệ: {info.contact}
            </Typography.Text>
          </Space>
          <Typography.Paragraph style={{ fontSize: 16, marginTop: 8 }}>
            Copyright(C) 2023 KINESS CO.LTD Mọi quyền được bảo lưu.
          </Typography.Paragraph>
        </article>
        <article>
          <ul>
            {socials.map((item, index) => (
              <li key={index}>
                <Typography.Link href={item.link} target="_blank">
                  <img src={item.icon} alt={index + ""} />
                </Typography.Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
