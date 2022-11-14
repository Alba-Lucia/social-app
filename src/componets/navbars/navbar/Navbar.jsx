import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/DarkModeContext";
import User from "../../user/User";
import "./navbar.scss";
import { AuthContext } from "../../../context/AuthContext";

export const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <span className="logo">Social Media</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <DarkModeOutlinedIcon onClick={toggle} />
        ) : (
          <LightModeIcon onClick={toggle} />
        )}

        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <User />
        </div>
      </div>
    </div>
  );
};
