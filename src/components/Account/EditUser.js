import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./account.css";

const EditUser = () => {
  const [user, setUser] = useState();
  const [firstShow, setFirstShow] = useState(false);
  const [lastShow, setLastShow] = useState(false);
  const [emailShow, setEmailShow] = useState(false);
  const [passwordshow, setPasswordShow] = useState(false);
  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState("");

  const inputRef = useRef();
  const onFileChangeCapture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const inputHandler = () => {
    inputRef.current.click();
  };
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/user/", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUser(response.data.user));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      first_name,
      last_name,
      email,
      password,
      image: base64Image,
    };
    console.log(data);

    axios.defaults.withCredentials = true;

    axios
      .post("https://app.cloud4c2.com/api/user/edit", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })

      .then((res) => {
        if (res.data.message === "User successfully updated!") {
          alert(res.data.message);
          e.target.reset();
        }
      });
  };

  return (
    <div className="user__set bg-white lg:rounded-l-[50px]  p-[40px] md:px-[100px] md:py-[40px]">
      <div className="user__inner">
        <div className="user__info text-center">
          <h3 className="commissioner text-[30px] font-[600] leading-[37px]">
            {" "}
            <a href="#!">Edit user</a>{" "}
          </h3>

          <form onSubmit={handleSubmit}>
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              onChangeCapture={onFileChangeCapture}
              className="file-input w-full hidden  border-0 bg-white"
              onChange={handleImageChange}
            />
            {file === null ? (
              <div
                onClick={inputHandler}
                className="profile relative cursor-pointer mt-[44px] mb-[80px]"
              >
                <img
                  className="profile_img mx-auto w-[262px] h-[262px] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrR1QgdaFVmP3uVbCdkh13ZEa6o8Zt4UY9A&usqp=CAU"
                  alt=""
                />
                <p className="commissioner absolute text-white change font-[500]">
                  Change Image
                </p>
              </div>
            ) : (
              <div
                onClick={inputHandler}
                className="profile relative cursor-pointer mt-[44px] mb-[80px]"
              >
                <img
                  className="profile_img mx-auto w-[262px] h-[262px] rounded-full"
                  src={file}
                  alt=""
                />
                <p className="commissioner absolute text-white change font-[500]">
                  Change Image
                </p>
              </div>
            )}
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
    </div>
  );
};

export default EditUser;
