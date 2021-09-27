import React, { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import classes from "./layout.module.css"
import Head from "next/head"

function Layout(props) {
  const label= "Plano, decide don't wait";
  return (
    <Fragment>
     <Head>
      <html lang="en"></html>
        <title>{label}</title>
        <meta name="description" content="Author: Ankush Sharma,
    Plano is a planning and a decision making app that helps you to decide quicker and plan better"></meta>
      </Head>
      <Navbar />
      <main className={classes.mainbody}>{props.children}
      <Footer/>
      </main>
      
    </Fragment>
  );
}

export default Layout;
