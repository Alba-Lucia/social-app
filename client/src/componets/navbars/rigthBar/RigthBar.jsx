import "./rigthBar.scss";
import User from "../../user/User";

export const RigthBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <User />
            <div className="buttons">
              <button className="button-sm ">follow</button>
              <button className="button-sm ">dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Last Activities</span>
          <div className="user">
            <div className="userinfo">
              <User />
              <span>Chan</span>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <User />
              <span>Chan</span>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <User />
              <span>Chan</span>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="online" />
            <User />
          </div>
          <div className="user">
            <div className="online" />
            <User />
          </div>
          <div className="user">
            <div className="online" />
            <User />
          </div>
          <div className="user">
            <div className="online" />
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};
