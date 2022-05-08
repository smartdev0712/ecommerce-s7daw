import Link from "next/link";
import Head from "next/head";
import React from "react";

const BrandComponent = () => {
  return (
    <section className="products-area pt-120 pb-120">
      <div className="container">
        <div className="products-filter mb-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="sort-dropdown d-flex align-items-center">
                <div className="show-text">
                  <p>Showing Result 1-09</p>
                </div>
                <div className="products-dropdown">
                  <select className="wide form_control">
                    <option value="default" selected disabled>
                      Default Sorting
                    </option>
                    <option value="new">Newest Product</option>
                    <option value="old">Oldest Product</option>
                    <option value="hight-to-low">High To Low</option>
                    <option value="low-to-high">Low To High</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <ul className="list d-flex">
                <li>
                  <Link href="/products/product/#">
                    <a>
                      <i className="ti-view-grid" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/product/#">
                    <a className="active">
                      <i className="ti-view-list-alt" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="products-item-wrapper">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-24.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Pizza Recipe</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-open">Open</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-25.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Party Corner</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-close">Close</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-26.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <span className="featured-btn">Featured</span>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>City Palace</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-open">Open</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-27.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <span className="featured-btn">Featured</span>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Easter Plaza</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-open">Open</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-28.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Gym Ground</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-open">Open</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-29.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <span className="featured-btn">Featured</span>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Miyami Sea</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-close">Close</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-30.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Sky Center</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-close">Close</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-31.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Gym Ground</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-close">Close</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="listing-item listing-grid-item-two mb-30">
                <div className="listing-thumbnail">
                  <Link href="/brand/name">
                    <a>
                      <img
                        src="/assets/images/listing/listing-grid-32.jpg"
                        alt="Listing Image"
                      />
                    </a>
                  </Link>
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <span className="featured-btn">Featured</span>
                  <ul className="ratings ratings-four">
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li className="star">
                      <i className="flaticon-star-1" />
                    </li>
                    <li>
                      <span>
                        <a href="#">(02 Reviews)</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/brand/name">
                      <a>Coffee Time</a>
                    </Link>
                  </h3>
                  <p>Popular restaurant in california</p>
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+12134293454">+1 (213) 429 3454</a>
                    <span className="status st-open">Open</span>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin" />
                          California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart" />
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button text-center mt-50 wow fadeInUp">
                <Link href="#">
                  <a className="main-btn icon-btn">Load More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandComponent;
