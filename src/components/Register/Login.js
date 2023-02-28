import React from "react";
import "./Register.css";
import loginLogo from "../../assets/login_logo.png";

const Login = () => {
  return (
    <div className="py-[60px]">
        
    <div className="login_container shadow ">
      <img className="mx-auto mb-[71px]" src={loginLogo} alt="" />
      <p className="text-center text-[#C9312E] text-[36px] font-[500] mb-[50px]">
        Login to your account
      </p>
    </div>
    </div>
  );
};

export default Login;
