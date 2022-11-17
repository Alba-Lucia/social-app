import Friends from "../../../assets/1.png"
import Groups from "../../../assets/2.png"
import Market from "../../../assets/3.png"
import Watch from "../../../assets/4.png"
import Memories from "../../../assets/5.png"
import Event from "../../../assets/6.png"
import Gaming from "../../../assets/7.png"
import Gallery from "../../../assets/8.png"
import Videos from "../../../assets/9.png"
import Messages from "../../../assets/10.png"
import Tutorials from "../../../assets/11.png"
import Courses from "../../../assets/12.png"
import Fund from "../../../assets/13.png"
import './leftBar.scss'
import User from "../../user/User"

export const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
       <User/>
        <div className="icon">
          <img src={Friends} alt="" />
          <span>Friends</span>
        </div>
        <div className="icon">
          <img src={Groups} alt="" />
          <span>Groups</span>
        </div>
        <div className="icon">
          <img src={Market} alt="" />
          <span>Market</span>
        </div>
        <div className="icon">
          <img src={Watch} alt="" />
          <span>Watch</span>
        </div>
        <div className="icon">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>

        <hr />
        <span>Your shortcuts</span>
        <div className="icon">
          <img src={Event} alt="" />
          <span>Event</span>
        </div>
        <div className="icon">
          <img src={Gaming} alt="" />
          <span>Gaming</span>
        </div>
        <div className="icon">
          <img src={Gallery} alt="" />
          <span>Gallery</span>
        </div>
        <div className="icon">
          <img src={Videos} alt="" />
          <span>Videos</span>
        </div>
        <div className="icon">
          <img src={Messages} alt="" />
          <span>Messages</span>
        </div>

        <hr />
        <span>Others</span>
        <div className="icon">
          <img src={Fund} alt="" />
          <span>Fundraiser</span>
        </div>
        <div className="icon">
          <img src={Courses} alt="" />
          <span>Courses</span>
        </div>
        <div className="icon">
          <img src={Tutorials} alt="" />
          <span>Tutorials</span>
        </div>
        </div>
      </div>
    </div>
  )
}
