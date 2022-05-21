import React, { useState, useEffect } from "react";
import Title from "./layout/Title";
import PageBanner from "./layout/PageBanner";
import BrandComponent from './Brand/Brand';
import ServiceTemplateFooter from './serviceTemplateFooter'
import { toCamelCase } from "./utils"

const ServiceTemplate = ({ category }) => {
  const [city, setCity] = useState("")
  useEffect(() => {
    const url = document.location.toString().split("/");
    const state = url[url.length - 3].toUpperCase();
    const city = toCamelCase(url[url.length - 2]);
    setCity(city)
  })
  return (
    <>
      <PageBanner category={category} />
      <Title />
      <BrandComponent category={category} city={city} />
      <ServiceTemplateFooter />
    </>
  );
};

export default ServiceTemplate;