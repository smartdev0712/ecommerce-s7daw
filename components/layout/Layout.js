import React, { Fragment, useEffect } from "react";
import ImageView from "../ImageView";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import { activeNavMenu, animation, niceSelect, stickyNav } from "../utils";

const Layout = ({ children, category }) => {
  useEffect(() => {
    animation();
    // niceSelect();
    activeNavMenu();
    window.addEventListener("scroll", stickyNav);
  }, []);
  return (
    <Fragment>
      <ImageView />
      <MobileMenu category={category} />
      <Header category={category} />
      {children} <Footer />
    </Fragment>
  );
};
export default Layout;
