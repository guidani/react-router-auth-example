import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const auth = useAuth();
  return (
    <>
      <nav>
        <Link to="/home">Home Page</Link>
        {auth?.user && <Link to="/protected">Protected Page</Link>}
      </nav>
    </>
  );
};

export default Navigation;
