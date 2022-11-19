import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./profile.scss";
import { Posts } from "../../componets/posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";

export const Profile = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    const fecthUser = async () => {
      const res = await axios.get(`/api/users?username=user4`);
      setUser(res.data);
    };
    fecthUser();
  }, []);

  return (
    <div className="profile">
      <div className="images">
        <img src={user.coverPicture || "https://images.pexels.com/photos/13275217/pexels-photo-13275217.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt=""
          className="cover"
        />
        <img src={user.profilePicture || "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?cs=srgb&dl=pexels-guilherme-almeida-1858175.jpg&fm=jpg"}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="">
              <FacebookOutlinedIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
            <a href="">
              <LinkedInIcon />
            </a>
          </div>
          <div className="center">
            <span>{user.username}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{user.city ? user.city : "City"}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{user.from ? user.from : "Country"}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <button className="button__primary-small">Follow</button>
            <MailOutlineIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts username="user4" />
    </div>
  );
};
