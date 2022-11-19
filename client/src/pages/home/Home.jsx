import { Posts } from "../../componets/posts/Posts"
import { Stories } from "../../componets/stories/Stories"
import { Profile } from "../profile/Profile"
import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
      {/* <Profile/> */}
    </div>
  )
}
