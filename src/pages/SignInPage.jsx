import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignInPage = () => {
  const { user, turnUserMode } = useAuth();
  const navigate = useNavigate();

  async function doLogin() {
    await turnUserMode();
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
