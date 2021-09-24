import React, { Fragment, useState } from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import classes from "./navbar.module.css";

function Navbar() {

    const [navOpen, setNavOpen] = useState(false);
    const router= useRouter();

    const mobileNavHandler=(e)=>{
        setNavOpen(!navOpen);
        console.log(navOpen);
    }

    const callToActionHandler=()=>{
        router.push("/");
        console.log("hello")
    }


  return (
      <Fragment>
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
        <button type="button" className={classes.callToAction} onClick={callToActionHandler}>
          Sign in
        </button>
        <button className={classes.bars} onClick={mobileNavHandler}>
             <i className="fa fa-bars"></i>
        </button>
       
      </nav>

     
    </header>

    <nav className={navOpen?classes.mobileNav:classes.close}>
        <ul>
          <li className={classes.links}>
            <Link href="/">API</Link>
          </li>
          <li className={classes.links}>
            <Link href="/">Dashboard</Link>
          </li>
          <li className={classes.links}>
            <Link href="/">Planners</Link>
          </li>
        </ul>
        <button type="button" className={classes.callToActionMobile}>
          Sign in
        </button>
       
      </nav>
    </Fragment>
    
  );
}

export default Navbar;
