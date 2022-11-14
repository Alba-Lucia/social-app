import {Link} from "react-router-dom"
import "./register.scss";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hollo world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur doloribus accusamus dolorem laboriosam repellat numquam
            expedita harum quod ducimus, quibusdam officiis perferendis animi.
            Et minus rem soluta adipisci, qui deleniti.
          </p>
          <span>Don you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
