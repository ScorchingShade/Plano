import React, { Fragment } from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
