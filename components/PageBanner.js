import Link from "next/link";
import React from "react";

const PageBanner = ({ pageName, title, background }) => {
  return (
    <section className="hero-area">
      <div
        className="breadcrumbs-wrapper"
        style={{
          background: `url(/assets/images/${background}) no-repeat center`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="page-title">
                <h1 className="MuiTypography-root MuiTypography-h1">{title}</h1>
                {/* <ul className="breadcrumbs-link btn-root">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">{pageName ? pageName : title}</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
