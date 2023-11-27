import thumb from "@/assets/img/patent/patent1.jpg";

export const dataPatent = [...Array(10)].map((_, index) => ({
  key: index,
  title: "Dịch vụ kê đơn tập thể dục theo yêu cầu",
  number: "0513313",
  description: `<ul>
    <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dụng cụ đo chức năng cơ đẳng động</font></font></li>
    <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Đo và luyện tập chức năng cơ bắp chân và cơ lưng</font></font></li>
    <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kết quả nghiên cứu cho thấy hormone tăng trưởng tăng 25 đến 45 lần trong quá trình tập luyện tùy chỉnh.</font></font></li>
    </ul>`,
  thumb,
}));
