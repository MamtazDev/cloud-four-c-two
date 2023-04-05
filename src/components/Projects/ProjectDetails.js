import React, { useContext, useEffect, useRef, useState } from "react";
import BlueButton from "../../utils/BlueButton";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProjectCopy from "./ProjectCopy";
import StartSession from "./StartSession";
import AddUser from "./AddUser";
import { BiEdit } from "react-icons/bi";
import { UserContext } from "../../context/AuthProvider";
import ProjectUpload from "./ProjectUpload";
import EditProject from "./EditProject";

const ProjectDetails = () => {
  const [name, setName] = useState(false);
  const [user, setUser] = useState();
  const { userList, setUserList } = useContext(UserContext);
  const [description, setDescription] = useState(false);
  const [project, setProject] = useState();
  const [projectLog, setProjectLog] = useState([]);
  const { id } = useParams();
  const [deletesession, setDelete] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const closeRef = useRef();

  const closeHandler = () => {
    closeRef.current.click();
  };

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

  const handleUserRemove = (projectId, userId) => {
    console.log(projectId, userId, "user project");
    axios
      .post(`https://app.cloud4c2.com/api/project/remove_user/${projectId}`, {
        user_id: userId,
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
  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/user/list", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUserList(response.data.users))
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  }, [navigate, setUserList]);

  // change image part

  const [files, setFile] = useState(null);
  const inputRef = useRef();
  const inputHandler = () => {
    inputRef.current.click();
  };

  const [base64Image, setBase64Image] = useState("");
  const onFileChangeCapture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleDelete = (id) => {
    axios
      .post(`https://app.cloud4c2.com/api/project/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })

      .then((res) => {
        console.log(res);
        // setProjects(projects.filter((item) => item.project_id !== res.data.user));
        if (res.data.message === "project successfully deleted.") {
          // window.location.reload(true);
          navigate("/dashboard/project");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };

  const handleDisabled = (project) => {
    const activation = {
      activate: project.active === true ? "false" : "true",
    };
    axios
      .post(
        `https://app.cloud4c2.com/api/project/activate/${project.project_id}`,
        activation,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      )
      .then((res) => {
        if (res.data.message === "Project activation changed") {
          alert(res.data.message);
          // window.location.reload(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };

  const handleEditor = (projectId) => {
    console.log("clicked on handleEditor");

    fetch(
      `app.cloud4c2.com/editor/?editorID=124ebb02-8d9c-4d28-a6c1-da523dbda0ee&projectID=${projectId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          credentials: "include",
        },
      }
    ).then((res) => {
      console.log("start editing", res);
      const fullUrl = res.url;
      console.log("URL:", fullUrl);
      const domain = fullUrl.split("/projectDetails/")[1];

      setTimeout(() => {
        redirectHandler(domain);
      }, 2000);

      // if (res.ok === true) {
      // navigate(`/${domain}`);
      // }
    });
  };

  const redirectHandler = (domain) => {
    console.log("Redirect function is triggered", domain);

    window.open(` ${"http://" + domain}`, "_blank");
  };

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
            <p
              className="flex items-center justify-between px-4 commissioner outline_btn w-full mb-[20px] py-[18px] font-[500]"
              type=""
            >
              {project?.name}
            </p>

            <p
              className="flex items-center justify-between px-4 commissioner outline_btn w-full mb-[20px] py-[18px] font-[500]"
              type=""
            >
              {project?.description
                ? project?.description
                : "Project Description"}{" "}
            </p>

            {/* <button
              className="commissioner outline_btn w-full py-[18px] font-[500] mb-[20px]"
              type=""
            >
              Edit description
            </button> */}
            {user?.role === "administrator" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] mb-[20px]">
                <button
                  onClick={() => handleDisabled(project)}
                  className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]"
                >
                  {project?.active === true
                    ? "Disable project"
                    : "Active project"}{" "}
                </button>
                <button
                  onClick={() => handleDelete(project.project_id)}
                  className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]"
                >
                  Delete project
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
              {/* <!-- The button to open modal --> */}
              <button
                disabled={user?.role === "viewer"}
                onClick={() => handleEditor(project.project_id)}
                className={
                  user?.role === "viewer"
                    ? "bg-red-500"
                    : "bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px] text-center"
                }
              >
                {" "}
                Open in Editor
              </button>

              {/* The button to open modal */}
              <label
                htmlFor="my-modal-copy"
                className="text-center bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]"
              >
                {" "}
                Copy project
              </label>
              {/* Put this part before </body> tag */}
              <input
                type="checkbox"
                id="my-modal-copy"
                className="modal-toggle"
              />
              <label htmlFor="my-modal-copy" className="modal">
                <label htmlFor="" className="modal-box relative">
                  <label
                    ref={closeRef}
                    htmlFor="my-modal-copy"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <ProjectCopy closeRef={closeHandler} myModal={"my-modal-3"} />
                  {/* <p onClick={() => closeHandler()}>Dihan</p> */}
                </label>
              </label>
              {/* <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                Edit project
              </button> */}
              {/* The button to open modal */}
              <label
                htmlFor="my-modal-edit"
                className={
                  user?.role === "viewer"
                    ? "bg-red-500"
                    : "bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px] text-center"
                }
              >
                {" "}
                Edit project
              </label>
              {/* Put this part before </body> tag */}
              <input
                type="checkbox"
                id="my-modal-edit"
                className="modal-toggle"
              />
              <label htmlFor="my-modal-edit" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <label
                    htmlFor="my-modal-edit"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  {/* <ProjectUpload /> */}
                  <EditProject id={project?.project_id} />
                </label>
              </label>
              {/* <button className="bg-[#3853A4] py-[17px] text-white text-[16px] font-[500] rounded-[5px]">
                Change image
              </button> */}
            </div>
          </div>
          <div>
            <img
              className="rounded-[12px] h-[305px] w-full"
              src={project?.image}
              alt=""
            />
          </div>
        </div>

        {/* session part */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="commissioner text-[16px] font-[500]">Sessions</p>

            {/* The button to open modal */}
            <label
              htmlFor="my-modal-session"
              className={
                user?.role === "viewer"
                  ? "bg-red-500"
                  : "outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              }
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

            <label htmlFor="my-modal-session" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <label
                  htmlFor="my-modal-session"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <StartSession myModal={"my-modal-session"} />
              </label>
            </label>
          </div>
          <div className="border border-[#3853A4] rounded-[5px]">
            {project?.sessions?.map((session, index) => (
              <div className="flex ">
                <p className="commissioner font-[500] p-2 lg:w-[210px] lg:pl-[17px] lg:py-[20px]">
                  {session.session_name ? session.session_name : "No Name"}
                </p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://cloud4c2.com/map/?sessionID=${session.session_id}`}
                  className="commissioner session_bg p-2 lg:w-[111px] lg:py-[20px] text-center font-[400]"
                >
                  Join
                </a>
                <button
                  onClick={() => handleDeleteSession(session.session_id)}
                  className={
                    user?.role === "viewer"
                      ? "bg-red-200"
                      : "commissioner session_bg p-2 lg:px-5 lg:py-[20px] text-center font-[400]"
                  }
                >
                  Delete {user?.role === "analyst" ? "(ANALYST)" : ""}
                </button>
                <button></button>

                {/* The button to open modal */}
                <label
                  onClick={() => handleSessionDetails(session.session_id)}
                  className="commissioner session_bg p-2 lg:px-5 lg:py-[20px] text-center font-[400]"
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
                    <h3 className="text-lg font-bold mb-4">
                      Creation Time: {dateFormat(session.creation_time)}
                    </h3>
                    {userList.map((creator, index) => (
                      <p className="" key={index}>
                        {" "}
                        {session.creator === creator.user_id
                          ? " Creator : " + creator.username
                          : ""}
                      </p>
                    ))}
                    {/* <p className="py-4">Creator: {session.creator}</p> */}
                    <p className="py-4">
                      Project Name: {handleProjectName(session.project_id)}
                    </p>
                    <p className="py-4">
                      Session Name :{" "}
                      {session.session_name ? session.session_name : "unset"}
                    </p>
                    <p className="py-4">
                      Description :{" "}
                      {session.session_description
                        ? session.session_description
                        : "unset"}
                    </p>
                  </label>
                </label>
                <Link to={`/dashboard/session-log/${session.session_id}`}>
                  <button className="commissioner session_bg lg:w-[111px] lg:py-[20px] p-2 text-center font-[400]">
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

            {/* The button to open modal */}
            <label
              htmlFor="my-modal-user"
              className={
                user?.role === "viewer"
                  ? "bg-red-500"
                  : "outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              }
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
            <label htmlFor="my-modal-user" className="modal">
              <label
                htmlFor=""
                className="modal-box relative max-w-4xl rounded-[16px]"
              >
                <label
                  htmlFor="my-modal-user"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <AddUser />
              </label>
            </label>
          </div>
          <div className="border border-[#3853A4] rounded-[5px]">
            {project?.users?.map((puser) => (
              <div key={puser.user_id} className="flex ">
                <p className="flex items-center gap-[11px] font-[500] lg:w-[210px] lg:pl-[17px] lg:py-[20px] p-2">
                  <img width={36} src={puser.image} alt="" /> {puser.username}
                </p>

                <p
                  className={
                    user?.role === "viewer"
                      ? "bg-red-200"
                      : " session_bg lg:w-[257px] lg:py-[20px] p-2 text-center font-[400] cursor-pointer"
                  }
                  onClick={() =>
                    puser.user_id === user?.user_id
                      ? handleLeave(project.project_id)
                      : handleUserRemove(project.project_id, puser.user_id)
                  }
                >
                  {puser.user_id === user?.user_id ? "Leave" : "Remove"}

                  {/* Remove (ANALYST) */}
                </p>
                <select className=" session_bg lg:w-[257px] lg:py-[20px] p-2 text-center font-[400]">
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
