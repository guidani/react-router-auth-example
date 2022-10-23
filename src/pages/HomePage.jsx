import React from "react";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const auth = useAuth();
  return (
    <>
      <div>HomePage</div>
      <p>Bem vindo(a): {auth?.user?.name}</p>
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

export default HomePage;
