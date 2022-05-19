import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const Brand = () => {
  const [businesses, setBusiness] = useState("");
  useEffect(() => {
    (async () => {
      const businesses = await fetchAPI("/businesses", {
        filters: {
          services: {
            name: "Brand",
          },
        },
        populate: "*",
      });
      setBusiness(businesses.data);
    })();
  },[]);
  return (
    <Layout>
      <div className="home-header">
        <img
          src="/assets/images/flooring-banner.jpg"
          width="100%"
          style={{height: "100%"}}
          alt="home-header"
        />
        <div className="home-header-content">
          <div className="home-header-body">
            <h1
              style={{ width: "80%" }}
              className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft"
            >
              Discover Top Flooring Brands
            </h1>
          </div>
        </div>
      </div>
      <section className="products-area pt-50 pb-100">
      <div className="container">
        <div className="products-filter mb-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="sort-dropdown d-flex align-items-center">
                <div className="show-text">
                  <p>Showing Result 01-09</p>
                </div>
                {/* <div className="products-dropdown">
                  <select className="wide form_control">
                    <option value="default" selected disabled>
                      Default Sorting
                    </option>
                    <option value="new">Newest Product</option>
                    <option value="old">Oldest Product</option>
                    <option value="hight-to-low">High To Low</option>
                    <option value="low-to-high">Low To High</option>
                  </select>
                </div> */}
              </div>
            </div>
            {/* <div className="col-lg-3">
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
            </div> */}
          </div>
        </div>
        <div className="products-item-wrapper">
          <div className="row">
            {businesses &&
              businesses.map((business, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div className="listing-item listing-grid-item-two mb-30">
                      <div className="listing-thumbnail">
                        <Link href={`/brand/${business.attributes.slug}`}>
                          <a className="m-5">
                            <Image
                              src={getStrapiMedia(
                                business.attributes.business_logo
                              )}
                              alt="Listing Image"
                              width="270px"
                              height="195px"
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
                          <Link href={`/brand/${business.attributes.slug}`}>
                            <a>{business.attributes.name}</a>
                          </Link>
                        </h3>
                        <p>
                          Popular Brand in{" "}
                          {
                            business.attributes.canada_city.data.attributes
                              .city_ascii
                          }
                        </p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          {business.attributes.phone_number && (
                            <a href={`tel:${business.attributes.phone_number}`}>
                              {business.attributes.phone_number}
                            </a>
                          )}
                          <span className="status st-open">Open</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                {business.attributes.address}
                              </span>
                            </li>
                            {/* <li>
                                  <span>
                                    <i className="ti-heart" />
                                    <a href="#">Save</a>
                                  </span>
                                </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {businesses.length == 0 && 
                <div>
                  <p style={{fontSize:"20px"}}>We apologize, we haven’t added any brands for your area quite yet. Please let your local business owners know to add themselves for FREE.</p>
                </div>
              }
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Brand;
