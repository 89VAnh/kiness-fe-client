import { MenuItemType } from "antd/es/menu/hooks/useItems";

export const getLabelMenu = (
  menu: MenuItemType[],
  key: string,
  level = 2,
): string => {
  const listKeys = key.split("/");
  const newKey = [...Array(level)].map((_, i) => listKeys[i + 1]).join("/");

  return (
    menu?.find((item) => item.key?.toString().includes(newKey))?.label + "" ||
    ""
  );
};
