import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const userContext = createContext({
  user: {},
  doLogin: Function,
  doLogout: Function,
});

const sampleUser = { id: "abc", email: "gui@gui.com", name: "Gui" };

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const doLogin = async () => {
    localStorage.setItem("u", JSON.stringify(sampleUser));
    setUser(JSON.parse(localStorage.getItem("u")));
  };

  const doLogout = () => {
    localStorage.removeItem("u");
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, doLogin, doLogout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
