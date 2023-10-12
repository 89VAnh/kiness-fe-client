import { Divider } from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { HOME_URL, LOGIN_URL, REGISTER_URL } from "@/urls";

import styles from "./scss/header.module.scss";

interface Props {
  context: ReactNode;
}

export default function Header({ context }: Props): JSX.Element {
  return (
    <>
      <div className={styles.headerTop}>
        <div className={styles.wrapper}>
          <Link to={HOME_URL} className={styles.linkItem}>
            Đăng ký kiểm tra
          </Link>
          <Divider type="vertical" style={{ backgroundColor: "#8C8C8C" }} />
          <Link to={HOME_URL} className={styles.linkItem}>
            Đăng ký trải nghiệm
          </Link>
          <Divider type="vertical" style={{ backgroundColor: "#8C8C8C" }} />
          <Link to={REGISTER_URL} className={styles.linkItem}>
            Đăng ký thành viên
          </Link>
          <Divider type="vertical" style={{ backgroundColor: "#8C8C8C" }} />
          <Link to={LOGIN_URL} className={styles.linkItem}>
            Đăng nhập
          </Link>
        </div>
      </div>
      {context}
    </>
  );
}
