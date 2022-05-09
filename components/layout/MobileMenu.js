import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Home, Hardwood, Laminate, Vinyl, Tile, Carpet, Brands, Blog } from "./Menu";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const router = useRouter()
  var state = "calgary"
  var location = "alberta"
  const getDeliveryUrl = (e) => {
    const value = e.target.value
    const selectedItems = value.split(', ');
    state = selectedItems[1].toLowerCase()
    location = selectedItems[0].toLowerCase()
    if (category !== undefined) {
      router.push(`/ca/${state}/${location}/${category}`);
    }
    else {
      router.push('#')
    }
  }

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
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 m-3">
                  <div className="d-flex align-content-center justify-content-around align-items-center">
                    <strong className="mx-4">Search For: </strong>
                    <div className="form_group" style={{ width: "70%" }}>
                      <i className="col-sm-0">
                        <SearchIcon />
                      </i>
                      <input
                        type="search"
                        className="form_control"
                        placeholder="stores, brands or products"
                        name="search"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-1 col-md-0 col-sm-0"></div> */}
                <div className="col-lg-5 col-md-12 col-sm-12 m-3">
                  <div className="d-flex justify-content-around align-content-center align-items-center">
                    <strong className="mx-4">Browsing Stores For: </strong>
                    <div className="form_group justify-content-center align-items-center" style={{ width: "60%" }}>
                      <i style={{ zIndex: 1}}>
                        <RoomIcon />
                      </i>
                      <select className="form_control" id="location" onChange={getDeliveryUrl}>
                        <option value="Calgary, Alberta">Calgary, Alberta</option>
                        <option value="Airdrie, Alberta">Airdrie, Alberta</option>
                        <option value="Banff, Alberta">Banff, Alberta</option>
                        <option value="Abbotsford, British Columbia">Abbotsford, British Columbia</option>
                        <option value="Burnaby, British Columbia">Burnaby, British Columbia</option>
                        <option value="Surrey, British Columbia">Surrey, British Columbia</option>
                        <option value="Vancouver, British Columbia">Vancouver, British Columbia</option>
                        <option value="Winnipeg, Manitoba">Winnipeg, Manitoba</option>
                        <option value="DartMouth, Nova Scotia">DartMouth, Nova Scotia</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 mt-4">
                  <div className="d-flex justify-content-around align-content-center align-items-center">
                    <Link href="/listing-name">
                      <a className="btn-root login-btn">
                        + ADD LIST
                      </a>
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
