export const faqDropdown = [
  {
    label: "Tất cả",
    value: "",
  },
  {
    label: "Kiness",
    value: 1,
  },
  {
    label: "Ý thức về tăng trưởng",
    value: 2,
  },
  {
    label: "Dinh dưỡng",
    value: 3,
  },
  {
    label: "Thể thao",
    value: 4,
  },
];

const listFaq = faqDropdown.slice(1, faqDropdown.length);

export const dataFaq = [...Array(50)].map((_, index) => {
  const randomIndex = Math.floor(Math.random() * listFaq.length);
  const type = listFaq[randomIndex];
  return {
    id: index + 1,
    type_name: type?.label,
    type_id: type.value,
    title:
      "Có phải ăn nhiều đậu, đậu phụ có thể gây dậy thì sớm? Vậy hầm tương đậu nành có hiệu quả không?",
    answer: `Người ta nói rằng các thành phần trong thực phẩm làm từ đậu nành thúc đẩy quá trình tiết ra nội tiết tố nữ, nhưng điều đó không thành vấn đề miễn là trẻ chỉ ăn thực phẩm làm từ đậu nành. Đúng hơn, đậu chứa nhiều chất dinh dưỡng tốt cho việc tăng trưởng chiều cao.`,
  };
});
