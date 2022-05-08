import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Counter from "../components/Counter";
import Layout from "../components/layout/Layout";
import HomeComponent from "../components/Home/Home";

const Index = () => {
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
            <h1 style={{width: "70%"}} className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft">
              Find Flooring Stores & Contractors Near You
            </h1>
            {/* <Link href="/products/product">
              <a className="btn-root see-store">
                <span className="MuiIconButton-label">
                  <p className="MuiTypography-root MuiTypography-body1">
                    See STORES
                  </p>
                </span>
              </a>
            </Link> */}
          </div>
        </div>
      </div>
      <HomeComponent />
    </Layout>
  );
};

export default Index;
