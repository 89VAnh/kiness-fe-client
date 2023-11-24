import React from "react";
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
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | KINESS</title>
      </Helmet>
      <Element />
    </React.Fragment>
  );
}
