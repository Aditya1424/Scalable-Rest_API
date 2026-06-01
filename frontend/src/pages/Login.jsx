import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import api from "../api/axios";

function Login() {

  const navigate =
    useNavigate();

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      const response =
        await api.post(
          "/auth/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        "Login Failed"
      );

    }

  };

  return (

    <div>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button>
          Login
        </button>

      </form>

    </div>

  );
}

export default Login;