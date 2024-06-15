import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/"><div className="navbar-head">Blog</div></a>
      <ul className="navbar-elements">
        <h2><a  href="/">Home</a> </h2>
      </ul>
    </div>
  );
};

export default Navbar;