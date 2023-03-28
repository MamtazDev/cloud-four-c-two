import React, { useContext, useEffect, useState } from "react";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton3 from "../../utils/ProjectButton3";
import { MdKeyboardArrowRight } from "react-icons/md";
import imgSeen from "../../assets/person1.png";
import { UserContext } from "../../context/AuthProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  const { userList, setUserList } = useContext(UserContext);

  const [searchText, SetSearchText] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/user/list", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUserList(response.data.users));
  }, []);

  const handleUserSearchFilter = (user) => {
    if (searchText) {
      return user.username.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return true;
    }
  };

  const handleCancel = () => {
    navigate(`/dashboard/projectDetails/${id}`);
  };

  const handleAccept = () => {
    const data = {
      user_id: user?.user_id,
      role,
    };
    axios
      .post(`https://app.cloud4c2.com/api/project/add_user/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data.message === "user added to project") {
          alert(res.data.message);
          navigate(`/dashboard/projectDetails/${id}`);
        }
      });
  };

  console.log(userList, "useress");
  return (
    <div className="addUser bg-white lg:rounded-l-[50px]  w-full  xl:h-full flex justify-center items-center">
      <div className="addUser__inner p-12 max-w-[900px] border-[1px] rounded-[16px] border-[#d5d5d5]">
        <ProjectButton>Add User</ProjectButton>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#F8FAFF] p-6 rounded-[40px] overflow-hidden">
            <input
              type="search"
              className="search_bg border h-[40px] rounded-[36px] pl-10 w-full mb-3"
              placeholder="Search"
              onChange={(e) => SetSearchText(e.target.value)}
            />
            {/* <div className="flex gap-[6px] overflow-x-scroll overflow-auto mb-[25px]">
              {userList &&
                userList.length > 0 &&
                userList?.map((user) => (
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={user?.image} />
                    </div>
                  </div>
                ))}
            </div> */}

            <div className="h-[368px] overflow-y-scroll">
              {userList &&
                userList.length > 0 &&
                userList?.filter(handleUserSearchFilter).map((i) => (
                  <div
                    className={`flex items-center gap-4 relative mb-[12px] hover:bg-gray-200 cursor-pointer ${
                      user?.user_id === i.user_id && "bg-gray-200"
                    }`}
                    onClick={() => setUser(i)}
                  >
                    <div className="avatar online">
                      <div className="w-16 rounded-full">
                        <img src={i.image} />
                      </div>
                    </div>

                    <div>
                      <p className="poppins text-[20px] font-[600]">
                        {i.username}
                      </p>
                      {/* <p className="poppins text-[12px] font-[400]">
                      You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18
                    </p> */}
                      {/* <img
                      className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute"
                      src={imgSeen}
                      alt="image"
                    /> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="">
            <div className="flex flex-col w-[121px] ">
              {/* <button className="commissioner w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px  font-[500] rounded-[8px] p-[8px] mb-[10px]">
                Filter
              </button> */}
              <div className="dropdown dropdown-right">
                <label tabIndex={0}>
                  {" "}
                  <button className="commissioner flex  items-center justify-center w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px  font-[500] rounded-[8px] p-[8px] mb-[10px]">
                    Role <MdKeyboardArrowRight />
                  </button>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2  bg-base-100 rounded-box w-52 right-[0]"
                >
                  <li>
                    <a className="commissioner text-[#3853A4] ">
                      {/* <ProjectButton3>Analyst</ProjectButton3> */}
                      <button
                        className={`${
                          role === "analyst" && "bg-gray-300"
                        } commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]`}
                        onClick={() => setRole("analyst")}
                      >
                        Analyst
                      </button>
                    </a>
                  </li>
                  <li>
                    <a className="commissioner text-[#3853A4]">
                      {" "}
                      {/* <ProjectButton3>Viewer</ProjectButton3> */}
                      <button
                        className={`${
                          role === "viewer" && "bg-gray-300"
                        } commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]`}
                        onClick={() => setRole("viewer")}
                      >
                        Viewer
                      </button>
                    </a>
                  </li>
                </ul>
                {/* <label>{role}</label> */}
              </div>

              <div className="cencelation flex flex-col items-center">
                {/* <ProjectButton3>Cancel</ProjectButton3> */}
                <button
                  onClick={handleCancel}
                  className="commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]"
                >
                  Cancel
                </button>
                {/* <ProjectButton3>Accept</ProjectButton3> */}

                <button
                  onClick={handleAccept}
                  className="commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
