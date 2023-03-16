import React from "react";
import "./Register.css";
import loginLogo from "../../assets/login_logo.png";
import BlueButton from "../../utils/BlueButton";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const data = {
      username,
      password,
    };
    console.log(data);
    fetch("https://app.cloud4c2.com/api/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "logged in.") {
          e.target.reset();
          window.location.reload(true);
          navigate("/dashboard/project");
        } else {
          alert("Log in is not successful");
        }
      });
  };

  return (
    <div className=" py-[60px]">
      <div className="login_container ">
        <img className="mx-auto mb-[71px]" src={loginLogo} alt="" />
        <p className="outfit text-center text-[#C9312E] text-[36px] font-[500] mb-[50px] font_family">
          Login to your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-[33px]">
            <label className=" outfit text-[20px] font-[300] mb-[10px] block">
              Username <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="text"
              className="input input-bordered w-full h-[56px]"
              required
              name="username"
            />
          </div>
          <div className="mb-[33px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              Password <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="password"
              className="input input-bordered w-full h-[56px]"
              required
              name="password"
            />
          </div>
          <div className="mb-[42px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              Key <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="text"
              maxlength="6"
              className="input input-bordered w-full h-[56px]"
            />
          </div>
          <div className="flex justify-center gap-[30px] mb-[30px]">
            <Link to="/register">
              <BlueButton>Register</BlueButton>
            </Link>

            <button
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              type="submit"
            >
              Log In
            </button>
          </div>
          <p className="pointer text-[20px] font-[300] text-center">
            <span className="key outfit">
              I forgot my password or lost my key
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
