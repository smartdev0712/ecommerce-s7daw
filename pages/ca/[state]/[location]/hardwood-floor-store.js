import Link from "next/link";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ProductTemplate from "../../../../components/productTemplate";

const HardwoodStore = () => {
  return (
    <Layout category={"hardwood-floor-store"}>
      <ProductTemplate category={"Hardwood Floor Store"} />
    </Layout>
  );
};
export default HardwoodStore;
