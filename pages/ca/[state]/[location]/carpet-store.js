import Link from "next/link";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ProductTemplate from "../../../../components/productTemplate";

const CarpetStore = () => {
  return (
    <Layout category={"carpet-store"}>
      <ProductTemplate />
    </Layout>
  );
};
export default CarpetStore;
