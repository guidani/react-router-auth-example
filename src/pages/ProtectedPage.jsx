import React from "react";
import useAuth from "../hooks/useAuth";

const ProtectedPage = () => {
  const auth = useAuth();
  return (
    <>
      <div>ProtectedPage</div>
      {auth?.user ? (
        <>
          <p>Logado</p>
        </>
      ) : (
        <>
          <p>Não logado</p>
        </>
      )}
          <>
      {auth?.user ? (
        <>
          <button onClick={auth?.doLogout}>SAIR</button>
        </>
      ) : (
        <>
          <button onClick={auth?.doLogin}>SAIR</button>
        </>
      )}
    </>
    </>
  );
};

export default ProtectedPage;
