import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
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
    router.push(`/delivery/${state}/${location}`)
  }

  return (
    <header className="header-area header-area-one d-xl-none">
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
                      {/* <input
                        type="text"
                        className="form_control"
                        placeholder="Location"
                        name="location"
                        required
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 mt-4">
                  <div className="d-flex justify-content-around align-content-center align-items-center">
                    <Link href="/login">
                      <a className="btn-root login-btn">
                        LOG IN
                      </a>
                    </Link>
                    <Link href="/signup">
                      <a className="btn-root register-btn">
                        SIGN UP
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="header-navigation sticky breakpoint-on">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="/assets/images/logoHeader.e4d6df00.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-5">
                <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
                  <div
                    className="navbar-close"
                    onClick={() => setToggle(false)}
                  >
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li className="menu-item menu-content">
                        <Link href={`/delivery/${state}/${location}`}>
                          <a>DELIVERIES</a>
                        </Link>
                      </li>
                      <li className="menu-item menu-content">
                        <Link href="/listing-name">
                          <a>LISTS</a>
                        </Link>
                      </li>
                      <li className="menu-item menu-content">
                        <Link href="/brand">
                          <a>BRANDS</a>
                        </Link>
                      </li>
                      <li className="menu-item menu-content">
                        <Link href="/products/product">
                          <a>PRODUCTS</a>
                        </Link>
                      </li>
                      <li className="menu-item menu-content">
                        <Link href="/add-listing">
                          <a>MAPS</a>
                        </Link>
                      </li>
                      <li className="menu-item menu-content">
                        <Link href="/blog/blog-category">
                          <a>BLOGS</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-0 col-0 col-md-2 col-sm-2 align-items-left">
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
    </header>
  );
};
export default MobileMenu;
