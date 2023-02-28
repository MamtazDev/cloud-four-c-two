import React from "react";
import "./Register.css";
import loginLogo from "../../assets/login_logo.png";
import BlueButton from "../../utils/BlueButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-[60px]">
      <div className="login_container ">
        <img className="mx-auto mb-[71px]" src={loginLogo} alt="" />
        <p className="text-center text-[#C9312E] text-[36px] font-[500] mb-[50px] font_family">
          Login to your account
        </p>
        <form>
          <div className="mb-[33px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              Email address <sup className="text-[#C9312E]">*</sup>
            </label>
            <input type="email" className="input input-bordered w-full h-[56px]" />
          </div>
          <div className="mb-[33px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              Password <sup className="text-[#C9312E]">*</sup>
            </label>
            <input type="password" className="input input-bordered w-full h-[56px]" />
          </div>
          <div className="mb-[42px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              Key
            </label>
            <input type="email" className="input input-bordered w-full h-[56px]" />
          </div>
          <div className="flex justify-center gap-[30px] mb-[30px]">
            <Link to="/register">
            <BlueButton>Register</BlueButton>
            </Link>
            <BlueButton>Log In</BlueButton>
          </div>
          <p className=" text-[20px] font-[300] text-center">
            <span className="key">I forgot my password or lost my key</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
