import React from "react";
import Layout from "../components/layout/Layout";
import BrandComponent from "../components/Brand/Brand";

const Brand = () => {
  return (
    <Layout>
      <div className="home-header">
        <img
          src="/assets/images/flooring-banner.jpg"
          width="100%"
          height="100%"
          alt="home-header"
        />
        <div className="home-header-content">
          <div className="home-header-body">
            <h1
              style={{ width: "80%" }}
              className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft"
            >
              Discover Top Flooring Brands
            </h1>
          </div>
        </div>
      </div>
      <BrandComponent />
    </Layout>
  );
};

export default Brand;
