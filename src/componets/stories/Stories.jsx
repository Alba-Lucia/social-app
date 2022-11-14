import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./stories.scss";

const stories = [
  {
    id: 1,
    name: "Alba Gonzalez",
    img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Alba Gonzalez",
    img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Alba Gonzalez",
    img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const Stories = () => {
    const {currentUser} = useContext(AuthContext);

  return (
    <div className="stories">
        <div className="story">
          <img src={currentUser.ProfilePic} alt="" />
          <span>{currentUser.name}</span>
          <button className="button">+</button>
        </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
