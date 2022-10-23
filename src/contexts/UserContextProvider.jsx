import { createContext, useEffect, useState } from "react";

export const userContext = createContext(Boolean);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const turnUserMode = async () => {
    await setUser((user) => !user);
  };

  useEffect(() => {
    console.log("USer is>>>", user);
  }, [user]);

  return (
    <userContext.Provider value={{ user, turnUserMode }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
