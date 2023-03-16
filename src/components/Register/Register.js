import React from "react";
import "./Register.css";
import loginLogo from "../../assets/login_logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleInputImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await this.convertBase64(file);
    console.log(base64);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

    const data = {
      username,
      first_name,
      last_name,
      email,
      password,
      role,
    };

    console.log(data);
    fetch("https://app.cloud4c2.com/api/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Invalid token: JsonWebTokenError") {
          alert(data.message);
        } else {
          e.target.reset();
          window.location.reload(true);
          navigate("/dashboard/project");
        }
      });
  };

  return (
    <div className="py-[60px]">
      <div className="login_container ">
        <img className="mx-auto mb-[61px]" src={loginLogo} alt="" />
        <p className="outfit text-center text-[20px] font-[500] mb-[12px]">
          Register a new account
        </p>
        <p className="outfit text-center text-[#C9312E] text-[25px] font-[500] mb-[40px]">
          If there is an error registering, display it here
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-[33px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              Username <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="text"
              className="input input-bordered w-full h-[56px]"
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
              name="password"
            />
            <p className="outfit text-[12px] font-[400] text-[#767676]">
              Minimum 8 characters
            </p>
          </div>
          <div className="mb-[42px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              Email <sup className="text-[#C9312E]">*</sup>
            </label>
            <input
              type="email"
              className="input input-bordered w-full h-[56px]"
              name="email"
            />
          </div>
          <div className="mb-[42px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              First
            </label>
            <input
              type="text"
              className="input input-bordered w-full h-[56px]"
              name="first_name"
            />
          </div>
          <div className="mb-[42px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              Last
            </label>
            <input
              type="text"
              className="input input-bordered w-full h-[56px]"
              name="last_name"
            />
          </div>
          <div className="mb-[42px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              Role
            </label>
            <select name="role">
              <option value="analyst">Analyst</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="hidden mb-[42px]">
            <label className="outfit text-[20px] font-[300] mb-[10px] block">
              Image
            </label>
            <input
              type="file"
              name="image"
              className="opacity-0 cursor-pointer absolute top-0 "
              onChange={handleInputImage}
              accept={"image/*"}
            />
          </div>
          <div className="flex justify-center gap-[30px] mb-[30px]">
            <button
              type="submit"
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
