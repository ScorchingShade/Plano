import React from "react";
import Link from "next/link";

import classes from "./navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Plano</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/">API</Link>
          </li>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/">Planners</Link>
          </li>
        </ul>
        <button type="button" className={classes.callToAction}>
          Sign in
        </button>
        <div className={classes.bars}>
             <i className="fa fa-bars"></i>
        </div>
       
      </nav>
     
    </header>
  );
}

export default Navbar;
