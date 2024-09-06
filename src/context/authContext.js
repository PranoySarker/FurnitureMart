import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContext;
