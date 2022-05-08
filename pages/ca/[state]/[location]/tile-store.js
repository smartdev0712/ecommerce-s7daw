import Link from "next/link";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ProductTemplate from "../../../../components/productTemplate";

const Products = () => {
  return (
    <Layout category={"tile-store"}>
      <ProductTemplate />
    </Layout>
  );
};
export default Products;
