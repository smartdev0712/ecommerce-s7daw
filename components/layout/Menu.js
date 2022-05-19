import Link from "next/link";
import React, { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
  </Fragment>
);
export const Hardwood = ({ cityInfo }) => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/hardwood-floor-refinishing`}>
        <a>Hardwood Floor Refinishing</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/hardwood-floor-installation`}>
        <a>Hardwood Floor Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/hardwood-floor-repair`}>
        <a>Hardwood Floor Repair</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/hardwood-floor-store`}>
        <a>Hardwood Floor Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/hardwood-floor-cleaning`}>
        <a>Hardwood Floor Cleaning</a>
      </Link>
    </li>
  </Fragment>
);
export const Laminate = ({ cityInfo }) => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/laminate-floor-installation`}>
        <a>Laminate Flooring Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/laminate-floor-store`}>
        <a>Laminate Flooring Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/laminate-floor-repair`}>
        <a>Laminate Floor Repair</a>
      </Link>
    </li>
  </Fragment>
);
export const Vinyl = ({ cityInfo }) => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/vinyl-floor-store`}>
        <a>Vinyl Floor Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/vinyl-decking-installation`}>
        <a>Vinyl Decking Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/vinyl-floor-installation`}>
        <a>Vinyl Flooring Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/vinyl-floor-repair`}>
        <a>Vinyl Flooring Repair</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/vinyl-deck-repair`}>
        <a>Vinyl Deck Repair</a>
      </Link>
    </li>
  </Fragment>
);
export const Tile = ({ cityInfo }) => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/tile-store`}>
        <a>Tile Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/tile-installer`}>
        <a>Tile Installer</a>
      </Link>
    </li>
  </Fragment>
);
export const Carpet = ({ cityInfo }) => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/carpet-installer`}>
        <a>Carpet Installer</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/carpet-cleaning`}>
        <a>Carpet Cleaning</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/carpet-store`}>
        <a>Carpet Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/${cityInfo.province_id}/${cityInfo.city}/carpet-repair`}>
        <a>Carpet Repair</a>
      </Link>
    </li>
  </Fragment>
);
export const Brands = ({ cityInfo }) => (
  <Fragment>
    <li className="menu-item">
      <Link href="/brand">
        <a>Brands</a>
      </Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/blog/blog-category">
        <a>Blog</a>
      </Link>
    </li>
  </Fragment>
);
