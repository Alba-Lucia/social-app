import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./comments.scss";

const comments = [
  {
    id: 2,
    name: "Alba Gonzalez",
    userId: 2,
    ProfilePic:
      "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!",
    img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Alba Gonzalez",
    userId: 3,
    ProfilePic:
      "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!",
    img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
export const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.ProfilePic} alt="" />
        <input type="text" placeholder="Write a Comment"/>
        <button type="">Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.ProfilePic} alt="" />
          <div className="infoComment">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};
