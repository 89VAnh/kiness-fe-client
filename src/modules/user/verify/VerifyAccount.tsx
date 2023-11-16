import { Button, Card, Image, Typography } from "antd";

import congratsImg from "@/assets/img/others/congrats.png";
import { HOME_URL, LOGIN_URL } from "@/urls";

import styles from "./scss/verify.module.scss";

export default function VerifyAccount(): JSX.Element {
  return (
    <div className={styles.container}>
      <center>
        <Card loading={false}>
          <Image preview={false} src={congratsImg} width={100} />
          <Image preview={false} src={congratsImg} width={100} />
          <Image preview={false} src={congratsImg} width={100} />

          <div className={styles.content}>
            <Typography.Text type="success">
              Xác thực thành công!
            </Typography.Text>{" "}
            Chào mừng bạn đến với{" "}
            <Typography.Link strong href={HOME_URL}>
              KINESS
            </Typography.Link>
          </div>

          <Button.Group>
            <Button type="default">
              <Typography.Link href={LOGIN_URL}>Đăng nhập</Typography.Link>
            </Button>
            <Button type="primary">
              <Typography.Link href={HOME_URL} color="#fff">
                Trang chủ
              </Typography.Link>
            </Button>
          </Button.Group>
        </Card>
      </center>
    </div>
  );
}
