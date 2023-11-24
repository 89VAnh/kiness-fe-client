import _ from "lodash";

export const dataTimeline = [
  {
    year: 1999,
    content: "Thành lập Trung tâm Thể dục Tùy chỉnh Kim Yang-su (KEPC)",
  },
  {
    year: 1999,
    content:
      "Phát triển Walking Traction (thiết bị hỗ trợ tập luyện cho bệnh nhân đau lưng, viêm khớp)",
  },
  {
    year: 2000,
    content: "Thiết bị tập thể dục tại nhà Ứng dụng bằng sáng chế Longman",
  },
  {
    year: 2000,
    content:
      "Vượt 50 bài giảng công khai về phương pháp tăng trưởng Kinesi tăng trưởng chiều cao",
  },
  {
    year: 2000,
    content:
      "Cung cấp chương trình kê đơn bài tập sức mạnh và bắt đầu phát triển hệ thống",
  },
  {
    year: 2001,
    content:
      "Cung cấp chương trình kê đơn bài tập sức mạnh và bắt đầu phát triển hệ thống",
  },
  {
    year: 2002,
    content:
      "Cung cấp chương trình kê đơn bài tập sức mạnh và bắt đầu phát triển hệ thống",
  },
  {
    year: 2003,
    content:
      "Cung cấp chương trình kê đơn bài tập sức mạnh và bắt đầu phát triển hệ thống",
  },
  {
    year: 2004,
    content:
      "Cung cấp chương trình kê đơn bài tập sức mạnh và bắt đầu phát triển hệ thống",
  },
  {
    year: 2005,
    content:
      "Cung cấp chương trình kê đơn bài tập sức mạnh và bắt đầu phát triển hệ thống",
  },
  {
    year: 2006,
    content:
      "Cung cấp chương trình kê đơn bài tập sức mạnh và bắt đầu phát triển hệ thống",
  },
];

export const getDataTimeline = (dataTimeline: any[]) => {
  const years = _.chain(dataTimeline.map((i) => i.year))
    .uniq()
    .sort((a, b) => a - b)
    .value();

  let lenYear = years.length;
  let data = [];
  while (lenYear > 0) {
    if (lenYear < 6) {
      const obj: any = {};
      const values = [...Array(lenYear)].map((_, index) => {
        const data: any = {};
        data[years[index].toString()] = dataTimeline
          .filter((i) => i.year === years[index])
          .map((i) => i.content);

        return data;
      });
      obj[`${years[0]} ~ ${years[lenYear - 1]}`] = _.reverse(values);
      years.splice(0, lenYear);
      data.push(obj);
    } else {
      const obj: any = {};
      const values = [...Array(6)].map((_, index) => {
        const data: any = {};
        data[years[index].toString()] = dataTimeline
          .filter((i) => i.year === years[index])
          .map((i) => i.content);

        return data;
      });
      obj[`${years[0]} ~ ${years[5]}`] = _.reverse(values);
      years.splice(0, 6);
      data.push(obj);
    }
    lenYear = years.length;
  }

  return _.reverse(data);
};
