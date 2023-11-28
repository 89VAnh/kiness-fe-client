import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { HOME_URL } from "@/urls";

import { getMenuLevel, menuDefault } from "./data/breadcrumb";
import styles from "./scss/breadcrumb.module.scss";
import { getLabelMenuByLevel } from "./utils/utils";

interface Props {
  showLast?: boolean;
}

export default function Breadcrumb({ showLast = true }: Props): JSX.Element {
  const navigate = useNavigate();
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = (e: any) => {
      setIsTablet(e.target.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.selectedWrap}>
          {!isTablet && (
            <Link to={HOME_URL} className={styles.home}>
              <HomeOutlined />
            </Link>
          )}

          <Dropdown
            menu={{
              items: menuDefault,
              onClick: handleMenuClick,
            }}
          >
            <Typography.Text className={styles.titleDropdown}>
              <Space>
                {getLabelMenuByLevel(menuDefault, window.location.pathname, 1)}
                <DownOutlined />
              </Space>
            </Typography.Text>
          </Dropdown>

          <Dropdown
            menu={{
              items: getMenuLevel(window.location.pathname),
              onClick: handleMenuClick,
            }}
          >
            <Typography.Text className={styles.titleDropdown}>
              <Space>
                {getLabelMenuByLevel(
                  getMenuLevel(window.location.pathname),
                  window.location.pathname,
                )}
                <DownOutlined />
              </Space>
            </Typography.Text>
          </Dropdown>

          {getMenuLevel(window.location.pathname, 3).length > 0 && showLast && (
            <Dropdown
              menu={{
                items: getMenuLevel(window.location.pathname, 3),
                onClick: handleMenuClick,
              }}
            >
              <Typography.Text className={styles.titleDropdown}>
                <Space>
                  {getLabelMenuByLevel(
                    getMenuLevel(window.location.pathname, 3),
                    window.location.pathname,
                    3,
                  )}
                  <DownOutlined />
                </Space>
              </Typography.Text>
            </Dropdown>
          )}
        </div>
      </div>
    </section>
  );
}
