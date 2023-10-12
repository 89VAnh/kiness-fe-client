import { Menu } from "antd";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import top_menu_bg from "@/assets/img/about-top_menu.png";

import Hero from "./hero/Hero";
import styles from "./scss/sidebar.module.scss";

type MenuItem = {
  key: string;
  label: string;
  url: string;
};

interface Props {
  children: ReactNode;
  items: MenuItem[];
}

export default function Sidebar({ children, items = [] }: Props) {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(() => {
    return items.find((i) => location.pathname === i.url)?.key || "0";
  });

  return (
    <div>
      <Hero />
      <div className={styles.container}>
        <div className={styles.left_menu}>
          <div
            className={styles.top_menu}
            style={{ backgroundImage: `url(${top_menu_bg})` }}
          >
            {items?.find((item) => item?.key === selectedMenu)?.label}
          </div>
          <Menu
            defaultSelectedKeys={[selectedMenu]}
            className={styles.menu}
            onSelect={({ key }) => setSelectedMenu(key)}
          >
            {items?.map((x) => (
              <Menu.Item
                key={x?.key}
                style={{ whiteSpace: "normal", height: "auto" }}
                className={styles.menu_item}
              >
                <Link to={x?.url}>{x?.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </div>
  );
}
