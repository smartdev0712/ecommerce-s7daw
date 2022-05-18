import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toCamelCase } from "../utils";

const PageBanner = ({ category }) => {
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  useEffect(() => {
    const url = document.location.toString().split("/");
    let state = url[url.length - 3];
    setState(state.toUpperCase())
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
                  {category} in {location}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="MuiTypography-body mt-4 mx-4">
        Find the best local {" "}
        <strong style={{ color: "green" }}>
          {category} in {location}, {state}
        </strong>
      </h4>
    </section>
  );
};
export default PageBanner;
