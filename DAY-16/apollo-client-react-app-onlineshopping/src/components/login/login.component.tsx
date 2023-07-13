import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_QUERY } from "../../graphql/querries";

type LoginInput = {
  uname: string;
  pwd: string;
};
const Login: React.FC = () => {
  let navigate = useNavigate();
  const [login, { loading, error, data }] = useLazyQuery(LOGIN_QUERY);

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
          onSubmit={handleSubmit((formdata: LoginInput) => {
            login({ variables: { ...formdata } }).then(res => console.log(res));
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

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VtZWV0IiwibGFzdExvZ2luIjoiTW9uZGF5IDI1dGgiLCJpYXQiOjE2ODkyNDQ2ODMsImV4cCI6MTY4OTI1MTg4M30.FuJSoSxoNqLE_Q7AWAgZlHpZHturbF6ekTHAylKGS50";
