import React from "react";
import useAuth from "../hooks/useAuth";

const ProtectedPage = () => {
  const { user } = useAuth();
  return (
    <>
      <div>ProtectedPage</div>
      {user ? (
        <>
          <p>Logado</p>
        </>
      ) : (
        <>
          <p>Não logado</p>
        </>
      )}
    </>
  );
};

export default ProtectedPage;
