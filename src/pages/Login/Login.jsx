import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
      <div className="wrapper">
      <div className="logo">Strack </div>

      </div>
      </div>
      <div className="container">
        <form >
          <h1>Sign In</h1>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className="loginButton">Sign In</button>
          <span>New to Strack? <b>Sign up now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a robot. <b>Learn more now.</b>
          </small>
        </form>
      </div>
    </div>
  )
}
