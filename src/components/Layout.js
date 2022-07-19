import * as React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import Footer from "./Footer";

import * as layoutStyles from "../styles/modules/layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>PJECZ Justicia Digital</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/icon-hires.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/images/icon-normal.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/images/apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="152x152"
          href="/images/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="120x120"
          href="/images/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="76x76"
          href="/images/apple-touch-icon-76x76.png"
        />
      </Helmet>
      <div className={layoutStyles.bgPage}>
        <NavBar />
        <main className="container text-white">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
