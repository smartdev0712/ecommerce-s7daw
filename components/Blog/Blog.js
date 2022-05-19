import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import Link from "next/link";
import { getPagination, pagination } from "../../components/utils";
import ImageView from "../image";

const Blog = ({ articles, categories }) => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post-item", sort, active);
    let list = document.querySelectorAll(".blog-post-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <>
      {/* <Link href="/blog/add-blog">
        <a className="btn-root blog-btn wow fadeInUp">+ Add Your Blog</a>
      </Link> */}
      <section className="blog-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrapper pb-50">
                {articles.map((article, index) => {
                  return (
                    <div
                      className="blog-post-item blog-post-item-four mb-50 wow fadeInUp"
                      key={index}
                    >
                      <div className="post-thumbnail">
                        <Link href={`/blog/${article.attributes.slug}`}>
                          <a>
                            <ImageView image={article.attributes.image} />
                          </a>
                        </Link>
                      </div>
                      <div className="entry-content">
                        <a href="#" className="cat-btn">
                          <Moment format="MMM Do YYYY">
                            {article.attributes.createdAt}
                          </Moment>
                        </a>
                        <div className="post-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-bookmark-alt" />
                                <a href="#">
                                  {
                                    article.attributes.category.data.attributes.name
                                  }
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
                                <a href="#">By {article.attributes.writer.data.attributes.name}</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h3 className="title">
                          <Link href={`/blog/${article.attributes.slug}`}>
                            <a>{article.attributes.title}</a>
                          </Link>
                        </h3>
                        <p>{article.attributes.description}</p>
                        <a href={`/blog/${article.attributes.slug}`} className="btn-link">
                          Continue Reading
                        </a>
                      </div>
                    </div>
                  );
                })}
                <div className="fioxen-pagination text-center wow fadeInUp">
                  <ul className="pagination-list">
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(active === 1 ? 1 : active - 1);
                        }}
                      >
                        <i className="ti-arrow-left" />
                      </a>
                    </li>
                    {state &&
                      state.map((s, i) => (
                        <li key={i}>
                          <a
                            className={` ${active === s ? "active" : ""}`}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(s);
                            }}
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(
                            active === state.length ? state.length : active + 1
                          );
                        }}
                      >
                        <i className="ti-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area mb-20">
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
                        Hardwood <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Laminate <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Vinyl <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tile <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Carpet <span>(07)</span>
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
                          <Link href="#">
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
                          <Link href="#">
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
                          <a href="#">02 Oct - 2021</a>
                        </span>
                        <h6>
                          <Link href="#">
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
    </>
  );
};

export default Blog;
