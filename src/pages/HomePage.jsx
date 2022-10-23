import React from "react";
import AuthStatus from "../components/AuthStatus";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { user } = useAuth();
  return (
    <>
      <div>HomePage</div>
      <p>Bem vindo(a): {user.name}</p>
      <AuthStatus />
    </>
  );
};

export default HomePage;
