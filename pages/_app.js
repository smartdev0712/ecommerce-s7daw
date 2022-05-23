import Head from "next/head";
import App from "next/app";
import React, { Fragment, useEffect, useState } from "react";
import { CookiesProvider } from "react-cookie";
import PreLoader from "../components/PreLoader";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import "../styles/global.css";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (
    <Fragment>
      <Head>
        <title>
          Find Flooring Stores & Contractors Near You | Flooring Metaverse
        </title>
        {/* <link
          rel="shortcut icon"
          href="/assets/images/favicon.ico"
          type="image/png"
        /> */}
        <link 
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      {/* {loader && <PreLoader />} */}
      <GlobalContext.Provider value={global.attributes}>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </GlobalContext.Provider>
    </Fragment>
  );
};

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
