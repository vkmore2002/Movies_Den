import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 flex gap-4 justify-center text-white mx-80 mt-4 rounded-lg">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Navbar;
