import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toCamelCase } from "./utils";
import Title from "./layout/Title";
import PageBanner from "./layout/PageBanner";
import BrandComponent from './Brand/Brand'

const ServiceTemplate = () => {
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
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
  });
  return (
    <>
      <PageBanner />
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

export default ServiceTemplate;