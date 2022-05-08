import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPagination, pagination } from "../../components/utils";

const Blog = () => {
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
      <Link href="/blog/add-blog">
        <a className="btn-root blog-btn wow fadeInUp">+ Add Your Blog</a>
      </Link>
      <section className="blog-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrapper pb-50">
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog/blog-post">
                      <a>
                        <img
                          src="/assets/images/blog/blog-standard-1.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
                    <a href="#" className="cat-btn">
                      02 Sep - 2021
                    </a>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Tours &amp; Travel</a>
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
                            <a href="#">By admin</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link href="/blog/blog-post">
                        <a>Duis nonumer socios gem mattis</a>
                      </Link>
                    </h3>
                    <p>
                      Penatibus cursus Luctus taciti nibh congue sollicitudin
                      placerat an tempus turpis magnis tempus inte vivamus
                      rhoncus roin habitasse diam
                    </p>
                    <a href="#" className="btn-link">
                      Continue Reading
                    </a>
                  </div>
                </div>
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog/blog-post">
                      <a>
                        <img
                          src="/assets/images/blog/blog-standard-2.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
                    <a href="#" className="cat-btn">
                      03 Sep - 2021
                    </a>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Tours &amp; Travel</a>
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
                            <a href="#">By admin</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link href="/blog/blog-post">
                        <a>Duis nonumer socios gem mattis</a>
                      </Link>
                    </h3>
                    <p>
                      Penatibus cursus Luctus taciti nibh congue sollicitudin
                      placerat an tempus turpis magnis tempus inte vivamus
                      rhoncus roin habitasse diam
                    </p>
                    <a href="#" className="btn-link">
                      Continue Reading
                    </a>
                  </div>
                </div>
                <div className="blog-post-item blog-post-item-four mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog/blog-post">
                      <a>
                        <img
                          src="/assets/images/blog/blog-standard-3.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="entry-content">
                    <a href="#" className="cat-btn">
                      04 Sep - 2021
                    </a>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Tours &amp; Travel</a>
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
                            <a href="#">By admin</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link href="/blog/blog-post">
                        <a>Duis nonumer socios gem mattis</a>
                      </Link>
                    </h3>
                    <p>
                      Penatibus cursus Luctus taciti nibh congue sollicitudin
                      placerat an tempus turpis magnis tempus inte vivamus
                      rhoncus roin habitasse diam
                    </p>
                    <a href="#" className="btn-link">
                      Continue Reading
                    </a>
                  </div>
                </div>
                <div
                  className="blog-post-item blog-post-item-four blog-post-with-bg mb-50 bg_cover wow fadeInUp"
                  style={{
                    backgroundImage:
                      "url(/assets/images/blog/blog-standard-4.jpg)",
                  }}
                >
                  <div className="entry-content">
                    <a href="#" className="cat-btn">
                      05 Sep - 2021
                    </a>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Tours &amp; Travel</a>
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
                            <a href="#">By admin</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <a href="#">Duis nonumer socios gem mattis</a>
                    </h3>
                    <p>
                      Penatibus cursus Luctus taciti nibh congue sollicitudin
                      placerat an tempus turpis magnis tempus inte vivamus
                      rhoncus roin habitasse diam
                    </p>
                    <a href="#" className="btn-link">
                      Continue Reading
                    </a>
                  </div>
                </div>
                <div className="blog-post-item blog-post-item-four blog-post-video mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Link href="/blog/blog-post">
                      <a>
                        <img
                          src="/assets/images/blog/blog-standard-5.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </Link>
                    <div className="play-content play-content-two text-center">
                      <a
                        href="#"
                        className="video-popup"
                        onClick={(e) => {
                          e.preventDefault();
                          setVideo(true);
                        }}
                      >
                        <i className="flaticon-play-button" />
                      </a>
                      <h5>Play Video</h5>
                    </div>
                  </div>
                  <div className="entry-content">
                    <a href="#" className="cat-btn">
                      06 Sep - 2021
                    </a>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-bookmark-alt" />
                            <a href="#">Tours &amp; Travel</a>
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
                            <a href="#">By admin</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link href="/blog/blog-post">
                        <a>Duis nonumer socios gem mattis</a>
                      </Link>
                    </h3>
                    <p>
                      Penatibus cursus Luctus taciti nibh congue sollicitudin
                      placerat an tempus turpis magnis tempus inte vivamus
                      rhoncus roin habitasse diam
                    </p>
                    <a href="#" className="btn-link">
                      Continue Reading
                    </a>
                  </div>
                </div>
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
                          <a href="#">02 Oct - 2021</a>
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
    </>
  );
};

export default Blog;
