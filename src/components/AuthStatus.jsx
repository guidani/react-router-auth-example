import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthStatus = () => {
  const { user, removeUser } = useAuth();
  const navigate = useNavigate();

  async function doLogout() {
    removeUser();
    navigate("/");
  }

  function doLogin() {
    navigate("/signin");
  }

  return (
    <>
      {user ? (
        <>
          
          <button onClick={doLogout}>SAIR</button>
        </>
      ) : (
        <>
          
          <button onClick={doLogin}>SAIR</button>
        </>
      )}
    </>
  );
};

export default AuthStatus;
