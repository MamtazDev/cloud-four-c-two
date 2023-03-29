import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./account.css";

const Account = () => {
  const [user, setUser] = useState();
  const [firstShow, setFirstShow] = useState(false);
  const [lastShow, setLastShow] = useState(false);
  const [emailShow, setEmailShow] = useState(false);
  const [passwordshow, setPasswordShow] = useState(false);
  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const navigate = useNavigate();

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
  console.log(user);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/user/", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUser(response.data.user))
      .catch((err) => {
        if (err.response.status === 403) {
        navigate("/")
        }
      });
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    // const password = e.target.password.value;
    const data = {
      first_name,
      last_name,
      email,
      // password,
      // image: base64Image ? base64Image : user.image,
      user_image: base64Image ? base64Image : user.image,
      // user_id: user?.user_id,
    };
    console.log(data, "data");

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
          setUser(res.data.user);
          setFirstShow(false);
          setLastShow(false);
          setEmailShow(false);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
        navigate("/")
        }
      });
  };

  const handleLogOut = () => {
    axios.post("https://app.cloud4c2.com/api/user/logout").then((res) => {
      if (res.data.message === "Logged out") {
        navigate("/");
      }
    });
  };

  return (
    <div className="user__set bg-white lg:rounded-l-[50px] h-full p-[40px] md:px-[100px] md:py-[40px]">
      <div className="user__inner">
        <div className="user__info text-center">
          <h3 className="commissioner text-[30px] font-[600] leading-[37px]">
            {" "}
            <a href="#!">My Account</a>
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
                  src={user?.image}
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
                <div className="label commissioner">{user?.username}</div>
              </div>
              <div className="flex justify-between items-center mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0 text-[20px]">
                  First Name
                </label>
                <input
                  className={
                    firstShow === true
                      ? "block pl-4 border h-[40px] w-[288px] rounded-[7px]"
                      : "hidden "
                  }
                  type="text"
                  name="first_name"
                  Value={user?.first_name}
                />
                <p
                  className={
                    firstShow === true ? "hidden" : "block text-start py-2"
                  }
                >
                  {user?.first_name}
                </p>
                <a
                  onClick={() => setFirstShow(true)}
                  className="commissioner"
                  href="#!"
                >
                  Change
                </a>
              </div>
              <div className="flex justify-between items-center w-full mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0">Last Name</label>
                <input
                  className={
                    lastShow === true
                      ? "block pl-4 border h-[40px] w-[288px] rounded-[7px]"
                      : "hidden "
                  }
                  type="text"
                  name="last_name"
                  Value={user?.last_name}
                />
                <p
                  className={
                    lastShow === true ? "hidden" : "block text-start py-2"
                  }
                >
                  {user?.last_name}
                </p>
                <a
                  onClick={() => setLastShow(true)}
                  className="commissioner"
                  href="#!"
                >
                  Change
                </a>
              </div>
              <div className="flex justify-between items-center w-full mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0">Email</label>
                <input
                  className={
                    emailShow === true
                      ? "block pl-4 border h-[40px] w-[288px] rounded-[7px]"
                      : "hidden "
                  }
                  type="email"
                  name="email"
                  Value={user?.email}
                />
                <p
                  className={
                    emailShow === true ? "hidden" : "block text-start py-2"
                  }
                >
                  {user?.email}
                </p>
                <a
                  onClick={() => setEmailShow(true)}
                  className="commissioner"
                  href="#!"
                >
                  Update
                </a>
              </div>
              {/* <div className="flex justify-between items-center w-full mb-[25px] text-[20px] leading-[24px]">
                <label className="label commissioner p-0">Password</label>
                <input
                  className={
                    passwordshow === true
                      ? "block pl-4 border h-[40px] w-[288px] rounded-[7px]"
                      : "hidden "
                  }
                  type="password"
                  name="password"
                />
                <p
                  className={
                    passwordshow === true ? "hidden" : "block text-start py-2"
                  }
                >
                  *******
                </p>
                <a
                  onClick={() => setPasswordShow(true)}
                  className="commissioner"
                  href="#!"
                >
                  Update
                </a>
              </div> */}
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
          <div className="flex justify-center md:justify-between  items-center mb-[25px] text-[20px] leading-[24px]">
            <label className="label hidden md:block invisible commissioner">
              Last Name
            </label>
            <button
              onClick={handleLogOut}
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
            >
              Logout
            </button>

            <a className="hidden md:block invisible" href="#!">
              Change
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
