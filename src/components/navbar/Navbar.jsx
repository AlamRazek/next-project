import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="bg-blue-700">
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
