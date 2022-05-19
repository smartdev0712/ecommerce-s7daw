import React from "react";
import Title from "./layout/Title";
import PageBanner from "./layout/PageBanner";
import BrandComponent from './Brand/Brand';
import ServiceTemplateFooter from './serviceTemplateFooter'

const ServiceTemplate = ({ category }) => {
  return (
    <>
      <PageBanner category={category} />
      <Title />
      <BrandComponent category={category} />
      <ServiceTemplateFooter />
    </>
  );
};

export default ServiceTemplate;