import React, { useRef, useState } from "react";
import "./account.css";

const Account = () => {
  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState('');

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

  // console.log(base64Image)

  const inputHandler = () => {
    inputRef.current.click();
  };

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
      image: base64Image
    };
    console.log(data);

    fetch("https://app.cloud4c2.com/api/user/edit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Invalid token: JsonWebTokenError") {
          e.target.reset();
          window.location.reload(true);
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div className="user__set bg-white lg:rounded-l-[50px] h-full p-[40px] md:px-[100px] md:py-[40px]">
      <div className="user__inner">
        <div className="user__info text-center">
          <h3 className="commissioner text-[30px] font-[600] leading-[37px]">
            {" "}
            <a href="#!">My Account</a> / <a href="#!">Edit user</a>{" "}
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
            <div className="user__log flex flex-col justify-between">
              <div className="flex w-full max-w-[400px] md:max-w-[445px] mb-[30px] justify-between text-[20px] font-[500] leading-[24px]">
                <div className="label commissioner">Username</div>
                <div className="label commissioner">My_cernamnet_username</div>
              </div>
              <div className="flex justify-between items-center mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0 text-[20px]">
                  First Name
                </label>
                <input
                  className="pl-4 border h-[40px] w-[288px] rounded-[7px]"
                  type="text"
                  name="first_name"
                />
                <a className="commissioner" href="#!">
                  Change
                </a>
              </div>
              <div className="flex justify-between items-center w-full mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0">Last Name</label>
                <input
                  className="pl-4 border h-[40px] w-[288px] rounded-[7px]"
                  type="text"
                  name="last_name"
                />
                <a className="commissioner" href="#!">
                  Change
                </a>
              </div>
              <div className="flex justify-between items-center w-full mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0">Email</label>
                <input
                  className="pl-4 border h-[40px] w-[288px] rounded-[7px]"
                  type="email"
                  name="email"
                />
                <a className="commissioner" href="#!">
                  Update
                </a>
              </div>
              <div className="flex justify-between items-center w-full mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0">Password</label>
                <input
                  className="pl-4 border h-[40px] w-[288px] rounded-[7px]"
                  type="password"
                  name="password"
                />
                <a className="commissioner" href="#!">
                  Update
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-between  items-center mb-[25px] text-[20px] leading-[24px]">
              <label className="label hidden md:block invisible commissioner">
                Last Name
              </label>
              <button
                type="submit"
                className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              >
                Save
              </button>
              <a className="hidden md:block invisible" href="#!">
                Change
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
