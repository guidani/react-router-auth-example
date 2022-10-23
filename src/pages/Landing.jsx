import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Landing = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  if(user){
    console.log(location?.pathname)
    // return navigate(location.pathname, {replace: true});
  }

  return (
    <>
      <div>Landing</div>
      <br />
      <br />
      <Link to="/signin">Logar no site</Link>
    </>
  );
};

export default Landing;
