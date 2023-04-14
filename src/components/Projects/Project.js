import React, { useEffect, useState } from "react";
import "./Project.css";
import picture from "../../assets/upload-img.png";
import more from "../../assets/more.png";
import { Link, useNavigate } from "react-router-dom";
import CreateProject from "./CreateProject";
import axios from "axios";
import ProjectUpload from "./ProjectUpload";
import AddUser from "./AddUser";
import StartSession from "./StartSession";

const Project = () => {
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("");
  const [return_deactivated, setReturn_deactivated] = useState(false);
  const [return_deleted, setReturn_deleted] = useState(false);
  const [base64Image, setBase64Image] = useState("");

  const [projectShareID, setProjectShareID] = useState("");
  const navigate = useNavigate();
  const navigateToItemDetails = (id) => {
    navigate(`/dashboard/projectDetails/${id}`);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  // console.log(base64Image);

  axios.defaults.withCredentials = true;

  const handleMyprojects = () => {
    const info = {
      filter: filter,
      return_deactivated: return_deactivated,
      return_deleted: return_deleted,
    };
    axios
      .post("https://app.cloud4c2.com/api/project/my_projects", info, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setProjects(response.data.projects))
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };

  useEffect(() => {
    handleMyprojects();
  }, []);

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
          const updatedProjects = projects.filter(
            (item) => item.project_id !== id
          );
          setProjects(updatedProjects);
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
          handleMyprojects();
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
      const domain = fullUrl.split("/dashboard/")[1];

      console.log("domain", domain);

      setTimeout(() => {
        redirectHandler(domain);
      }, 2000);
    });
  };

  const redirectHandler = (domain) => {
    console.log("Redirect function is triggered", domain);

    window.open(` ${"http://" + domain}`, "_blank");
  };

  return (
    <div className="bg-[#FFFBFB] p-5 lg:py-[61px] lg:px-[57px] lg:rounded-l-[50px] h-[100vh] overflow-y-scroll">
      <div className="flex flex-wrap justify-between gap-[41px] mb-[15px] ">
        <div>
          <input
            type="search"
            className="search_bg pl-16 input input-bordered lg:w-[700px] rounded-[60px]  "
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="flex gap-1 lg:gap-[18px]">
          {/* The button to open modal */}
          <label
            className="outfit bg-[#3853A4] p-3  text-white text-[15px]  font-[500] rounded-[5px]"
            htmlFor="my-modal-3"
          >
            {" "}
            Create Project
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <label htmlFor="my-modal-3" className="modal">
            <label htmlFor="" className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <CreateProject />
            </label>
          </label>

          {/* The button to open modal */}
          <label
            htmlFor="my-modal-edit"
            className="outfit bg-[#3853A4] p-3 
           text-white text-[15px]  font-[500] rounded-[5px]"
          >
            Upload Project
          </label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-edit" className="modal-toggle" />
          <label htmlFor="my-modal-edit" className="modal">
            <label htmlFor="" className="modal-box relative">
              <label
                htmlFor="my-modal-edit"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <ProjectUpload />
            </label>
          </label>
        </div>
      </div>



      
      {user?.role === "administrator" && (
        <div className="flex gap-[20px] mb-[20px]">
          <button
            className={`outfit outline_btn py-[8px] px-[33px] ${
              return_deactivated && "bg-primary text-white"
            }`}
            type=""
            onClick={() => setReturn_deactivated(!return_deactivated)}
          >
            Disabled
          </button>
          <button
            className={`outfit outline_btn py-[8px] px-[33px] ${
              return_deleted && "bg-primary text-white"
            }`}
            type=""
            onClick={() => setReturn_deleted(!return_deleted)}
          >
            Deleted
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-[21px]">
        {/* The button to open modal */}
        <label htmlFor="my-modal">
          <div className="card_box pt-[32px]">
            <img className="mx-auto mb-[15px]" src={picture} alt="" />
            <p className="commissioner text-[16px] font-[500] text-center mb-[27px]">
              Create a project
            </p>
            <p
              className="text-center mx-4 outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[25px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              type=""
            >
              Create a project
            </p>
          </div>
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <CreateProject />
          </div>
        </div>

        {projects.length > 0 ? (
          projects?.map((project) => (
            <div key={project.project_id}>
              <div className="card_box p-[7px]">
                <div className="img_box">
                  <div className="flex justify-end pt-[9px]">
                    {/* <img

                className="pointer"
                onClick={handleDelete}
                src={close}
                alt=""
              /> */}

                    <div className="dropdown dropdown-left lg:dropdown-right">
                      <label tabIndex={0}>
                        <img className="pointer" src={more} alt="" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="commissioner dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ml-1"
                      >
                        {/* <li
                          onClick={() =>
                            navigateToItemDetails(project.project_id)
                          }
                        >
                          <span className="commissioner">Project details</span>
                        </li> */}

                        <li>
                          <label
                            htmlFor="my-modal-user"
                            className={
                              user?.role === "viewer"
                                ? "hidden"
                                : "commissioner"
                            }
                            onClick={() =>
                              setProjectShareID(project.project_id)
                            }
                          >
                            Share
                          </label>
                        </li>

                        <li
                          className={
                            user?.role === "administrator" ? "hidden" : "block"
                          }
                        >
                          <button
                            className="commissioner"
                            onClick={() => handleLeave(project.project_id)}
                          >
                            Leave project
                          </button>
                        </li>
                        <li>
                          {/* <Link
                            className="commissioner"
                            to={`/dashboard/startSession/${project.project_id}`}
                          >
                            Start session
                          </Link> */}

                          {/* The button to open modal */}
                          <label
                            htmlFor="my-modal-session"
                            className={
                              user?.role === "viewer"
                                ? "hidden"
                                : "commissioner"
                            }
                            onClick={() =>
                              setProjectShareID(project.project_id)
                            }
                          >
                            Start session
                          </label>
                        </li>
                        {/* <li>
                          <Link
                            className="commissioner"
                            to={`/dashboard/projectCopy/${project.project_id}`}
                          >
                            copy project
                          </Link>
                        </li> */}
                        <li>
                          {/* <Link
                            className="commissioner"
                            to="/dashboard/projectUpload"
                          >
                            Edit project
                          </Link> */}

                          {/* The button to open modal */}
                          <p
                            onClick={() => handleEditor(project.project_id)}
                            className={
                              user?.role === "viewer"
                                ? "hidden"
                                : "commissioner"
                            }
                          >
                            {" "}
                            Edit project
                          </p>
                        </li>
                        <li>
                          <Link
                            className="commissioner"
                            to={`/dashboard/project-log/${project.project_id}`}
                          >
                            Log
                          </Link>
                        </li>
                        {user?.role === "administrator" && (
                          <>
                            <li onClick={() => handleDisabled(project)}>
                              <a className="commissioner">
                                {project?.active === true
                                  ? "Disable project"
                                  : "Active project"}{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => handleDelete(project.project_id)}
                                className="commissioner"
                              >
                                Delete project
                              </a>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div
                      className="cursor-pointer"
                      onClick={() => navigateToItemDetails(project.project_id)}
                    >
                      <img
                        className="h-[150px] w-full  mx-auto"
                        src={project.image}
                        alt=""
                      />
                      <p className="commissioner text-[16px] font-[500] mt-2 mb-[8px] text-center">
                        {project.name}
                      </p>
                    </div>
                    <p className="commissioner text-[14px] font-[400] text-center pb-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : projects.length === 0 ? (
          <div>No Project Found</div>
        ) : (
          <div>Loading...</div>
        )}
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-user" className="modal-toggle" />
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
            <AddUser projectId={projectShareID} />
          </label>
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-session" className="modal-toggle" />

        <label htmlFor="my-modal-session" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <label
              htmlFor="my-modal-session"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <StartSession projectId={projectShareID} />
          </label>
        </label>
      </div>
    </div>
  );
};

export default Project;
