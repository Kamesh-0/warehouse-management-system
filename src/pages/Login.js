import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/ProductService";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await loginUser(user);

      if (response.data) {
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        toast.error("Invalid Username or Password");
      }
    } catch (error) {
      toast.error("Login Failed");
    }
  };

  const googleSuccess = () => {
    toast.success("Google Login Successful");
    navigate("/dashboard");
  };

  const googleError = () => {
    toast.error("Google Login Failed");
  };

  return (
    <div className="login-page">
      <div className="login-left"></div>

      <div className="login-right">
        <div className="login-box">
          <h2>Warehouse Login</h2>

          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <button onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </button>

          <button onClick={login}>Login</button>

          <div style={{ marginTop: "15px" }}>
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={googleError}
            />
          </div>

          <p>Don't have an account?</p>

          <button onClick={() => navigate("/register")}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;