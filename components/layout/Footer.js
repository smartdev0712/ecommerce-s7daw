import Link from "next/link";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = ({ cityInfo }) => {
  return (
    <footer className="footer-area">
      <div className="footer-image">
        <img
          src="/assets/images/flooring-banner.jpg"
          width = "100%"
          alt="footer"
        />
      </div>
      <div className="footer-main">
        <div className="footer-body row">
          <div className="body-area col-lg-9 col-sm-12 row">
            <img
              src="/assets/images/flooringmetaverselogo.png"
              alt="footer-logo"
              className="s7-image col-lg-3 col-sm-12"
            />
            <div className="body-content col-lg-9 col-sm-12 row">
              <p className="body-content-top col-md-12 col-sm-12">
                Flooring Metaverse is your source for all flooring. Find stores
                & contractors, read product & brand reviews, or learn how to
                just about any flooring job you can think of! We have it all in
                one place - the Flooring Metaverse!
              </p>
              {/* <div className="body-content-bottom col-sm-12 row">
                <p className="col-sm-6" style={{ color: "#9ea137" }}>
                  LET &apos;S KEEP IN TOUCH.
                </p>
                <div className="col-sm-6 d-flex">
                  <a href="#" className="MuiIconButtonBase MuiIconButton">
                    <MailIcon style={{ fontSize: "2.185rem" }} />
                  </a>
                  <a href="#" className="MuiIconButtonBase MuiIconButton">
                    <InstagramIcon style={{ fontSize: "2.185rem" }} />
                  </a>
                  <a href="#" className="MuiIconButtonBase MuiIconButton">
                    <FacebookIcon style={{ fontSize: "2.185rem" }} />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="footer-menu col-lg-2 col-sm-12">
            <h6 className="footer-menu-header">SITE NAVIGATION</h6>
            <p className="footer-menu-content">
              <Link href="/">
                <a className="footer-menu-item">HOME</a>
              </Link>
              <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/hardwood-floor-store`}>
                <a className="footer-menu-item">HARDWOOD</a>
              </Link>
              <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/laminate-flooring-store`}>
                <a className="footer-menu-item">LAMINATE</a>
              </Link>
              <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/vinyl-floor-store`}>
                <a className="footer-menu-item">VINYL</a>
              </Link>
              <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/tile-store`}>
                <a className="footer-menu-item">TILE</a>
              </Link>
              <Link href="/brand">
                <a className="footer-menu-item">BRANDS</a>
              </Link>
              <Link href="/blog/blog-category">
                <a className="footer-menu-item">BLOG</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>Copyright &copy; 2022. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
