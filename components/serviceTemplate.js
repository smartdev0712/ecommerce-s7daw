import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toCamelCase } from "./utils";
import Title from "./layout/Title";
import PageBanner from "./layout/PageBanner";
import BrandComponent from './Brand/Brand';
import ServiceTemplateFooter from './serviceTemplateFooter'

const ServiceTemplate = ({ category }) => {
  return (
    <>
      <PageBanner category={category} />
      <Title />
      <BrandComponent />
      <ServiceTemplateFooter />
    </>
  );
};

export default ServiceTemplate;