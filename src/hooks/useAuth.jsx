import { useContext } from "react";
import { userContext } from "../contexts/UserContextProvider";

const useAuth = () => {
  return useContext(userContext);
};

export default useAuth;
