import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthStatus = () => {
  const { user, turnUserMode } = useAuth();
  const navigate = useNavigate();

  async function doLogout() {
    await turnUserMode();
    navigate("/");
  }

  function doLogin() {
    navigate("/signin");
  }

  return (
    <>
      {user ? (
        <>
          <p>Usuário está logado!!!</p>
          <button onClick={doLogout}>SAIR</button>
        </>
      ) : (
        <>
          <p>Não tem usuário logado!!!</p>
          <button onClick={doLogin}>SAIR</button>
        </>
      )}
    </>
  );
};

export default AuthStatus;
