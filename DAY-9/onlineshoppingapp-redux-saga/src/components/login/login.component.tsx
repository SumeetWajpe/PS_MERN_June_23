import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type LoginInput = {
  uname: string;
  pwd: string;
};
const Login: React.FC = () => {
  let navigate = useNavigate();
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
                if (response.msg === "success") {
                  navigate("/dashboard");
                }
              });
          })}
        >
          <input
            type="text"
            className="fadeIn second"
            placeholder="login"
            {...register("uname")}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
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
