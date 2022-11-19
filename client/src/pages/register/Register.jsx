import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";
import { useReducer } from "react";

export const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate()
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/users/register", input);
      navigate("/login")
    } catch (error) {
      // setError(error.response.data);
    }
  };


  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("posts/timeline/637644809b0f5d23c6c90d55")
  //     console.log(res)
  //   }
  //   fetchPosts()
  // }, [])

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
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handleClick}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
