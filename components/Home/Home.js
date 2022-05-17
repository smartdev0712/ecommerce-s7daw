import React from "react";
import Link from "next/link";

const HomeComponent = () => {
  return (
    <div className="delivery-container container-fluid">
      <div className="delivery-body">
        <div className="delivery-content">
          <div className="delivery-header">
            <img
              src="/assets/images/iconTopDeliveries.bba1b6f5.svg"
              alt="top-deliveries"
              width="10%"
            ></img>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <h2 className="MuiTypography-root MuiTypography-h2">
                <span className="delivery-cat">TOP </span>&nbsp;
                <span className="delivery-text">Flooring Brands</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                <ul className="ratings ratings-five">
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
                      <a href="#">(07 Reviews)</a>
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
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                <ul className="ratings ratings-five">
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
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                      <a href="#">(03 Reviews)</a>
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
      </div>
      <div className="delivery-body">
        <div className="delivery-content">
          <div className="delivery-header">
            <img
              src="/assets/images/iconPopular.8156dfc8.svg"
              alt="top-deliveries"
              width="10%"
            ></img>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <h2 className="MuiTypography-root MuiTypography-h2">
                <span className="delivery-cat">Top</span>&nbsp;
                <span className="delivery-text">
                  Services / Contractors from that location
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                      <a href="#">(05 Reviews)</a>
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
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                <ul className="ratings ratings-five">
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
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                      <a href="#">(04 Reviews)</a>
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
      </div>
      <div className="delivery-body">
        <div className="delivery-content">
          <div className="delivery-header">
            <img
              src="/assets/images/iconTopDeliveries.bba1b6f5.svg"
              alt="top-deliveries"
              width="10%"
            ></img>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <h2 className="MuiTypography-root MuiTypography-h2">
                <span className="delivery-cat">Everything </span>&nbsp;
                <span className="delivery-text">
                  you need for your floors and more
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
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
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                      <a href="#">(04 Reviews)</a>
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
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                <ul className="ratings ratings-five">
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
                      <a href="#">(07 Reviews)</a>
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
      </div>
    </div>
  );
};

export default HomeComponent;
