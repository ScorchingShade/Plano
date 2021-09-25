import React, { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import classes from "./layout.module.css"

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.mainbody}>{props.children}
      <Footer/>
      </main>
      
    </Fragment>
  );
}

export default Layout;
