import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { fetchAPI } from "../../lib/api";
import http from '../../components/http'
import { getStrapiMedia } from "../../lib/media";
import { parseCookies } from "nookies";

const HomeComponent = () => {
  const [topBusinesses, setTopBusinesses] = useState("");
  const [topBrands, setTopBrands] = useState("");
  const [businesses, setBusinesses] = useState("");
  useEffect(() => {
    (async () => {
      const businesses = await fetchAPI("/businesses", {
        populate: "*"
      });
      const brands = await fetchAPI("/businesses", {
        filters: {
          services: {
            name: "Brand",
          },
        },
        populate: "*",
      });
      setTopBrands(brands.data);
      setTopBusinesses(businesses.data.slice(0, 3));
      setBusinesses(businesses.data);
    })();
  }, []);

  return (
    <div className="delivery-container container-fluid">
      <div className="delivery-body">
        <div className="delivery-content">
          <div className="delivery-header">
            <Image
              src="/assets/images/iconTopDeliveries.bba1b6f5.svg"
              alt="top-deliveries"
              width="100%"
              height="100%"
            />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <h2 className="MuiTypography-root MuiTypography-h2">
                <span className="delivery-cat">TOP </span>&nbsp;
                <span className="delivery-text">Flooring Brands</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {topBrands &&
            topBrands.map((brand, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="listing-item listing-grid-item-two mb-30">
                    <div className="listing-thumbnail">
                      <Link href={`/brand/${brand.attributes.slug}`}>
                        <a className="m-5">
                          <Image
                            src={getStrapiMedia(brand.attributes.business_logo)}
                            alt="Listing Image"
                            width="270px"
                            height="195px"
                          />
                        </a>
                      </Link>
                      {/* <a href="#" className="cat-btn">
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
                            <a href="#">(01 Reviews)</a>
                          </span>
                        </li>
                      </ul> */}
                    </div>
                    <div className="listing-content">
                      <h3 className="title">
                        <Link href={`/brand/${brand.attributes.slug}`}>
                          <a>{brand.attributes.name}</a>
                        </Link>
                      </h3>
                      <span className="phone-meta">
                        <i className="ti-tablet" />
                        {brand.attributes.phone_number && (
                          <a href={`tel:${brand.attributes.phone_number}`}>
                            {brand.attributes.phone_number}
                          </a>
                        )}
                        {/* <span className="status st-open">Open</span> */}
                      </span>
                      <div className="listing-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-location-pin" />
                              {brand.attributes.canada_city.data.attributes.city_ascii.toUpperCase()}
                              , CANADA
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
          {/* <div className="col-lg-3 col-md-4 col-sm-6">
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
          </div> */}
        </div>
      </div>
      <div className="delivery-body">
        <div className="delivery-content">
          <div className="delivery-header">
            <Image
              src="/assets/images/iconPopular.8156dfc8.svg"
              alt="top-deliveries"
              width="100%"
              height="100%"
            />
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
          {topBusinesses &&
            topBusinesses.map((brand, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="listing-item listing-grid-item-two mb-30">
                    <div className="listing-thumbnail">
                      <Link href={`/brand/${brand.attributes.slug}`}>
                        <a className="m-5">
                          <Image
                            src={getStrapiMedia(brand.attributes.business_logo)}
                            alt="Listing Image"
                            width="270px"
                            height="195px"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="listing-content">
                      <h3 className="title">
                        <Link href={`/brand/${brand.attributes.slug}`}>
                          <a>{brand.attributes.name}</a>
                        </Link>
                      </h3>
                      <span className="phone-meta">
                        <i className="ti-tablet" />
                        {brand.attributes.phone_number && (
                          <a href={`tel:${brand.attributes.phone_number}`}>
                            {brand.attributes.phone_number}
                          </a>
                        )}
                      </span>
                      <div className="listing-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-location-pin" />
                              {brand.attributes.canada_city.data.attributes.city_ascii.toUpperCase()}
                              , CANADA
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="delivery-body">
        <div className="delivery-content">
          <div className="delivery-header">
            <Image
              src="/assets/images/iconTopDeliveries.bba1b6f5.svg"
              alt="top-deliveries"
              width="100%"
              height="100%"
            />
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
          {businesses &&
            businesses.map((brand) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={brand.id}>
                  <div className="listing-item listing-grid-item-two mb-30">
                    <div className="listing-thumbnail">
                      <Link href={`/listing/${brand.attributes.slug}`}>
                        <a className="m-5">
                          <Image
                            src={getStrapiMedia(brand.attributes.business_logo)}
                            alt="Listing Image"
                            width="270px"
                            height="195px"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="listing-content">
                      <h3 className="title">
                        <Link href={`/listing/${brand.attributes.slug}`}>
                          <a>{brand.attributes.name}</a>
                        </Link>
                      </h3>
                      <span className="phone-meta">
                        <i className="ti-tablet" />
                        {brand.attributes.phone_number && (
                          <a href={`tel:${brand.attributes.phone_number}`}>
                            {brand.attributes.phone_number}
                          </a>
                        )}
                      </span>
                      <div className="listing-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-location-pin" />
                              {brand.attributes.canada_city.data.attributes.city_ascii.toUpperCase()}
                              , CANADA
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps({context}) {

//   const businesses = await fetchAPI("/businesses", {
//     populate: "*",
//   });

//   const brands = await fetchAPI("/businesses", {
//     filters: {
//       services: {
//         name: "Brand",
//       },
//     },
//     populate: "*",
//   });
  
//   return {
//     props: {
//       topBrands: brands.data,
//       topBusinesses: businesses.data.slice(0, 3),
//       businesses: businesses.data,
//     },
//   };
// }

export default HomeComponent;
