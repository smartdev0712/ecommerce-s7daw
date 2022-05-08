import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toCamelCase } from "./utils";
import Title from "./layout/Title";
import PageBanner from "./layout/PageBanner";
import BrandComponent from './Brand/Brand';
import ServiceTemplateFooter from './serviceTemplateFooter'

const ServiceTemplate = () => {
  return (
    <>
      <PageBanner />
      <Title />
      <BrandComponent />
      <ServiceTemplateFooter />
    </>
  );
};

export default ServiceTemplate;