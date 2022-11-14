import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./profile.scss"
import { Posts } from '../../componets/posts/Posts';

export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13275217/pexels-photo-13275217.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?cs=srgb&dl=pexels-guilherme-almeida-1858175.jpg&fm=jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="">
              <FacebookOutlinedIcon fontSize='large'/>
            </a>
            <a href="">
              <InstagramIcon fontSize='large'/>
            </a>
            <a href="">
              <TwitterIcon fontSize='large'/>
            </a>
            <a href="">
              <LinkedInIcon fontSize='large'/>
            </a>
            
          </div>
          <div className="center">
            <span>Alba</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize='large'/>
                <span>Colombia</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize='large'/>
                <span>Colombia</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <MailOutlineIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  );
};
