import React from "react";
import Layout from "../../components/layout/Layout";
import Blog from "../../components/Blog/Blog";
import { fetchAPI } from "../../lib/api";
import Seo from '../../components/seo'

const blog = ({ articles, categories, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <div className="home-header">
        <img
          src="/assets/images/flooring-banner.jpg"
          width="100%"
          style={{height: "100%"}}
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
      <Blog articles={articles} categories={categories} />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articleRes, categoryRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category", "author"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articleRes.data,
      categories: categoryRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default blog;
