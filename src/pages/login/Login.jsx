import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

export const Login = () => {

  const {login} = useContext(AuthContext)

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hollo world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur doloribus accusamus dolorem laboriosam repellat numquam
            expedita harum quod ducimus, quibusdam officiis perferendis animi.
            Et minus rem soluta adipisci, qui deleniti.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="password" />
            <button
              onClick={handleLogin}
            >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
