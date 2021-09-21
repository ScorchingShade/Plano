import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <div>
        <Link href="/">Plano</Link>
      </div>
      <nav>
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
        <button type="button">Sign in</button>
      </nav>
    </header>
  );
}

export default Navbar;
