import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignInPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function goBack() {
    navigate(from, { replace: true });
  }

  function doLogin() {
    auth?.doLogin();
    navigate("/home", { replace: true });
  }

  return (
    <>
      <div>Logar no site</div>
      <button onClick={doLogin}>Logar</button>
      <button onClick={goBack}>VOLTAR</button>
    </>
  );
};

export default SignInPage;
