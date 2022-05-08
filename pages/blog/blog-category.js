import React from "react";
import Layout from "../../components/layout/Layout";
import Blog from "../../components/Blog/Blog";

const blog = () => {
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
            <h1 style={{width: "80%"}} className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft">
              Our Blogs
            </h1>
          </div>
        </div>
      </div>
      <Blog />
    </Layout>
  );
};
export default blog;
