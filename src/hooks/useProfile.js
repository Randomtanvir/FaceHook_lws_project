import { useContext } from "react";
import { ProfileContex } from "../contex";

const useProfile = () => {
  return useContext(ProfileContex);
};

export default useProfile;
