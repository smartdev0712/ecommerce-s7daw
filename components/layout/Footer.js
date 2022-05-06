import Link from "next/link";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-image">
        <img src="/assets/images/appBannerMobile.c0cfb55b.png" style={{width:"100%", height:"auto"}} alt="footer" />
        <div className="appStore">
          <a
            href="https://apps.apple.com/ca/app/s7daw/id1533319065?itsct=apps_box&itscg=30200"
            className="MuiIconButtonBase"
          >
            <img
              src="/assets/images/iosStoreBadge.4b4d40d7.svg"
              alt="play-store"
              className="storeImage"
            ></img>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.s7daw.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            className="MuiIconButtonBase"
          >
            <img
              src="/assets/images/playStoreBadge.6c6cf47a.svg"
              alt="ios-store"
              className="storeImage"
            ></img>
          </a>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-body row">
          <div className="body-area col-lg-9 col-sm-12 row">
            <img
              src="/assets/images/logoFooter.b56fa9b9.svg"
              alt="sdaw-footer-logo"
              className="s7-image col-lg-3 col-sm-12 d-flex align-items-center justify-content-center"
            />
            <div className="body-content col-lg-9 col-sm-12 row">
              <p className="body-content-top col-md-12 col-sm-12">
                Seven Days A Weed (S7DAW) is your one-stop hub to discover
                cannabis across Canada. We connect recreational and medical
                cannabis users with the best weed dispensaries, weed deals,
                brands, products, and information.
              </p>
              <div className="body-content-bottom col-sm-12">
                  <p style={{ color: "#9ea137" }}>LET &apos;S KEEP IN TOUCH.</p>
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
            </div>
          </div>
          <div className="footer-menu col-lg-2 col-sm-12">
            <h6 className="footer-menu-header">SITE NAVIGATION</h6>
            <p className="footer-menu-content">
              <Link href="/">
                <a className="footer-menu-item">HOME</a>
              </Link>
              <Link href="/delivery/state/location">
                <a className="footer-menu-item">DELIVERIES</a>
              </Link>
              <Link href="/listing-name">
                <a className="footer-menu-item">LISTS</a>
              </Link>
              <Link href="/brand">
                <a className="footer-menu-item">BRANDS</a>
              </Link>
              <Link href="/products/product">
                <a className="footer-menu-item">PRODUCTS</a>
              </Link>
              <Link href="/maps">
                <a className="footer-menu-item">MAPS</a>
              </Link>
              <Link href="/blog/blog-category">
                <a className="footer-menu-item">BLOGS</a>
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
                <p>Copyright &copy; 2020. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
