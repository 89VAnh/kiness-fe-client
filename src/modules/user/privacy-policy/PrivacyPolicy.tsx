import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import Sidebar from "@/modules/shared/sidebar/Sidebar";

import { renderUserMenus } from "../utils/render";
import styles from "./scss/privacy-policy.module.scss";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const items = renderUserMenus(t);

  const renderChildren = () => {
    return (
      <div className={styles.container}>
        <div>
          <Typography.Title level={2} className={styles.title}>
            1. Mục đích thu thập và sử dụng thông tin cá nhân
          </Typography.Title>
          <ul>
            <li>
              - Tên, ID, mật khẩu, ngày sinh: Dùng để xác minh danh tính khi sử
              dụng dịch vụ thành viên
            </li>

            <li>
              - Địa chỉ email, số điện thoại, số điện thoại di động: Đảm bảo
              đường dẫn liên lạc thông suốt trong việc gửi thông báo, giải quyết
              khiếu nại, v.v., cung cấp thông tin về các dịch vụ mới, sản phẩm
              mới hoặc sự kiện mới, v.v.
            </li>

            <li>
              - Thông tin tài khoản ngân hàng, thông tin thẻ tín dụng: Thanh
              toán sử dụng dịch vụ Kines và các dịch vụ bổ sung
            </li>

            <li>
              - Địa chỉ, số điện thoại: Đảm bảo đúng địa chỉ giao hàng khi giao
              hóa đơn, hàng hóa
            </li>

            <li>
              - Các hạng mục tùy chọn khác: Tài liệu cung cấp dịch vụ cá nhân
              hóa
            </li>

            <li>
              - Địa chỉ IP: Ngăn chặn việc sử dụng trái phép của các thành viên
              vi phạm và ngăn chặn việc sử dụng trái phép
            </li>
          </ul>
        </div>
        <div>
          <Typography.Title level={2} className={styles.title}>
            2. Các hạng mục thông tin cá nhân được thu thập
          </Typography.Title>
          <ul>
            <li>
              Kines thu thập thông tin cá nhân sau đây để đăng ký thành viên,
              mua hàng, tư vấn và ngăn chặn việc sử dụng sai mục đích.
            </li>

            <li>
              - Mục bắt buộc: tên trẻ, giới tính, thông tin liên hệ, chọn ngành,
              chiều cao, cân nặng của trẻ, lớp của trẻ, lĩnh vực tư vấn mong
              muốn
            </li>

            <li>
              - Mục tùy chọn: Thông tin công ty cần để cung cấp dịch vụ được cá
              nhân hóa
            </li>
          </ul>
        </div>
        <div>
          <Typography.Title level={2} className={styles.title}>
            3. Thời gian lưu giữ và sử dụng thông tin cá nhân
          </Typography.Title>
          <ul>
            <li>
              Khi đã đạt được mục đích, thời hạn lưu giữ kết thúc hoặc người
              dùng yêu cầu hủy, dữ liệu sẽ bị hủy ngay lập tức (Tuy nhiên, trong
              các trường hợp được pháp luật khác quy định riêng, dữ liệu sẽ được
              lưu trữ cho đến thời hạn liên quan).
            </li>

            <li>
              Người dùng không thể sử dụng dịch vụ nếu không nhập các mục bắt
              buộc do trang web thu thập và họ có thể sử dụng dịch vụ này ngay
              cả khi không nhập các mục tùy chọn.
            </li>
          </ul>
        </div>
        <div>
          <Typography.Title level={2} className={styles.title}>
            4. Chi tiết công việc ủy ​​thác và mô tả người ủy thác
          </Typography.Title>
          <ol style={{ listStyle: "inside" }}>
            <li>
              Nếu chúng tôi ủy thác việc xử lý thông tin cá nhân cho bên thứ ba,
              chúng tôi sẽ tiết lộ tên của nhiệm vụ được ủy thác và công ty được
              ủy thác trên trang web của chúng tôi.
            </li>

            <li>
              Khi ký hợp đồng gửi hàng, chúng tôi sẽ quy định rõ ràng việc tuân
              thủ pháp luật và các quy định liên quan đến bảo vệ thông tin cá
              nhân, cấm cung cấp thông tin cá nhân cho bên thứ ba và trách nhiệm
              pháp lý, đồng thời chúng tôi sẽ lưu giữ chi tiết hợp đồng bằng văn
              bản hoặc điện tử.
            </li>
          </ol>
        </div>
        <div>
          <Typography.Title level={2} className={styles.title}>
            5. Quyền của người sử dụng, người đại diện theo pháp luật và cách
            thức thực hiện quyền đó
          </Typography.Title>
          <ul>
            <li>
              Nếu khách hàng yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân,
              chúng tôi sẽ phản hồi trung thực yêu cầu của khách hàng và xử lý
              yêu cầu đó ngay lập tức. Để bảo vệ thông tin cá nhân, chúng tôi
              không cung cấp các thủ tục xem, chỉnh sửa hoặc xóa thông tin cá
              nhân của khách hàng qua điện thoại, thư, fax hoặc các phương thức
              ứng dụng khác ngoài gặp trực tiếp.
            </li>
          </ul>
        </div>
        <div>
          <Typography.Title level={2} className={styles.title}>
            6. Lắp đặt, vận hành và từ chối thiết bị thu gom tự động
          </Typography.Title>
          <ul>
            <li>
              Đôi khi, chúng tôi vận hành ‘cookie’ để lưu trữ và truy xuất thông
              tin của bạn. Cookie là một tệp văn bản rất nhỏ mà máy chủ dùng để
              chạy trang web của chúng tôi gửi tới trình duyệt của bạn và được
              lưu trữ trên đĩa cứng máy tính của bạn. Chúng tôi sử dụng cookie
              cho các mục đích sau:
            </li>
            <ol style={{ listStyle: "inside" }}>
              <li>
                Chúng tôi phân tích tần suất truy cập và thời gian truy cập của
                các thành viên và không phải thành viên, xác định thị hiếu và
                mối quan tâm của người dùng và sử dụng chúng làm thước đo cho
                việc cải cách dịch vụ.
              </li>
              <li>
                Nó được sử dụng làm dữ liệu để xác định số lượt truy cập vào các
                sự kiện khác nhau do trung tâm chúng tôi tổ chức và cung cấp
                thông tin khác biệt theo sở thích cá nhân.
              </li>
            </ol>
            <li>
              Bạn có tùy chọn để cài đặt cookie. Do đó, bằng cách cài đặt các
              tùy chọn trong trình duyệt web, bạn có thể cho phép tất cả cookie,
              xác nhận mỗi lần lưu cookie hoặc từ chối lưu tất cả cookie. Nếu
              bạn từ chối cài đặt cookie, việc cung cấp một số dịch vụ có thể
              khó khăn.
            </li>
          </ul>
        </div>
        <div>
          <Typography.Title level={2} className={styles.title}>
            7. Tên người quản lý thông tin cá nhân (hoặc bộ phận), thông tin
            liên hệ
          </Typography.Title>
          <ul>
            <li>- Người quản lý thông tin cá nhân: Kim Yang-su</li>
            <li>- Người quản lý thông tin cá nhân: Kim Yang-su</li>
            <li>* Thông tin liên hệ: Kines Development Center</li>
            <li>- Điện thoại: 02-558-2758 - E-mail: yoox@kiness.co.kr</li>
          </ul>
        </div>
      </div>
    );
  };

  return <Sidebar children={renderChildren()} items={items} />;
}
