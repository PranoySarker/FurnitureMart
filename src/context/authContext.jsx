import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  //   function for sign up
  const userSignUp = (fname, lname, email, password) => {
    let alreadyHaveUser = JSON.parse(localStorage.getItem("users")) || [];

    if (!Array.isArray(alreadyHaveUser)) {
      alreadyHaveUser = [];
    }

    const userExists = alreadyHaveUser.find((user) => user.email === email);

    if (userExists) {
      return { success: false, message: "User already axist" };
    } else {
      const newUser = { fname, lname, email, password };
      alreadyHaveUser = [...alreadyHaveUser, newUser];

      localStorage.setItem("users", JSON.stringify(alreadyHaveUser));
      return {
        success: true,
        message: "Account created successfully.Please login",
      };
    }
  };

  // function for login
  const userLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      setUser(user);
      return { success: true, message: "Successfully logged in" };
    } else {
      return {
        success: false,
        message: "Please Give Correct Email & Password",
      };
    }
  };

  // function for logout
  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser([]);
  };

  return (
    <AuthContext.Provider value={{ user, userSignUp, userLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
