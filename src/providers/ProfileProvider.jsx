/* eslint-disable react/prop-types */

import { useReducer } from "react";
import { ProfileContex } from "../contex";
import { initialState, profileReducer } from "../reducers/profileReducer";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <ProfileContex.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContex.Provider>
  );
};

export default ProfileProvider;
