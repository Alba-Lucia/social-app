import { Post } from "../post/Post";
import "./posts.scss"


const posts = [
    {
      id: 1,
      name: "Alba Gonzalez",
      userId: 1,
      img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
      ProfilePic: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!", 
    },
    {
      id: 2,
      name: "Alba Gonzalez",
      userId: 2,
      ProfilePic: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!",
      img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Alba Gonzalez",
      userId: 3,
      ProfilePic: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum fugit, eveniet vel quis in voluptate ex!",
      img: "https://images.pexels.com/photos/4350314/pexels-photo-4350314.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  
export const Posts = () => {
  return (
    <div className="posts">
        {posts.map(post => (
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}
