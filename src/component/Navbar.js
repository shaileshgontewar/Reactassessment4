import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">
              <span> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Student">Student</Link>
          </li>

          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
