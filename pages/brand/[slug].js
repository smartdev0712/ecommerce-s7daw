import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Accordion, Tab, Nav } from "react-bootstrap";
import ListingDetailsRight from "../../components/ListingDetailsRight";
import Layout from "../../components/layout/Layout";
import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

const Name = ({ business }) => {
  return (
    <Layout>
      <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
        <div className="container">
          <div className="breadcrumbs-wrapper-one">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="listing-info-name">
                  <div className="info-name d-flex">
                    <div className="thumb">
                      <Image
                        src={getStrapiMedia(business.attributes.business_logo)}
                        alt="thumb image"
                        width="120px"
                        height="120px"
                      />
                    </div>
                    <div className="content">
                      <span className="cat-btn">{business.attributes.service_categories.data[0].attributes.name}</span>
                      <h3>{business.attributes.name}</h3>
                      <p className="tag">
                        <a href="#">Popular Business</a>,
                        <a href="#">{business.attributes.canada_city.data.attributes.city_ascii}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="listing-info-content">
                  <div className="content">
                    <ul className="ratings ratings-three">
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin" />
                            {business.attributes.address}
                          </span>
                        </li><br />
                        <li>
                          <span>
                            <i className="ti-tablet" />
                            <a href={`tel:${business.attributes.phone_number}`}>{business.attributes.phone_number}</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="button">
                  <Link href="">
                    <a className="icon-btn">
                      <i className="ti-heart" />
                    </a>
                  </Link>
                  <Link href="">
                    <a className="icon-btn">
                      <i className="ti-share" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Breadcrumbs section ======*/}
      {/*====== Start Listing Details section ======*/}
      <section className="listing-details-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing-details-wrapper listing-details-wrapper-one">
                <div className="listing-content mb-50 wow fadeInUp">
                  <h3 className="title">Popular Business in {business.attributes.canada_city.data.attributes.city_ascii}</h3>
                  <p>
                    {business.attributes.description}
                  </p>
                  <p className="para">
                    Eros senectus etiam sed habitasse arcu habitant nulla nam
                    amet sociis leo suspendisse in dignissim litora venenatis
                    torquent tempor dapibus ridiculus consectetuer nece sagittis{" "}
                  </p>
                </div>
                <div className="listing-features-box mb-50 wow fadeInUp">
                  <h4 className="title">Our Features</h4>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-credit-card" />
                        </div>
                        <div className="info">
                          <h6>Card Payment</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-paint-bucket" />
                        </div>
                        <div className="info">
                          <h6>Air-conditioned</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-rss-alt" />
                        </div>
                        <div className="info">
                          <h6>Wireless Internet</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-trash" />
                        </div>
                        <div className="info">
                          <h6>Serves Alcohol</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-car" />
                        </div>
                        <div className="info">
                          <h6>Parking Street</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-credit-card" />
                        </div>
                        <div className="info">
                          <h6>Outdoor Seating</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-wrapper mb-45">
                  <div className="row">
                    <div className="col-lg-12">
                      <Tab.Container defaultActiveKey={"products"}>
                        <div className="description-tabs">
                          <Nav as="ul" className="nav nav-tabs">
                            <Nav.Item as="li">
                              <Nav.Link
                                as="a"
                                href="#products"
                                eventKey="products"
                              >
                                Products
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Nav.Link
                                as="a"
                                href="#reviews"
                                eventKey="reviews"
                              >
                                Reviews
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <Tab.Content className="tab-content mt-30">
                          <Tab.Pane eventKey="products">
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                      $250{" "}
                                      <span className="pre-price">$270</span>
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                                        <a
                                          href="#"
                                          className="icon wishlist-btn"
                                        >
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
                          </Tab.Pane>
                          <Tab.Pane eventKey="reviews">
                            <div className="products-review-wrapper mb-25">
                              <div className="products-review-area mb-45">
                                <h4 className="title">Reviews</h4>
                                <ul className="review-list">
                                  <li className="review">
                                    <div className="review-thumb">
                                      <img
                                        src="/assets/images/products/review-thumb-1.jpg"
                                        alt="review thumb"
                                      />
                                    </div>
                                    <div className="review-content">
                                      <h4>John F. Medina</h4>
                                      <span className="date">25 May 2021</span>
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
                                      </ul>
                                      <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                      </p>
                                      <a href="#" className="reply">
                                        Reply
                                      </a>
                                    </div>
                                  </li>
                                  <li className="review">
                                    <div className="review-thumb">
                                      <img
                                        src="/assets/images/products/review-thumb-2.jpg"
                                        alt="review thumb"
                                      />
                                    </div>
                                    <div className="review-content">
                                      <h4>John F. Medina</h4>
                                      <span className="date">25 May 2021</span>
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
                                      </ul>
                                      <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                      </p>
                                      <a href="#" className="reply">
                                        Reply
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="products-review-form">
                                <h4 className="title">Leave Your Reviews</h4>
                                <form onSubmit={(e) => e.preventDefault()}>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form_group">
                                        <ul className="ratings mb-20">
                                          <li>
                                            <span>Your Rating</span>
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
                                          <li className="star">
                                            <i className="flaticon-star-1" />
                                          </li>
                                        </ul>
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
                                          placeholder="Email Address"
                                          name="email"
                                          required=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form_group">
                                        <textarea
                                          className="form_control"
                                          placeholder="Write Message"
                                          name="comment"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form_group">
                                        <button className="main-btn">
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ListingDetailsRight business={business} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const businessesRes = await fetchAPI("/businesses", { fields: ["slug"] });

  return {
    paths: businessesRes.data.map((business) => ({
      params: {
        slug: business.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const businessesRes = await fetchAPI("/businesses", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });

  return {
    props: { business: businessesRes.data[0] },
    revalidate: 1,
  };
}

export default Name;
