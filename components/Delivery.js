import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toCamelCase } from "./utils";
import Title from "./layout/Title";
import PageBanner from "./layout/PageBanner";

const Delivery = () => {
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    const url = document.location.toString().split("/");
    console.log(url);
    let state = url[url.length - 3];
    if (state.includes("%")) {
      let stateItems = state.split("%20");
      state = toCamelCase(stateItems[0]) + " " + toCamelCase(stateItems[1]);
      console.log(state);
      setState(state);
    } else {
      setState(toCamelCase(state));
    }
    setLocation(toCamelCase(url[url.length - 2]));
  });
  return (
    <>
      <PageBanner />
      <Title />
      <div className="delivery-container container-fluid">
        <h4 className="m-4">
          Showing Result for{" "}
          <strong style={{ color: "green" }}>
            {location}, {state}
          </strong>
        </h4>
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
                  <span className="delivery-cat">PLATINUM </span>&nbsp;
                  <span className="delivery-text"> DELIVERY SERVICES</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-1.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-1.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>FullFlower</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-2.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-2.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>Happy N Friendz</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-3.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-3.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>United By Nature</a>
                    </Link>
                  </h3>
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
                  <span className="delivery-cat">MOST </span>&nbsp;
                  <span className="delivery-text">POPULAR DELIVERIES</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-1.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-1.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>FullFlower</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-2.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-2.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>Happy N Friendz</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-3.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-3.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>United By Nature</a>
                    </Link>
                  </h3>
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
                  <span className="delivery-cat">TOP </span>&nbsp;
                  <span className="delivery-text">
                    RATED CANNABIS DELIVERY BRANDS
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-1.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-1.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>FullFlower</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-2.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-2.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>Happy N Friendz</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-3.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-3.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>United By Nature</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="delivery-body">
          <div className="delivery-content">
            <div className="delivery-header">
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <h2 className="MuiTypography-root MuiTypography-h2">
                  <span className="delivery-cat">ALL LOCAL DELIVERIES</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-1.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-1.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>FullFlower</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-2.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-2.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>Happy N Friendz</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="products-item products-item-one mb-25 wow fadeInUp">
                <div className="product-img">
                  <img
                    src="/assets/images/products/products-3.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="/assets/images/products/products-3.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products/products-details">
                      <a>United By Nature</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
