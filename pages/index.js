import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Counter from "../components/Counter";
import Layout from "../components/layout/Layout";
import HomeComponent from "../components/Home";

const Index = () => {
  return (
    <Layout>
      <div className="home-header">
        <img
          src="/assets/images/mobilehomeHeader.bd6eadd2.webp"
          width="100%"
          height="100%"
          alt="home-header"
        />
        <div className="home-header-content">
          <div className="home-header-body">
            <h1 style={{width: "60%"}} className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft">
              FIND WEED DISPENSARIES NEAR YOU.
            </h1>
            <Link href="/products/product">
              <a className="btn-root see-store">
                <span className="MuiIconButton-label">
                  <p className="MuiTypography-root MuiTypography-body1">
                    See STORES
                  </p>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <HomeComponent />
    </Layout>
  );
};

export default Index;
