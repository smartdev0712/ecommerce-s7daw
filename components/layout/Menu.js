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
export const Hardwood = () => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/hardwood-floor-refinishing`}>
        <a>Hardwood Floor Refinishing</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/hardwood-floor-installation`}>
        <a>Hardwood Floor Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/hardwood-floor-repair`}>
        <a>Hardwood Floor Repair</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/hardwood-floor-store`}>
        <a>Hardwood Floor Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/hardwood-floor-cleaning`}>
        <a>Hardwood Floor Cleaning</a>
      </Link>
    </li>
  </Fragment>
);
export const Laminate = () => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/laminate-floor-installation`}>
        <a>Laminate Flooring Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href="/ca/alberta/calgary/laminate-floor-store">
        <a>Laminate Flooring Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/laminate-floor-repair`}>
        <a>Laminate Floor Repair</a>
      </Link>
    </li>
  </Fragment>
);
export const Vinyl = () => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/vinyl-floor-store`}>
        <a>Vinyl Floor Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/vinyl-decking-installation`}>
        <a>Vinyl Decking Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/vinyl-floor-installation`}>
        <a>Vinyl Flooring Installation</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/vinyl-floor-repair`}>
        <a>Vinyl Flooring Repair</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/vinyl-deck-repair`}>
        <a>Vinyl Deck Repair</a>
      </Link>
    </li>
  </Fragment>
);
export const Tile = () => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/tile-store`}>
        <a>Tile Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/tile-installer`}>
        <a>Tile Installer</a>
      </Link>
    </li>
  </Fragment>
);
export const Carpet = () => (
  <Fragment>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/carpet-installer`}>
        <a>Carpet Installer</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/carpet-cleaning`}>
        <a>Carpet Cleaning</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/carpet-store`}>
        <a>Carpet Store</a>
      </Link>
    </li>
    <li className="menu-item">
      <Link href={`/ca/alberta/calgary/carpet-repair`}>
        <a>Carpet Repair</a>
      </Link>
    </li>
  </Fragment>
);
export const Brands = () => (
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
