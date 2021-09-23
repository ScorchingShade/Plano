import React, { Fragment } from "react";
import Navbar from "./navbar";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
