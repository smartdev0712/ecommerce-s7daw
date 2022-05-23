import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Home,
  Hardwood,
  Laminate,
  Vinyl,
  Tile,
  Carpet,
  Brands,
  Blog,
} from "./Menu";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";
import { fetchAPI } from "../../lib/api";
import { getSlug, toCamelCase } from "../utils";

const Header = ({ category, cityInfo, setInfo }) => {
  const router = useRouter();

  const getDeliveryUrl = async (e) => {
    e.preventDefault();
    const value = toCamelCase(e.target.location.value);
    const cityInfoItems = await fetchAPI("/canada-cities", {
      filters: {
        city_ascii: {
          $contains: value,
        },
      },
      populate: "*",
    });
    const cityInfo = cityInfoItems.data[0];
    if (cityInfo == undefined) {
      alert("Please type a city name correctly");
    } else {
      const city = getSlug(cityInfo.attributes.city_ascii);
      const province_id = cityInfo.attributes.province_id.toLowerCase();
      const newCityInfo = {
        province_id: province_id,
        city: city
      }
      setInfo(newCityInfo)
      if (category !== undefined) {
        router.push(`/ca/${province_id}/${city}/${category}`);
      } else {
        router.push("#");
      }
    }
  };

  return (
    <header className="header-area d-none d-xl-block">
      <div className="header-navigation">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row">
              <div className="col-lg-2 col-2">
                <div className="site-branding">
                  <Link href="/">
                    <a>
                      <img
                        src="/assets/images/flooringmetaverselogo.png"
                        className="brand-logo"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-10">
                <div className="nav-menu">
                  <div className="navbar-close">
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul className="d-flex justify-content-between">
                      <Home />
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Hardwood</a>
                        </Link>
                        <ul className="sub-menu">
                          <Hardwood cityInfo={cityInfo} />
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Laminate</a>
                        </Link>
                        <ul className="sub-menu">
                          <Laminate cityInfo={cityInfo} />
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Vinyl</a>
                        </Link>
                        <ul className="sub-menu">
                          <Vinyl cityInfo={cityInfo} />
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Tile</a>
                        </Link>
                        <ul className="sub-menu">
                          <Tile cityInfo={cityInfo} />
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Carpet</a>
                        </Link>
                        <ul className="sub-menu">
                          <Carpet cityInfo={cityInfo} />
                        </ul>
                      </li>
                      <Brands cityInfo={cityInfo} />
                      <Blog />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 align-items-left">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    {/* <li>
                      <Link href="/">
                        <a className="icon">
                          <i className="flaticon-avatar"></i>
                        </a>
                      </Link>
                    </li> */}
                    <li className="nav-toggle-btn">
                      <div className="navbar-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="container-fluid">
          <div
            className="hero-search-wrapper wow fadeInUp"
            wow-data-delay="70ms"
          >
            <form onSubmit={getDeliveryUrl}>
              <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 m-3">
                  <div className="d-flex justify-content-center align-content-center align-items-center">
                    <strong className="mx-4">Browsing Services For: </strong>
                    <div
                      className="form_group justify-content-center align-items-center"
                      style={{ width: "50%" }}
                    >
                      <i style={{ zIndex: 1 }}>
                        <RoomIcon />
                      </i>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="City Name"
                        name="location"
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      value="Search"
                      className="btn-root register-btn mx-3"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-2 mt-4">
                  <div className="d-flex align-content-center align-items-center">
                    <Link href="/listing-name">
                      <a className="btn-root login-btn">+ ADD LISTING</a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
