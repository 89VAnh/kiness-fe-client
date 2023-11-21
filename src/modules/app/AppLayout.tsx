import { ProLayout, ProLayoutProps } from "@ant-design/pro-components";
import { Image } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

import Logo from "@/assets/img/logo/logo.png";
import "@/assets/scss/index.scss";
import { HOME_URL } from "@/urls";

import { appRoute } from "./AppRouter";

interface Props {
  children?: React.ReactNode;
}

const settings: ProLayoutProps = {
  fixSiderbar: true,
  fixedHeader: true,
  layout: "top",
  splitMenus: true,
};
export default function AppLayout({ children }: Props): JSX.Element {
  const location = useLocation();

  return (
    <ProLayout
      location={location}
      logo={<Image className="logo" preview={false} src={Logo} />}
      title={""}
      route={appRoute()}
      headerTitleRender={(_, __, ___) => (
        <Link to={HOME_URL}>
          <Image className="logo" preview={false} src={Logo} />
        </Link>
      )}
      {...settings}
    >
      <Outlet />
      {children}
    </ProLayout>
  );
}
