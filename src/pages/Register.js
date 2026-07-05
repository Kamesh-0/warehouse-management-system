import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/ProductService";
import { toast } from "react-toastify";
import "./Login.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createAccount = async () => {
    try {
      await registerUser(user);
      toast.success("Account Created Successfully");
      navigate("/");
    } catch (error) {
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left"></div>

      <div className="login-right">
        <div className="login-box">
          <h2>Create Account</h2>

          <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} />
          <input name="username" type="text" placeholder="Username" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />

          <button onClick={createAccount}>Create Account</button>

          <p>Already have an account?</p>

          <button onClick={() => navigate("/")}>Back to Login</button>
        </div>
      </div>
    </div>
  );
}

export default Register;