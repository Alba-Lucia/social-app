import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const {login} = useContext(AuthContext)

  const navigate = useNavigate() 

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    } catch (error) {
      // setError(error.response.data)
    }
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
            <input 
            type="email" 
            name="email"
            placeholder="email" onChange={handleChange}/>
            <input type="password" 
                          name="password"
            placeholder="password" onChange={handleChange}/>
            <button
              onClick={handleLogin}
            >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
