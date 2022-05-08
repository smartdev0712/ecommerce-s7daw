import Link from "next/link";
import React from "react";

const ProductComponent = () => {
  return (
    <>
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
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Hand Dumbell</a>
                      </Link>
                    </h3>
                    <span className="price">
                      $250 <span className="pre-price">$270</span>
                    </span>
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
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Green Plastic Light</a>
                      </Link>
                    </h3>
                    <span className="price">$120.00</span>
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
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Leaser Photography</a>
                      </Link>
                    </h3>
                    <span className="price">$320.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="/assets/images/products/products-4.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="/assets/images/products/products-4.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Nike Sports Shoe</a>
                      </Link>
                    </h3>
                    <span className="price">$232.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="/assets/images/products/products-5.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="/assets/images/products/products-5.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Room Decorator</a>
                      </Link>
                    </h3>
                    <span className="price">$320.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="/assets/images/products/products-6.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="/assets/images/products/products-6.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Card Showcase</a>
                      </Link>
                    </h3>
                    <span className="price">$852.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="/assets/images/products/products-7.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="/assets/images/products/products-7.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Hand Watch</a>
                      </Link>
                    </h3>
                    <span className="price">$25.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="/assets/images/products/products-8.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="/assets/images/products/products-8.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Realstic Dumbell</a>
                      </Link>
                    </h3>
                    <span className="price">$50.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="products-item products-item-one mb-25 wow fadeInUp">
                  <div className="product-img">
                    <img
                      src="/assets/images/products/products-9.jpg"
                      alt="products Image"
                    />
                    <div className="product-overlay d-flex align-items-end justify-content-center">
                      <div className="product-meta">
                        <a
                          href="/assets/images/products/products-9.jpg"
                          className="icon img-popup"
                        >
                          <i className="ti-zoom-in" />
                        </a>
                        <a href="#" className="icon cart-btn">
                          <i className="ti-shopping-cart" />
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
                        <a>Hand Speaker</a>
                      </Link>
                    </h3>
                    <span className="price">$250.00</span>
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
    </>
  );
};
export default ProductComponent;
