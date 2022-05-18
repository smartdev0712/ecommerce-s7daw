import Link from "next/link";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ServiceTemplate from "../../../../components/serviceTemplate";

const CarpetStore = () => {
  return (
    <Layout category={"carpet-store"}>
      <ServiceTemplate category="Carpet Store"/>
    </Layout>
  );
};
export default CarpetStore;
