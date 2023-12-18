import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function ProtectedComponent({
  Element,
  title = "KINESS",
}: {
  Element: any;
  title?: string;
  url?: string;
}) {
  // return userProfile.user_id || url ? <Element /> : <NotAuthorizationPage />;
  const onNavigate = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | KINESS</title>
      </Helmet>
      <Element />
    </React.Fragment>
  );
}
