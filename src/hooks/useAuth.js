import { useContext, useDebugValue } from "react";
import { AuthContex } from "../contex";

const useAuth = () => {
  const { auth } = useContext(AuthContex);
  useDebugValue(auth, (auth) => (auth?.user ? "user login" : "user logout"));
  return useContext(AuthContex);
};

export default useAuth;
