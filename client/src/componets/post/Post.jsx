import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Comments } from "../comments/Comments";
import "./post.scss";

export const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.ProfilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date"> 1 min ago</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            12 Likes
          </div>
          <div 
            className="item"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <ModeCommentOutlinedIcon />2 Comens
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};
