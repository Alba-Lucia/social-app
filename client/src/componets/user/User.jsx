import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./user.scss";

const User = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="user">
      <img
        src={currentUser.ProfilePic}
        alt=""
      />
      <p>{currentUser.name}</p>
    </div>
  );
};

export default User;
