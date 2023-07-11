import React from "react";
import "./login.css";
const Login: React.FC = () => {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
