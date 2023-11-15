import React from "react";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";

import { NotAuthorizationPage } from "@/modules/error/403";
import { UserState } from "@/store/auth/atom";

export default function ProtectedComponent({
  Element,
  title = "KINESS",
  url,
}: {
  Element: any;
  title?: string;
  url?: string;
}) {
  const userProfile = useRecoilValue(UserState);

  // return userProfile.user_id || url ? <Element /> : <NotAuthorizationPage />;
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | KINESS</title>
      </Helmet>
      {userProfile.user_id || url ? <Element /> : <NotAuthorizationPage />}
    </React.Fragment>
  );
}
