import { ProLayout, ProLayoutProps } from "@ant-design/pro-components";
import { Image, Typography } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

import Logo from "@/assets/img/logo/logo.png";
import "@/assets/scss/index.scss";
import { HOME_URL } from "@/urls";

import ButtonNav from "../shared/button-nav/ButtonNav";
import Footer from "../shared/footer/Footer";
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
      logo={
        <Link to={HOME_URL}>
          <div className="logo-wrap">
            <Image className="logo" preview={false} src={Logo} />
            <div className="slogan-wrap">
              <Typography.Title level={4} className="slogan-head">
                KINESS VIỆT NAM
              </Typography.Title>
              <div className="slogan-bot">
                <Typography.Text strong className="slogan">
                  Cao Vô Tận
                </Typography.Text>
                <span className="slogan-point"></span>
                <Typography.Text strong className="slogan">
                  Trí Vô Song
                </Typography.Text>
              </div>
            </div>
          </div>
        </Link>
      }
      title={""}
      route={appRoute()}
      headerTitleRender={(_, __, ___) => (
        <Link to={HOME_URL}>
          <div className="logo-wrap">
            <Image className="logo" preview={false} src={Logo} />
            <div className="slogan-wrap">
              <Typography.Title level={4} className="slogan-head">
                KINESS VIỆT NAM
              </Typography.Title>
              <div className="slogan-bot">
                <Typography.Text strong className="slogan">
                  Cao Vô Tận
                </Typography.Text>
                <span className="slogan-point"></span>
                <Typography.Text strong className="slogan">
                  Trí Vô Song
                </Typography.Text>
              </div>
            </div>
          </div>
        </Link>
      )}
      {...settings}
      footerRender={Footer}
    >
      <Outlet />
      {children}

      {/* <Footer /> */}
      <ButtonNav />
    </ProLayout>
  );
}
