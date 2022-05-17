import Link from "next/link";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ProductTemplate from "../../../../components/productTemplate";

const TileStore = () => {
  return (
    <Layout category={"tile-store"}>
      <ProductTemplate category={"Tile Store"} />
    </Layout>
  );
};
export default TileStore;
