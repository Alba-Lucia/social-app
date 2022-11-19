import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Comments } from "../comments/Comments";
import "./post.scss";
import axios from "axios";
import { format } from "timeago.js";

export const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setisLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fecthUser = async () => {
      const res = await axios.get(`/api/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fecthUser();
  }, [post.userId]);

  const liked = false;
  const handleLikes = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="details">
                <img src={user.ProfilePic || "/avatar.png"} alt="" />
                <span className="name">{user.username}</span>
              </div>
            </Link>
            <span className="date">{format(post.createdAt)}</span>
          </div>
        </div>
        <div className="content">
          <p>{post?.desc}</p>
          <img src={post?.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLiked ? (
              <FavoriteIcon onClick={handleLikes} />
            ) : (
              <FavoriteBorderIcon onClick={handleLikes} />
            )}
            {like}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
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
