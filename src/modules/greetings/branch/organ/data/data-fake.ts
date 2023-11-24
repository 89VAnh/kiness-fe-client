export const dataOrgan = [
  {
    id: 1,
    parent_id: null,
    name: "Trụ sở chính",
  },
  {
    id: 17,
    parent_id: null,
    name: "Trụ sở chínhgg",
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
    parent_id: 3,
    name: "Tài chính",
  },
  {
    id: 8,
    parent_id: 3,
    name: "Kế toán",
  },

  {
    id: 9,
    parent_id: 4,
    name: "Kế hoạch",
  },
  {
    id: 10,
    parent_id: 4,
    name: "Thiết kế",
  },
  {
    id: 11,
    parent_id: 4,
    name: "Tiếp thị",
  },

  {
    id: 12,
    parent_id: 5,
    name: "Quản lý tổ chức",
  },
  {
    id: 13,
    parent_id: 5,
    name: "Giáo dục",
  },
  {
    id: 14,
    parent_id: 5,
    name: "C/S",
  },
];

export const getOrganTree = (data: any[]) => {
  const tree: any = [];
  const index: any = {};

  // Create an index for quick lookup
  data.forEach((item) => {
    index[item.id] = { ...item, children: [] };
  });

  // Build the tree
  data.forEach((item) => {
    if (item.parent_id !== null) {
      // If there is a parent, add the current item as a child
      index[item.parent_id].children.push(index[item.id]);
    } else {
      // If there is no parent, add the current item to the root of the tree
      tree.push(index[item.id]);
    }
  });

  return tree;
};
