import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
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
import { getSlug } from "../utils";

const MobileMenu = ({ category }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const router = useRouter();
  const getDeliveryUrl = async (e) => {
    e.preventDefault();
    const value = e.target.location.value;
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
    }
    const city = getSlug(cityInfo.attributes.city_ascii);
    const province_id = cityInfo.attributes.province_id.toLowerCase();
    if (category !== undefined) {
      router.push(`/ca/${province_id}/${city}/${category}`);
    } else {
      router.push("#");
    }
  };

  return (
    <header className="header-area header-area-one d-xl-none">
      <div className="header-navigation sticky breakpoint-on">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="/assets/images/flooringmetaverselogo.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-5">
                <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
                  <div
                    className="navbar-close"
                    onClick={() => setToggle(false)}
                  >
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <Home />
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Hardwood</a>
                        </Link>
                        <ul className="sub-menu" style={activeLi("Hardwood")}>
                          <Hardwood />
                        </ul>
                        <span
                          className="dd-trigger"
                          onClick={() => activeMenuSet("Hardwood")}
                        >
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Laminate</a>
                        </Link>
                        <ul className="sub-menu" style={activeLi("Laminate")}>
                          <Laminate />
                        </ul>
                        <span
                          className="dd-trigger"
                          onClick={() => activeMenuSet("Laminate")}
                        >
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Vinyl</a>
                        </Link>
                        <ul className="sub-menu" style={activeLi("Vinyl")}>
                          <Vinyl />
                        </ul>
                        <span
                          className="dd-trigger"
                          onClick={() => activeMenuSet("Vinyl")}
                        >
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Tile</a>
                        </Link>
                        <ul className="sub-menu" style={activeLi("Tile")}>
                          <Tile />
                        </ul>
                        <span
                          className="dd-trigger"
                          onClick={() => activeMenuSet("Tile")}
                        >
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <Link href="#">
                          <a>Carpet</a>
                        </Link>
                        <ul className="sub-menu" style={activeLi("Carpet")}>
                          <Carpet />
                        </ul>
                        <span
                          className="dd-trigger"
                          onClick={() => activeMenuSet("Carpet")}
                        >
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <Brands />
                      <Blog />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-1 col-1 col-md-2 col-sm-2 align-items-left">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li className="user-btn">
                      <Link href="/">
                        <a className="icon">
                          <i className="flaticon-avatar"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-toggle-btn">
                      <div
                        className={`navbar-toggler ${toggle ? "active" : ""}`}
                        onClick={() => setToggle(!toggle)}
                      >
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
                  <div className="d-flex justify-content-around align-content-center align-items-center">
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
                      className="btn-root register-btn mx-1"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 mt-4">
                  <div className="d-flex justify-content-around align-content-center align-items-center">
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
export default MobileMenu;
