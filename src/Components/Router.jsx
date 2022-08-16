import React from 'react'
import {Link} from "react-router-dom"

function Router() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3 className="navlink">Home</h3>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <h3 className="navlink">About</h3>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <h3 className="navlink">Contact</h3>
      </Link>
      <Link to="/services" style={{ textDecoration: "none" }}>
        <h3 className="navlink">Services</h3>
      </Link>
    </div>
  );
}

export default Router