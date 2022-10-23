import { createContext, useEffect, useState } from "react";

export const userContext = createContext({
  user: {},
  addUser: Function,
  removeUser: Function,
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const addUser = async () => {
    setUser({
      id: "abc",
      email: "gui@gui.com",
      name: "Gui",
    });
  };

  const removeUser = () => {
    setUser(null);
  };

  useEffect(() => {
    console.log("User is>>>", user);
  }, [user]);

  return (
    <userContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
