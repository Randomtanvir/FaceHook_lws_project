import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handelLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button onClick={handelLogout} className="icon-btn">
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
};

export default Logout;
