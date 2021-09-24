import React, { Fragment } from "react";
import classes from "./footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <Fragment>
      <footer className={classes.appFooter}>
        <div className={classes.logo}>
          <Link href="/">Plano</Link>
          <p className={classes.subheading}>Decide, don't stall!</p>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
