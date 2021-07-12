import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="text-center m-3">
      <Link className="navLink" to="/add">add</Link>
      <Link className="navLink" to="/edit">edit</Link>
      <Link className="navLink" to="/delete">delete</Link>
      <Link className="navLink" to="/get">get</Link>
    </div>
  );
}

export default NavBar;
