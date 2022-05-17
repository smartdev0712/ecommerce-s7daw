import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../components/layout/PageBanner";
import Layout from "../components/layout/Layout";

const ListingMap = () => {
  return (
    <Layout>
      {/*====== Start Map Section ======*/}
      <section className="map-area">
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section>
      {/*====== End Map Section ======*/}
      {/*====== Start listing Section ======*/}
      <section className="listing-grid-area pb-120">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="container">
            <div className="row">
              <div className="listing-search-form mb-120 wow fadeInUp">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search By Keyword"
                        name="search"
                        required=""
                      />
                      <i className="ti-ink-pen" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <select className="wide form_control">
                        <option selected disabled value={"Services"}>
                            Services
                        </option>
                        <option value={1}>Hardwood</option>
                        <option value={2}>Laminate</option>
                        <option value={3}>Vinyl</option>
                        <option value={4}>Tile</option>
                        <option value={5}>Carpet</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Location"
                        name="location"
                        required=""
                      />
                      <i className="ti-location-pin" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form_group">
                      <select className="wide form_control">
                        <option data-dsplay="Location">Location</option>
                        <option value={1}>Ottawa</option>
                        <option value={2}>Rome</option>
                        <option value={3}>New york</option>
                        <option value={4}>Pris</option>
                        <option value={5}>Bern</option>
                        <option value={6}>Bangkok</option>
                        <option value={7}>Dhaka</option>
                        <option value={8}>Delhi</option>
                        <option value={9}>lahore</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form_group">
                      <select className="wide form_control">
                        <option data-dsplay="By Country">By Country</option>

                        <option value={1}>Canada</option>
                        <option value={2}>Italy</option>
                        <option value={3}>America</option>
                        <option value={4}>London</option>
                        <option value={5}>Swizerland</option>
                        <option value={6}>Thailand</option>
                        <option value={7}>Bangladesh</option>
                        <option value={8}>India</option>
                        <option value={9}>Pakistan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form_group">
                      <select className="wide form_control">
                        <option data-dsplay="Default price">
                          Default price
                        </option>
                        <option value={1}>$10-$30</option>
                        <option value={2}>$30-$70</option>
                        <option value={3}>$70-$100</option>
                        <option value={4}>$100-$130</option>
                        <option value={5}>$130-$150</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form_group">
                      <button className="main-btn icon-btn">Search Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Tab.Container defaultActiveKey="all">
                  <div className="listing-tab-filter mb-50">
                    <Nav className="nav nav-tabs">
                      <Nav.Item>
                        <Nav.Link as="a" className="c-pointer" eventKey="all">
                          All
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as="a" className="c-pointer" eventKey="cat1">
                          Food
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as="a" className="c-pointer" eventKey="cat2">
                          Career
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as="a" className="c-pointer" eventKey="cat3">
                          Shopping
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as="a" className="c-pointer" eventKey="cat4">
                          Parking
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as="a" className="c-pointer" eventKey="cat5">
                          Business
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as="a" className="c-pointer" eventKey="cat6">
                          Museums
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="listing-search-filter mb-40">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="filter-left d-flex align-items-center">
                          <div className="show-text">
                            <span>Showing Result 1-09</span>
                          </div>
                          <div className="sorting-dropdown">
                            <select>
                              <option data-dsplay="Default Sorting">
                                Default Sorting
                              </option>
                              <option value={1}>Hardwood</option>
                              <option value={2}>Laminate</option>
                              <option value={3}>Vinyl</option>
                              <option value={4}>Tile</option>
                              <option value={5}>Carpet</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="filter-right">
                          <ul className="filter-nav">
                            <li>
                              <Link href="/listing-grid">
                                <a className="active">
                                  <i className="ti-view-grid" />
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/listing-list">
                                <a>
                                  <i className="ti-view-list-alt" />
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="all">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                              <img
                                src="/assets/images/listing/listing-grid-24.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-25.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-26.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-27.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-28.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-29.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-30.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-31.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-32.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="cat1">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                              <img
                                src="/assets/images/listing/listing-grid-24.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-25.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
                                  <a>Pizza Recipe</a>
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
                              <img
                                src="/assets/images/listing/listing-grid-26.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cat2">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                              <img
                                src="/assets/images/listing/listing-grid-27.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-28.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-29.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
                                  <a>Pizza Recipe</a>
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
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cat3">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                              <img
                                src="/assets/images/listing/listing-grid-24.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-25.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
                                  <a>Pizza Recipe</a>
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
                              <img
                                src="/assets/images/listing/listing-grid-26.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cat4">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                              <img
                                src="/assets/images/listing/listing-grid-27.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-28.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-29.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
                                  <a>Pizza Recipe</a>
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
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cat5">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                              <img
                                src="/assets/images/listing/listing-grid-24.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-25.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
                                  <a>Pizza Recipe</a>
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
                              <img
                                src="/assets/images/listing/listing-grid-26.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cat6">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                              <img
                                src="/assets/images/listing/listing-grid-27.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-28.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
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
                              <img
                                src="/assets/images/listing/listing-grid-29.jpg"
                                alt="Listing Image"
                              />
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
                                <Link href="/listing-details-1">
                                  <a>Pizza Recipe</a>
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
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                  <div className="button text-center mt-30">
                    <Link href="/listing-map">
                      <a className="main-btn icon-btn">Load More</a>
                    </Link>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  );
};
export default ListingMap;
