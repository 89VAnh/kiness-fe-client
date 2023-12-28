"use client";

import React, { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet";

import { ErrorTemp } from "../error/ErrorTemp";

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
    // if (!hasError) window.location.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | KINESS</title>
      </Helmet>
      <ErrorBoundary
        FallbackComponent={ErrorTemp}
        onReset={(detail) => {
          console.log(detail);
        }}
      >
        <Element />
      </ErrorBoundary>
    </React.Fragment>
  );
}
