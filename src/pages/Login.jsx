import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginFormvalidator = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email Adress")
    .required("email is rquired"),
  password: yup.string().required("password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormvalidator) });
  const redirect = useNavigate();
  const [error, setError] = useState(false);

  const onLogin = (data) => {
    console.log(data);
    const { email, password } = data;
    if (email === "johndoe@gmail.com" && password === "password") {
      //redirect
      redirect("/timeline");
    } else {
      //show error
      setError(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onLogin)} className="myform shadow-2xl">
        <h1 className="text-2xl">Login to Continue</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <input
          type="password"
          className={`input mt-2 w-full ${
            errors.password ? "border-red-500" : ""
          }`}
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-red-500">{errors.password?.message}</p>
        {error && (
          <div className="rounded-md w-full bg-red-300 p-3 my-2">
            <p className="text-red-500">Invalid email or password</p>
          </div>
        )}
        <button className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
