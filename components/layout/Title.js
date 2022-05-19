import React, { useEffect, useState } from "react";
import Head from "next/head";
import { toCamelCase } from "../utils";

const Title = () => {
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  useEffect(() => {
    const url = document.location.toString().split("/");
    let state = url[url.length - 3].toUpperCase();
    setState(state);
    setLocation(toCamelCase(url[url.length - 2]));
    const service = url[url.length - 1];
    let serviceItems = service.split("-");
    let serviceUrl = '';
    for (let i = 0; i < serviceItems.length; i++) {
      serviceUrl += toCamelCase(serviceItems[i]) + " ";
    }
    setService(serviceUrl);
  });
  return (
    <Head>
      <title>
        {service} in {location}, {state} - Flooring Metaverse
      </title>
    </Head>
  );
};

export default Title;
