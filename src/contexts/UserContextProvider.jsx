import { createContext, useEffect, useState } from "react";

export const userContext = createContext({
  user: {},
  addUser: Function,
  removeUser: Function,
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const addUser = async () => {
    const sampleUser = { id: "abc", email: "gui@gui.com", name: "Gui" };
    localStorage.setItem("u", JSON.stringify(sampleUser));
    setUser(JSON.parse(localStorage.getItem("u")));
  };

  const removeUser = () => {
    localStorage.removeItem("u");
    setUser(null);
  };


  return (
    <userContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
