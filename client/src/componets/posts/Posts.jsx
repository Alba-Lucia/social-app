import { Post } from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// const posts = [
//   {
//     id: 1,
//     name: "Alba Gonzalez",
//     userId: 1,
//     img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
//     ProfilePic: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!",
//   },
//   {
//     id: 2,
//     name: "Alba Gonzalez",
//     userId: 2,
//     ProfilePic: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!",
//     img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 3,
//     name: "Alba Gonzalez",
//     userId: 3,
//     ProfilePic: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!",
//     img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

// const { isLoading, error, data } = useQuery(['posts'],  () =>
//   makeRequest.get("/posts").then(res => {
//     return res.data
//   })
// )

export const Posts = ({username}) => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fecthPost = async () => {
      const res = username 
      ? await axios.get("/api/posts/profile/" + username)
      : await axios.get("/api/posts/timeline/6377f692bea6f7ad4c7756b5");
      setPosts(res.data);
    };
    fecthPost();
  }, []);

  return (
    <div className="posts">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post}/>
        </div>
      ))}
    </div>
  );
};

