import Link from "next/link";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ServiceTemplate from "../../../../components/serviceTemplate";

const TileStore = () => {
  return (
    <Layout category={"tile-store"}>
      <ServiceTemplate category={"Tile Store"} />
    </Layout>
  );
};
export default TileStore;
