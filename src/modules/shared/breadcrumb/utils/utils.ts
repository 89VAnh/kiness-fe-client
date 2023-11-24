import { MenuItemType } from "antd/es/menu/hooks/useItems";

import { getMenuLevel } from "../data/breadcrumb";

export const getLabelMenuByLevel = (
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

export const getLabelMenu = (key: string): string => {
  const listKeys = key.split("/");
  const level = listKeys.length - 1;
  const menu = getMenuLevel(key, level);

  const newKey = [...Array(level)].map((_, i) => listKeys[i + 1]).join("/");

  return (
    menu?.find((item) => item.key?.toString().includes(newKey))?.label + "" ||
    ""
  );
};
