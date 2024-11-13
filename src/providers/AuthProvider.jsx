/* eslint-disable react/prop-types */
import { useState } from "react";
import { AuthContex } from "../contex";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContex.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
