import React, { ComponentType, useEffect, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { theme } from "../styles/theme";
import Loading from "../components/loading";

import Router from "next/router";
import NProgress from "nprogress";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type NextPageWithLayout = NextPage & {
  Layout?: ComponentType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  err?: Error;
};

type EmptyLayoutProps = {
  children: React.ReactNode;
};

const EmptyLayout = ({ children }: EmptyLayoutProps) => <>{children}</>;

function MyApp({ Component, pageProps, err }: AppPropsWithLayout) {
  const ComponentLayout = Component.Layout ? Component.Layout : React.Fragment;

  const [loadingPortal, setLoadingPortal] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPortal(false);
    }, 3000);
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loadingPortal ? (
        <Loading />
      ) : (
        <ComponentLayout>
          <Component {...pageProps} />
        </ComponentLayout>
      )}
      {!loadingPortal && <GlobalStyles />}
    </ThemeProvider>
  );
}

export default MyApp;
