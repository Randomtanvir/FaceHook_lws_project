import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";

const Logout = () => {
  const navigate = useNavigate();
  const handelLogout = () => {
    navigate("/login");
  };
  return (
    <button onClick={handelLogout} className="icon-btn">
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
};

export default Logout;
