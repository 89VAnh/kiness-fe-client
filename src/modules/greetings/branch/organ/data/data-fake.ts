export const dataOrgan = [
  {
    id: 1,
    parent_id: null,
    name: "Trụ sở chính",
  },
  {
    id: 2,
    parent_id: 1,
    name: "Kinh doanh mới",
  },
  {
    id: 3,
    parent_id: 1,
    name: "Trụ sở quản lý",
  },
  {
    id: 4,
    parent_id: 1,
    name: "Trụ sở kế hoạch",
  },
  {
    id: 5,
    parent_id: 1,
    name: "Trụ sở dịch vụ",
  },

  {
    id: 6,
    parent_id: 3,
    name: "Công việc chung",
  },
  {
    id: 7,
    parent_id: 6,
    name: "Tài chính",
  },
  {
    id: 8,
    parent_id: 7,
    name: "Kế toán",
  },

  {
    id: 9,
    parent_id: 4,
    name: "Kế hoạch",
  },
  {
    id: 10,
    parent_id: 9,
    name: "Thiết kế",
  },
  {
    id: 11,
    parent_id: 10,
    name: "Tiếp thị",
  },

  {
    id: 12,
    parent_id: 5,
    name: "Quản lý tổ chức",
  },
  {
    id: 13,
    parent_id: 12,
    name: "Giáo dục",
  },
  {
    id: 14,
    parent_id: 13,
    name: "C/S",
  },
];

export const getOrganTree = (data: any[]) => {
  const tree: any = [];

  if (!data || data?.length === 0) return;

  data.forEach((node) => {
    const item = {
      ...node,
      id: node.key,
      value: { name: node.title },
      children: getOrganTree(node.children),
    };

    tree.push(item);
  });

  return tree;
};
