import React, { useEffect, useState } from "react";
import BlueButton from "../../utils/BlueButton";
import girl from "../../assets/girl.png";
import bob from "../../assets/bob.png";
import sarah from "../../assets/sarah.png";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProjectCopy from "./ProjectCopy";
import StartSession from "./StartSession";
import AddUser from "./AddUser";
import { BiEdit } from "react-icons/bi";

const ProjectDetails = () => {
  const [name, setName] = useState(false);
  const [user, setUser] = useState();
  const [description, setDescription] = useState(false);
  const [project, setProject] = useState();
  const [projectLog, setProjectLog] = useState([]);
  const { id } = useParams();
  const [deletesession, setDelete] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleDeleteSession = (id) => {
    axios
      .post(`https://app.cloud4c2.com/api/session/delete/${id}`)
      .then((res) => {
        if (res.data.message === "session deleted") {
          setDelete(!deletesession);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };

  const handleUserRemove = (UserId) => {
    axios
      .post(`https://app.cloud4c2.com/api/project/remove_user/${id}`, {
        user_id: UserId,
      })
      .then((res) => {
        if (res.data.message === "you removed someone from the project") {
          alert(res.data.message);
          window.location.reload(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };

  const handleSessionDetails = (id) => {
    console.log(id);
    axios
      .post(`https://app.cloud4c2.com/api/session/details/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => console.log(response.data.session))
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };

  useEffect(() => {
    axios
      .post(`https://app.cloud4c2.com/api/project/details/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setProject(response.data.project))
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  }, [deletesession, id, navigate]);
  console.log(project);
  const handleLeave = (id) => {
    axios
      .post(`https://app.cloud4c2.com/api/project/leave/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data.message === "you left the project") {
          alert(res.data.message);
          window.location.reload(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };
  useEffect(() => {
    axios
      .post(`https://app.cloud4c2.com/api/project/logs/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setProjectLog(response.data.log_strings))
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  }, [id, navigate]);
  const dateFormat = (date) => {
    const formatDate = new Date(date);
    const neww = formatDate.toDateString();
    return neww;
  };

  const handleProjectName = (projectId) => {
    if (projectId === id) {
      return project.name;
    }

    // axios
    // .post(`https://app.cloud4c2.com/api/project/details/${projectId}`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    // })
    // .then((response) => setProject(response.data.project))
  };
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
          navigate("/");
        }
      });
  }, [navigate]);
  console.log("neww", user);

  return (
    <div className="bg-[#FFFBFB] lg:py-[61px] lg:px-[57px] lg:rounded-[50px] p-4">
      <div className="max-w-[1091px]">
        <div className="mb-[57px]">
          <span className={user?.role === "administrator" ? "hidden" : "block"}>
            <BlueButton>
              <span onClick={() => handleLeave(project.project_id)}>
                {" "}
                Leave Project
              </span>{" "}
            </BlueButton>
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-[40px]">
          <div>
            {name ? (
              <input
                type="text"
                className="border w-full py-4 mb-4 px-3 rounded-md"
              />
            ) : (
              <button
                className="flex items-center justify-between px-4 commissioner outline_btn w-full mb-[20px] py-[18px] font-[500]"
                type=""
              >
                {project?.name} <BiEdit onClick={() => setName(true)} />
              </button>
            )}
            {description ? (
              <input
                type="text"
                className="border w-full py-4 mb-4 px-3 rounded-md"
              />
            ) : (
              <button
                className="flex items-center justify-between px-4 commissioner outline_btn w-full mb-[20px] py-[18px] font-[500]"
                type=""
              >
                {project?.description
                  ? project?.description
                  : "Project Description"}{" "}
                <BiEdit onClick={() => setDescription(true)} />
              </button>
            )}

            {/* <button
              className="commissioner outline_btn w-full py-[18px] font-[500] mb-[20px]"
              type=""
            >
              Edit description
            </button> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] mb-[20px]">
              <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                Disable project
              </button>
              <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                Delete project
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
              {/* <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                <Link to={`/dashboard/projectCopy/${id}`}>Copy project</Link>
              </button> */}
              {/* The button to open modal */}
              <label
                htmlFor="my-modal-3"
                className="text-center bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]"
              >
                {" "}
                Copy project
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <ProjectCopy myModal={"my-modal-3"} />
                </div>
              </div>

              <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                Edit project
              </button>
              <button className="bg-[#3853A4] py-[17px] text-white text-[16px] font-[500] rounded-[5px]">
                Change image
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-[12px] h-[305px] w-full"
              src={project?.image}
              // src={girl}
              alt=""
            />
          </div>
        </div>

        {/* session part */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="commissioner text-[16px] font-[500]">Sessions</p>
            {/* <BlueButton>New session</BlueButton> */}
            {/* <Link
              to={`/dashboard/startSession/${project?.project_id}`}
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              type="submit"
            >
              New session
            </Link> */}

            {/* The button to open modal */}
            <label
              htmlFor="my-modal-session"
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
            >
              {" "}
              New session
            </label>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="my-modal-session"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-session"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <StartSession myModal={"my-modal-session"} />
              </div>
            </div>
          </div>
          <div className="border border-[#3853A4] rounded-[5px] pb-[56px]">
            {project?.sessions?.map((session, index) => (
              <div className="flex ">
                <p className="commissioner font-[500] w-[210px] pl-[17px] py-[20px]">
                  Sessions {index + 1}{" "}
                </p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://cloud4c2.com/map/?sessionID=${session.session_id}`}
                  className="commissioner session_bg w-[111px] py-[20px] text-center font-[400]"
                >
                  Join
                </a>
                <button
                  onClick={() => handleDeleteSession(session.session_id)}
                  className="commissioner session_bg w-[226px] py-[20px] text-center font-[400]"
                >
                  Delete (ANALYST)
                </button>
                <button></button>

                {/* The button to open modal */}
                <label
                  onClick={() => handleSessionDetails(session.session_id)}
                  className="commissioner session_bg px-5 py-[20px] text-center font-[400]"
                  htmlFor={"my-modal" + session.session_id}
                >
                  {" "}
                  Details
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id={"my-modal" + session.session_id}
                  className="modal-toggle"
                />
                <label
                  htmlFor={"my-modal" + session.session_id}
                  className="modal cursor-pointer"
                >
                  <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">
                      Creation Time: {dateFormat(session.creation_time)}
                    </h3>
                    <p className="py-4">Creator: {session.creator}</p>
                    <p className="py-4">
                      Project Name: {handleProjectName(session.project_id)}
                    </p>
                    <p className="py-4">Session Id: {session.session_id}</p>
                  </label>
                </label>
                <Link to={`/dashboard/session-log/${session.session_id}`}>
                  <button className="commissioner session_bg w-[111px] py-[20px] text-center font-[400]">
                    Log
                  </button>
                </Link>
              </div>
            ))}
            {/* <div className="flex text-[16px]">
              <p className="commissioner w-[210px] font-[500] pl-[17px] py-[20px]">
                Sessions 02{" "}
              </p>

              <p className="commissioner session_bg  w-[111px] py-[20px] text-center font-[400]">
                Join
              </p>
              <p className="commissioner session_bg  w-[226px] py-[20px] text-center font-[400]">
                Delete (ANALYST)
              </p>
            </div> */}
          </div>
        </div>
        {/* user part */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="text-[16px] font-[500]">Users</p>
            {/* <BlueButton>Add user</BlueButton> */}
            {/* <Link
              to={`/dashboard/addUser/${project?.project_id}`}
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              type="submit"
            >
              Add user
            </Link> */}

            {/* The button to open modal */}
            <label
              htmlFor="my-modal-user"
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
            >
              {" "}
              Add user
            </label>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="my-modal-user"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box relative max-w-4xl rounded-[16px]">
                <label
                  htmlFor="my-modal-user"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <AddUser />
              </div>
            </div>
          </div>
          <div className="border border-[#3853A4] rounded-[5px] pb-[56px]">
            {project?.users?.map((user) => (
              <div key={user.user_id} className="flex ">
                <p className="flex items-center gap-[11px] font-[500] w-[210px] pl-[17px] py-[20px]">
                  <img width={36} src={user.image} alt="" /> {user.username}
                </p>

                <p
                  className=" session_bg w-[257px] py-[20px] text-center font-[400] cursor-pointer"
                  onClick={() => handleUserRemove(user.user_id)}
                >
                  Remove (ANALYST)
                </p>
                <select className=" session_bg w-[257px] py-[20px] text-center font-[400]">
                  <option disabled selected>
                    {" "}
                    Change role (ANALYST)
                  </option>
                  <option>Analyst</option>
                  <option>Viewer</option>
                </select>
              </div>
            ))}

            {/* <div className="flex text-[16px]">
              <p className="flex items-center gap-[11px] font-[500] w-[210px] pl-[17px] py-[20px]">
                <img width={36} src={sarah} alt="" /> Sarah
              </p>

              <p className=" session_bg  w-[257px] py-[20px] text-center font-[400]">
                Remove (ANALYST)
              </p>
              <p className=" session_bg  w-[257px] py-[20px] text-center font-[400]">
                Change role (ANALYST)
              </p>
            </div> */}
          </div>
        </div>
        {/* recent activity part */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="text-[16px] font-[500]">Recent Activity</p>
            <BlueButton>
              <Link to={`/dashboard/project-log/${id}`}> Full report</Link>
            </BlueButton>
          </div>
          <div className="border border-[#3853A4] rounded-[5px] pb-[56px] px-4">
            {projectLog.map((i, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{
                  __html: i.log,
                }}
              ></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
