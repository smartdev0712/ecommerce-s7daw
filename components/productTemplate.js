import React, { useEffect, useState } from "react";
import { toCamelCase } from "./utils";
import Title from "./layout/Title";
import BrandComponent from './Brand/Brand';
import ProductComponent from './Product/ProductComponent'

const ProductTemplate = ({ category }) => {
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    const url = document.location.toString().split("/");
    let state = url[url.length - 3];
    if (state.includes("%")) {
      let stateItems = state.split("%20");
      state = toCamelCase(stateItems[0]) + " " + toCamelCase(stateItems[1]);
      setState(state);
    } else {
      setState(toCamelCase(state));
    }
    setLocation(toCamelCase(url[url.length - 2]));
  });
  return (
    <>
      <div className="home-header">
        <img
          src="/assets/images/flooring-banner.jpg"
          width="100%"
          style={{height: "100%"}}
          alt="home-header"
        />
        <div className="home-header-content">
          <div className="home-header-body">
            <h1 style={{width: "70%"}} className="MuiTypography-root MuiTypography-h1 MuiTypography-alignLeft">
              Our Store
            </h1>
          </div>
        </div>
      </div>
      <Title />
      <h4 className="m-4">
        Showing Result for{" "}
        <strong style={{ color: "green" }}>
          {location}, {state}
        </strong>
      </h4>
      <BrandComponent />
    </>
  );
};

export default ProductTemplate;
