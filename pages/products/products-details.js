import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../../components/layout/PageBanner";
import ProductSlider from "../../components/ProductSlider";
import Layout from "../../components/layout/Layout";
import { reletedProductSlider } from "../../components/sliderProps";

const ProductDetails = () => {
  return (
    <Layout>
      <PageBanner
        title={"Shop Single"}
      />
      <section className="product-details-section pt-120 pb-115">
        <div className="container">
          <div className="product-details-wrapper mb-30">
            <div className="row">
              <ProductSlider />
              <div className="col-lg-4 col-md-12">
                <div className="product-info mt-30">
                  <ul className="ratings ratings-three">
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
                      <span>(3 Review)</span>
                    </li>
                  </ul>
                  <h3 className="title">Green Energy Saving Light</h3>
                  <span className="price">$25.50</span>
                  <p>
                    Fringilla commodo veli taciti porttitor sempe ma aliquet.
                    Scelerisque montes laoreet aptent socios donec duis donec
                    egestas tempus facilisis congu pretium pellentesque posuere
                    a tempus vele felis nulla posuere eros ultrices non interdum
                    elit prae sent tinc tristique senectus
                  </p>
                  <div className="quantity-cart mb-25">
                    <div className="quantity-input">
                      <div className="quantity-down" id="quantityDown">
                        <i className="ti-minus" />
                      </div>
                      <input
                        id="quantity"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                      />
                      <div className="quantity-up" id="quantityUP">
                        <i className="ti-plus" />
                      </div>
                    </div>
                    <div className="cart-button">
                      <a href="#" className="main-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="product-meta">
                    <a href="#" className="wishlist-btn">
                      Add to Wishlist
                    </a>
                    <span className="variation">
                      <span className="title">Color:</span>
                      <span className="color color-1" />
                      <span className="color color-2" />
                      <span className="color color-3" />
                      <span className="color color-4" />
                    </span>
                    <span className="category">
                      <span className="title">Category:</span>
                      <a href="#">Light</a>,<a href="#">Titan</a>,
                      <a href="#">Plastic</a>
                    </span>
                    <span className="tags">
                      <span className="title">Tags:</span>
                      <a href="#">elcctric</a>,<a href="#">modern</a>,
                      <a href="#">lase</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-wrapper mb-45">
            <div className="row">
              <div className="col-lg-12">
                <Tab.Container defaultActiveKey={"description"}>
                  <div className="description-tabs">
                    <Nav as="ul" className="nav nav-tabs">
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          href="#description"
                          eventKey="description"
                        >
                          Description
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" href="#reviews" eventKey="reviews">
                          Reviews
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="tab-content mt-30">
                    <Tab.Pane eventKey="description">
                      <div className="description-content-box">
                        <p>
                          Elluse cum orci ultricies turpis nostra ate nunc fames
                          faucibus maecenas blandit habitasse sapien odio
                          elementum etiam tellus feugiat lacinia eget Rhoncus
                          vivamus, netus enim nam. Molestie vehicula class ete
                          enenatis per sociosqu nascetur imperdiet pede amet
                          metus quisque nibh inceptos. In. class magna cond
                          imentum nec. Phasellus consectetuer leo cubilia
                          gravida maecenas. Tempus integer nulla libero euismod
                          arcu. At excelle ridiculus accumsan massa imperdiet
                          vivamus varius nostra nisi nam. Fermentum magnis id
                          leo varius orci, aptent quam parturient tristique
                          commodo porttitor. Curae fermentum nunc penatibus
                          tempor iaculis pulvinar sapien condimentum sociis in
                          velit Fusce aliquet cubilia felis.
                        </p>
                        <p>
                          Eros sodales quis euismod nulla dis facilisis pede
                          posuere ridiculus quisque mattis donec penatibus
                          cubilia aptent est Vestibulum eto torquent posuere
                          lectus lobortis ac pharetra erat quisque tempor
                          euismod semper posuere sodales litora rhoncus Donec
                          ultricies metus elit potenti metus consectetuer. Ace
                          necesity lobortis convallis taciti cubilia ute mauris
                          potenti semper sodales sed iaculis nec imperdiet
                          vivamus.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                      <div className="products-review-wrapper mb-25">
                        <div className="products-review-area mb-45">
                          <h4 className="title">People Reviews</h4>
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
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
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
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
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
                                  <button className="main-btn">Submit</button>
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
          <div className="releted-product-area">
            <h3 className="releted-title">Related Product</h3>
            <Slider
              {...reletedProductSlider}
              className="releted-products-slider-one"
            >
              <div className="products-item products-item-one">
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
                    <Link href="/products-details">
                      <a>Hand Dumbell</a>
                    </Link>
                  </h3>
                  <span className="price">
                    $250 <span className="pre-price">$270</span>
                  </span>
                </div>
              </div>
              <div className="products-item products-item-one">
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
                    <Link href="/products-details">
                      <a>Green Plastic Light</a>
                    </Link>
                  </h3>
                  <span className="price">$120.00</span>
                </div>
              </div>
              <div className="products-item products-item-one">
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
                    <Link href="/products-details">
                      <a>Leaser Photography</a>
                    </Link>
                  </h3>
                  <span className="price">$320.00</span>
                </div>
              </div>
              <div className="products-item products-item-one">
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
                    <Link href="/products-details">
                      <a>Nike Sports Shoe</a>
                    </Link>
                  </h3>
                  <span className="price">$232.00</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
