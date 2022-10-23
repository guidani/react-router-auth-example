import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignInPage = () => {
  const { user, addUser, removeUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function doLogin() {
    addUser();
    navigate("/home");
  }

  return (
    <>
      {!user ? (
        <>
          <p>No momento você não está logado!!!</p>
        </>
      ) : (
        <>
          <p>Você já se encontra logado!!!</p>
        </>
      )}
      <div>Logar no site</div>
      <button onClick={doLogin}>Logar</button>
    </>
  );
};

export default SignInPage;
