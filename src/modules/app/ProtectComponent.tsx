import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { NotAuthorizationPage } from "@/modules/error/403";
import { UserState } from "@/store/auth/atom";

export default function ProtectedComponent({
  Element,
  title = "KINESS",
}: {
  Element: any;
  title?: string;
  url?: string;
}) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const userProfile = useRecoilValue(UserState);

  return userProfile.user_id ? <Element /> : <NotAuthorizationPage />;
}
