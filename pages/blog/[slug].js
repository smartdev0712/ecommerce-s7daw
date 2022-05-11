import Link from "next/link";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import React from "react";

import Layout from "../../components/layout/Layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const BlogDetails = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <div className="home-header">
        <img
          src="/assets/images/flooring-banner.jpg"
          width="100%"
          style={{ height: "100%" }}
          alt="home-header"
        />
        <div className="home-header-content">
          <div className="home-header-body">
            <h1
              style={{ width: "80%" }}
              className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft"
            >
              Our Blogs
            </h1>
          </div>
        </div>
      </div>
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <img src={imageUrl} alt="Blog Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">
                              {article.attributes.category.data.attributes.name}
                            </a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-comments-smiley" />
                            <a href="#">0 Comment</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-id-badge" />
                            <a href="#">
                              By{" "}
                              {article.attributes.author.data.attributes.name}
                            </a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-calendar" />
                            <a href="#">
                              <Moment format="MMM Do YYYY">
                                {article.attributes.published_at}
                              </Moment>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">{article.attributes.title}</h3>
                    <p>
                      <ReactMarkdown>
                        {article.attributes.content}
                      </ReactMarkdown>
                    </p>
                    <div
                      className="uk-grid-small uk-flex-left"
                      data-uk-grid="true"
                    >
                      <div>
                        {article.attributes.author.data.attributes.picture && (
                          <img
                            src={getStrapiMedia(
                              article.attributes.author.data.attributes.picture
                            )}
                            alt={
                              article.attributes.author.data.attributes.picture
                                .data.attributes.alternativeText
                            }
                            style={{
                              position: "static",
                              borderRadius: "20%",
                              height: 60,
                            }}
                          />
                        )}
                      </div>
                      <div className="uk-width-expand">
                        <p className="uk-margin-remove-bottom">
                          By {article.attributes.author.data.attributes.name}
                        </p>
                        <p className="uk-text-meta uk-margin-remove-top">
                          <Moment format="MMM Do YYYY">
                            {article.attributes.published_at}
                          </Moment>
                        </p>
                      </div>
                    </div>
                    <div className="post-tag">
                      {categories.data.map((category, index) => {
                        return (
                          <a key={index} href="#">
                            {category.attributes.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="post-navigation">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="prev-post post-nav-item">
                        <Link href="/blog/blog-post">
                          <a className="btn-link">Previous Post</a>
                        </Link>
                        <h5>
                          <Link href="/blog/blog-post">
                            <a>Felis feugiat tellus puruse dui lectus nisi</a>
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="next-post post-nav-item">
                        <Link href="/blog/blog-post">
                          <a className="btn-link">Next Post</a>
                        </Link>
                        <h5>
                          <Link href="/blog/blog-post">
                            <a>dapibus luctus do gravida feugiat fermtum</a>
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h4 className="comments-title mb-35">Comment (2)</h4>
                  <ul className="comments-list">
                    <li className="comment">
                      <div className="comment-avatar">
                        <img
                          src="/assets/images/blog/comment-avatar-1.jpg"
                          alt="comment author one"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Moriana Steve
                            <span className="date">Sep 02, 2021</span>
                          </span>
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum verra cubilia ipsum
                            duis amet nullam sit ut ornare mattis urna.{" "}
                          </p>
                          <a href="#comment-respond" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment">
                      <div className="comment-avatar">
                        <img
                          src="/assets/images/blog/comment-avatar-2.jpg"
                          alt="comment author two"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Richard Coleum
                            <span className="date">Sep 02, 2021</span>
                          </span>
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum verra cubilia ipsum
                            duis amet nullam sit ut ornare mattis urna.{" "}
                          </p>
                          <a href="#comment-respond" className="reply">
                            <i className="ti-share-alt" /> Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comments-respond">
                  <h4 className="comments-heading mb-20">Write a Review</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            name="message"
                            placeholder="Write Message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Type your email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_checkbox">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check1"
                              name="checkbox"
                              defaultChecked=""
                            />
                            <label htmlFor="check1">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search..."
                        name="email"
                        required=""
                      />
                      <i className="ti-location-arrow" />
                    </div>
                  </form>
                </div>
                <div className="widget categories-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-nav">
                    <li>
                      <a href="#">
                        Restaurant <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Museums <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tour &amp; Travel <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Uncategory <span>(03)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget recent-post-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Post</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="/assets/images/elements/thumb-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">02 Sep - 2021</a>
                        </span>
                        <h6>
                          <Link href="/blog/blog-post">
                            <a>Inceptos pharetra accusan tusto scelerisque</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="/assets/images/elements/thumb-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">02 Sep - 2021</a>
                        </span>
                        <h6>
                          <Link href="/blog/blog-post">
                            <a>Inceptos pharetra accusan tusto scelerisque</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="/assets/images/elements/thumb-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <i className="ti-calendar" />
                          <a href="#">02 Sep - 2021</a>
                        </span>
                        <h6>
                          <Link href="/blog/blog-post">
                            <a>Inceptos pharetra accusan tusto scelerisque</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget add-widget mb-30 wow fadeInUp">
                  <div className="add-img-box">
                    <img
                      src="/assets/images/elements/add-1.jpg"
                      alt="Add Image"
                    />
                  </div>
                </div>
                <div className="widget tag-cloud-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Popular Tag</h4>
                  <a href="#">Decor</a>
                  <a href="#">Love</a>
                  <a href="#">Trendy</a>
                  <a href="#">Interior</a>
                  <a href="#">Architect</a>
                  <a href="#">Feature</a>
                  <a href="#">Modern</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });

  const categories = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categories },
    revalidate: 1,
  };
}
export default BlogDetails;
