import React, { Fragment } from "react";
import classes from "./footer.module.css";
import Link from "next/link";

function Footer() {
  const callToActionHandler = () => {
    router.push("/");
  };

  return (
    <Fragment>
      <footer className={classes.appFooter}>
        <div className={classes.logo}>
          <Link href="/">Plano</Link>
          <p className={classes.subheading}>Decide, don't stall!</p>
        </div>

        <div className={classes.links}>
          <ul className={classes.links_list}>
            <li className={classes.link}>
              <h3>Explore Plano</h3>
            </li>
            <li className={classes.link}>
              <Link href="/">API</Link>
            </li>
            <li className={classes.link}>
              <Link href="/">Dashboard</Link>
            </li>
            <li className={classes.link}>
              <Link href="/">Planners</Link>
            </li>
          </ul>
          <button
            type="button"
            className={classes.callToAction}
            onClick={callToActionHandler}
          >
            Sign in
          </button>
        </div>

        <div className={classes.info}>
          <p>
            Plano helps you to escape the nightmare of making decisions and
            planning.
            <br />
            <br />
            Explore Plano and see the power of atomic decisions made today!
          </p>

          <div className={classes.iconLabel}>
            <Link href="/" className={classes.icons}>
              <i className="fa fa-instagram"></i>
            </Link>
            <Link href="/">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link href="/">
              <i className="fa fa-github"></i>
            </Link>
            <Link href="/">
              <i className="fa fa-twitter"></i>
            </Link>
          </div>
          <div>
              <p>Made with ❤️ in India </p>
              <p>Copyright © 2021, Plano</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
