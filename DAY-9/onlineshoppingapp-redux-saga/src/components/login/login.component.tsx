import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuthenticated } from "../../redux/reducers/user.reducer";

type LoginInput = {
  uname: string;
  pwd: string;
};
const Login: React.FC = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form
          onSubmit={handleSubmit((data: LoginInput) => {
            // console.log(data);
            fetch("http://localhost:5555/auth/login", {
              method: "POST",
              body: JSON.stringify(data),
            })
              .then(res => res.json())
              .then(response => {
                if (response.token) {
                  dispatch(
                    setUserAuthenticated({
                      isUserAuthenticated: true,
                      uname: data.uname,
                      token: response.token, // set the token
                    }),
                  );
                  navigate(location.state ?? "/dashboard", {
                    replace: true,
                  });
                }
              });
          })}
        >
          <input
            type="text"
            className="fadeIn second login-input"
            placeholder="login"
            {...register("uname")}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third login-input"
            placeholder="password"
            {...register("pwd")}
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
