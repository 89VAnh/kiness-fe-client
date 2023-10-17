import { Avatar, Dropdown, Space, Typography } from "antd";
import { MenuProps } from "antd/lib";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";

import avatar from "@/assets/img/others/default-avatar.png";
import { LOCAL_USER } from "@/constant/config";
import { authorization } from "@/services/user.service";
import { UserState } from "@/store/auth/atom";
import { LOGIN_URL } from "@/urls";
import { handleLogout } from "@/utils/auth";
import { storageService } from "@/utils/storage";

import styles from "../scss/header.module.scss";

export default function UserDropdown(): JSX.Element {
  const { t } = useTranslation();
  const [userProfile, setUserProfile] = useRecoilState(UserState);
  const resetUserProfile = useResetRecoilState(UserState);

  useEffect(() => {
    (async () => {
      const userLocal = storageService.getStorage(LOCAL_USER);
      if (!userLocal.user_id) {
        resetUserProfile();
        return;
      }
      const user = await authorization();
      if (user) setUserProfile(userLocal);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items: MenuProps["items"] = [
    {
      label: <Typography.Link>{t("user.profile")}</Typography.Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Typography.Text onClick={handleLogout}>
          {t("user.logout")}
        </Typography.Text>
      ),
      key: "3",
    },
  ];

  return (
    <>
      {userProfile.user_id ? (
        <Link
          to={"/"}
          onClick={(e) => e.preventDefault()}
          className={styles.linkItem}
        >
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["hover"]}
          >
            <Space>
              <Avatar src={avatar} alt="avatar" />
              <Typography.Text style={{ color: "#fff" }}>
                {userProfile.full_name || userProfile.user_name}
              </Typography.Text>
            </Space>
          </Dropdown>
        </Link>
      ) : (
        <Link to={LOGIN_URL} className={styles.linkItem}>
          {t("user.login")}
        </Link>
      )}
    </>
  );
}
