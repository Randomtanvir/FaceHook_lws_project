import Logo from "../../assets/images/logo.svg";
import Home from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Avater from "../../assets/images/avatars/avatar_1.png";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";

const Hader = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <NavLink to="/">
          <img
            className="max-w-[100px] rounded-full lg:max-w-[130px]"
            src={Logo}
          />
        </NavLink>

        <div className="flex items-center space-x-4">
          <NavLink to="/" className="btn-primary">
            <img src={Home} alt="Home" />
            Home
          </NavLink>
          <button className="icon-btn">
            <img src={Notification} alt="Notification" />
          </button>
          <Logout />

          <NavLink to="/profile" className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">Sumit</span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
              src={Avater}
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Hader;
