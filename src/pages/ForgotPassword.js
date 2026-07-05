import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  sendOtp,
  verifyOtp,
  resetPassword
} from "../services/ProductService";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const sendOtpToEmail = async () => {
    await sendOtp({ email });
    alert("OTP Sent Successfully");
  };

  const verifyUserOtp = async () => {
    const response = await verifyOtp({
      email: email,
      password: otp
    });

    alert(response.data);
  };

  const changePassword = async () => {
    await resetPassword({
      username: email,
      password: password
    });

    alert("Password Updated Successfully");
    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-left"></div>

      <div className="login-right">

        <div className="login-box">

          <h2>Forgot Password</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={sendOtpToEmail}>
            Send OTP
          </button>

          <br /><br />

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button onClick={verifyUserOtp}>
            Verify OTP
          </button>

          <br /><br />

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={changePassword}>
            Update Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;