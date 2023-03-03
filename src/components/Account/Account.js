import React, { useRef, useState } from "react";
import BlueButton from "../../utils/BlueButton";
import "./account.css";

const Account = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();
  const onFileChangeCapture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const inputHandler = () => {
    inputRef.current.click();
  };
  return (
    <div className="user__set bg-white lg:rounded-l-[50px] h-full">
      <div className="user__inner">
        <div className="user__info text-center">
          <h3 className="commissioner text-[30px] font-[600] leading-[37px]">
            {" "}
            <a href="#!">My Account</a> / <a href="#!">Edit user</a>{" "}
          </h3>

          <div>
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              onChangeCapture={onFileChangeCapture}
              className="file-input w-full hidden  border-0 bg-white"
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
          </div>

          {/* <div className="h-[200px] sm:h-[262px] w-[200px] sm:w-[262px] leading-[200px] sm:leading-[262px] mx-[auto] mt-[44px] mb-[80px] rounded-[50%] choose__Img">
            <p className="commissioner text-white font-[500]">Change Image</p>
          </div> */}
        </div>
        <div className="user__log flex flex-col justify-between w-[full] max-w-[656px]">
          <div className="flex w-full max-w-[400px] md:max-w-[465px] mb-[30px] justify-between text-[20px] font-[500] leading-[24px]">
            <div className="label commissioner">Username</div>
            <div className="label commissioner">My_cernamnet_username</div>
          </div>
          <div className="flex justify-between items-center w-full max-w-[656px] mb-[25px] text-[20px] leading-[24px]">
            <label className="label commissioner">First Name</label>
            <input
              className="border h-[40px] w-[288px] rounded-[7px]"
              type="text"
            />
            <a className="commissioner" href="#!">
              Change
            </a>
          </div>
          <div className="flex justify-between items-center w-full max-w-[656px] mb-[25px] text-[20px] leading-[24px]">
            <label className="label commissioner">Last Name</label>
            <input
              className="border h-[40px] w-[288px] rounded-[7px]"
              type="text"
            />
            <a className="commissioner" href="#!">
              Change
            </a>
          </div>
          <div className="flex justify-between items-center w-full max-w-[656px] mb-[25px] text-[20px] leading-[24px]">
            <label className="label commissioner">Email</label>
            <input
              className="border h-[40px] w-[288px] rounded-[7px]"
              type="text"
            />
            <a className="commissioner" href="#!">
              Update
            </a>
          </div>
          {/* <ul className="userInfo text-[20px] font-[400] leading-[24px]">
            <li className="text-[24px] font-[500] mb-[30px]">Username</li>
            <li className="mb-[25px]">First Name</li>
            <li className="mb-[25px]">Last Name</li>
            <li className="mb-[25px]">Email</li>
            <li className="invisible mb-[30px]">Last Name</li>
          </ul>
          <ul className="users__login flex flex-col">
            <li className="text-[24px] font-[500] mb-[30px]">
              My_cernamet_username
            </li>
            <input
              className="mb-[25px] border h-[46px] rounded-[7px]"
              type="text"
            />
            <input className="mb-[25px] border h-[46px] rounded-[7px]" type="text" />
            <input className=" border h-[46px] rounded-[7px]" type="email" />
          </ul>
          <ul className="text-[20px] font-[400] leading-[24px]">
            <li className="invisible mb-[30px]">Change</li>
            <li className="mb-[27px]">
              <a href="#!">Change</a>
            </li>
            <li className="mb-[27px]">
              <a href="#!">Change</a>
            </li>
            <li>
              <a href="#!">Update</a>
            </li>
          </ul> */}
        </div>
        <div className="flex justify-between items-center w-full max-w-[656px] mb-[25px] text-[20px] leading-[24px]">
          <label className="label invisible commissioner">Last Name</label>
          <BlueButton>Change password</BlueButton>
          <a className="invisible" href="#!">
            Change
          </a>
        </div>
      </div>
    </div>
  );
};

export default Account;
