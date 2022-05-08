import "./register.css";
import { useRef, useState } from "react";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };

  return (
    <div className="register">
      <div className="top">
          <div className="wrapper">
              <div className="logo">Strack </div>
              <button className="loginButton">Sign In</button>
          </div>
      </div>
      <div className="container">
      <h1>Your Organization is in safe hands.</h1>
          <h2>Controll anywhere. Cancel anytime</h2>
          <p>Ready to start? Enter your email to create or restart your membership </p>{
              !email ? (<div className="input">
              <input type="email" placeholder="Email" ref={emailRef}/>
              <button className="registerButton" onClick={handleStart}>Get Started</button>
          </div>) : (
            <form className="input">
              <input type="password" placeholder="Password" ref={passwordRef}/>
              <button className="registerButton" onClick={handleFinish}>Join</button>
          </form>
          )
          }

          
      </div>
    </div>
  )
}
