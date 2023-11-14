import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderUserMenus } from "../utils/render";
import styles from "./scss/terms-use.module.scss";

export default function TermsUse() {
  const { t } = useTranslation();

  const items = renderUserMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <div>
          <Typography.Title level={2} className={styles.title}>
            Chương 1: Quy định chung
          </Typography.Title>
          <div>
            <div>
              <Typography.Text strong>Điều 1 (Mục đích)</Typography.Text>
            </div>
            <Typography.Text className={styles.content}>
              Các Điều khoản sử dụng này (sau đây gọi là “Điều khoản và Điều
              kiện”) chi phối các điều kiện đăng ký và sử dụng dịch vụ Kiness
              (tên tiếng Hàn: Kines Development Center, sau đây gọi là Dịch vụ)
              do Công ty cung cấp giữa KINESS (sau đây gọi là Công ty) và khách
              hàng của Công ty (sau đây gọi là “Thành viên”). Mục đích là quy
              định cụ thể mọi vấn đề liên quan và các vấn đề cần thiết khác.
            </Typography.Text>
          </div>
          <div style={{ marginTop: 20 }}>
            <div>
              <Typography.Text strong>
                Điều 2 (Hiệu lực và thay đổi Điều khoản sử dụng)
              </Typography.Text>
            </div>
            <Typography.Text className={styles.content}>
              (1) Các điều khoản và điều kiện này có hiệu lực khi được công bố
              trực tuyến trên trang web của Trung tâm Tăng trưởng Kiness
              (www.kiness.co.kr, sau đây gọi là 'Trang web của Trung tâm Tăng
              trưởng Kiness') và nếu có căn cứ hợp lý thì chúng sẽ không vi phạm
              luật pháp và quy định có liên quan. Nó có thể được sửa đổi trong
              phạm vi. Các điều khoản và điều kiện sửa đổi sẽ có hiệu lực khi
              được công bố trực tuyến và các sửa đổi đối với các quy định quan
              trọng, chẳng hạn như quyền hoặc nghĩa vụ của người dùng, sẽ được
              thông báo trước.
            </Typography.Text>
            <Typography.Text className={styles.content}>
              (2) Công ty có thể thay đổi các điều khoản và điều kiện này nếu có
              căn cứ hợp lý và nếu các điều khoản và điều kiện thay đổi, chúng
              sẽ được thông báo trước ngay lập tức.
            </Typography.Text>
            <Typography.Text className={styles.content}>
              (3) Đồng ý với các Điều khoản và Điều kiện này có nghĩa là bạn
              đồng ý thường xuyên truy cập trang web để kiểm tra những thay đổi
              trong Điều khoản và Điều kiện. Công ty không chịu trách nhiệm cho
              bất kỳ thiệt hại nào mà người dùng phải gánh chịu do thiếu thông
              tin về các điều khoản và điều kiện đã thay đổi.
            </Typography.Text>
            <Typography.Text className={styles.content}>
              (4) Nếu thành viên không đồng ý với các điều khoản và điều kiện đã
              thay đổi thì có thể yêu cầu rút (hủy) tư cách thành viên, nếu tiếp
              tục sử dụng dịch vụ mà không thể hiện ý định từ chối kể cả sau 7
              ngày kể từ ngày ngày có hiệu lực của các điều khoản và điều kiện
              được thay đổi, anh ấy/cô ấy đồng ý với những thay đổi trong các
              điều khoản và điều kiện đó.
            </Typography.Text>
          </div>
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
