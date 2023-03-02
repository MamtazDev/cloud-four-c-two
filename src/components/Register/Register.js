import React from "react";
import BlueButton from "../../utils/BlueButton";
import "./Register.css";
import loginLogo from "../../assets/login_logo.png";

const Register = () => {
  return (
    <div className="py-[60px]">
      <div className="login_container ">
        <img className="mx-auto mb-[61px]" src={loginLogo} alt="" />
        <p className="text-center text-[20px] font-[500] mb-[12px]">
          Register a new account
        </p>
        <p className="text-center text-[#C9312E] text-[25px] font-[500] mb-[40px]">
          If there is an error registering, display it here
        </p>
        <form>
          <div className="mb-[33px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              Username  <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="text"
              className="input input-bordered w-full h-[56px]"
            />
          </div>
          <div className="mb-[33px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              Password <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="password"
              className="input input-bordered w-full h-[56px]"
            />
            <p className="text-[12px] font-[400] text-[#767676]">
              Minimum 8 characters
            </p>
          </div>
          <div className="mb-[42px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              Email <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="email"
              className="input input-bordered w-full h-[56px]"
            />
          </div>
          <div className="mb-[42px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              First
            </label>
            <input
              type="text"
              className="input input-bordered w-full h-[56px]"
            />
          </div>
          <div className="mb-[42px]">
            <label className="text-[20px] font-[300] mb-[10px] block">
              Last
            </label>
            <input
              type="text"
              className="input input-bordered w-full h-[56px]"
            />
          </div>
          <div className="flex justify-center gap-[30px] mb-[30px]">
            <BlueButton>Register</BlueButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
