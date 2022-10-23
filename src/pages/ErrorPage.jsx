import React from "react";
import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // function goBack() {
  //   navigate(from, { replace: true });
  // }

  return (
    <>
      <div>ErrorPage</div>
      <Link to={from}>
        <button>VOLTAR</button>
      </Link>
    </>
  );
};

export default ErrorPage;
