import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toCamelCase } from "../utils";

const PageBanner = ({ pageName, title }) => {
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  useEffect(() => {
    const url = document.location.toString().split("/");
    console.log(url);
    let state = url[url.length - 3];
    if (state.includes("%")) {
      let stateItems = state.split("%20");
      state = toCamelCase(stateItems[0]) + " " + toCamelCase(stateItems[1]);
      console.log(state);
      setState(state);
    } else {
      setState(toCamelCase(state));
    }
    setLocation(toCamelCase(url[url.length - 2]));
    const service = url[url.length - 1];
    let serviceItems = service.split("-");
    let serviceUrl = "";
    for (let i = 0; i < serviceItems.length; i++) {
      serviceUrl += toCamelCase(serviceItems[i]) + " ";
    }
    setService(serviceUrl);
  });
  return (
    <section className="hero-area">
      <h1 className="MuiTypography-root MuiTypography-h1">
        Find local {service} in {location} ready to serve you. <br />
        Browse the best contractors near you, read reviews and learn more about
        who’s available
      </h1>
      <div
        className="breadcrumbs-wrapper"
        style={{
          background: `url(/assets/images/flooring-banner.jpg) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <h1 className="MuiTypography-root MuiTypography-h1">
                  Find local {service} in {location} ready to serve you. <br />
                  Browse the best contractors near you, read reviews and learn
                  more about who’s available
                </h1>
                {/* <ul className="breadcrumbs-link btn-root">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">{pageName ? pageName : title}</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
