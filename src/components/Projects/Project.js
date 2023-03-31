import React, { useContext, useEffect, useState } from "react";
import BlueButton from "../../utils/BlueButton";
import "./Project.css";
import picture from "../../assets/upload-img.png";
import code from "../../assets/code.png";
import close from "../../assets/close.png";
import more from "../../assets/more.png";
import staff from "../../assets/staff.png";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import CreateProject from "./CreateProject";
import { useCookies } from "react-cookie";
import axios from "axios";
import ProjectUpload from "./ProjectUpload";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("");
  const [return_deactivated, setReturn_deactivated] = useState(false);
  const [return_deleted, setReturn_deleted] = useState(false);
  const [base64Image, setBase64Image] = useState("");
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
  useEffect(() => {
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
  }, [filter, return_deactivated, return_deleted, navigate]);

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
          window.location.reload(true);
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

  return (
    <div className="bg-[#FFFBFB] p-5 lg:py-[61px] lg:px-[57px] lg:rounded-l-[50px] h-[100vh] overflow-y-scroll">
      <div className="flex flex-wrap justify-between gap-[41px] mb-[15px] ">
        <div>
          <input
            type="search"
            className="search_bg pl-16 input input-bordered  w-full rounded-[60px]  "
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
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <CreateProject />
            </div>
          </div>

          {/* <Link to="/dashboard/projectUpload">
            <BlueButton>Upload Project</BlueButton>
          </Link> */}

          {/* The button to open modal */}
          <label
            htmlFor="my-modal-upload"
            className="outfit bg-[#3853A4] p-3 
           text-white text-[15px]  font-[500] rounded-[5px]"
          >
            Upload Project
          </label>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id="my-modal-upload"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-upload"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <ProjectUpload myModal={"my-modal-upload"} />
            </div>
          </div>
        </div>
      </div>
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

      <div className="flex flex-wrap gap-[21px]">
        {/* The button to open modal */}
        <label htmlFor="my-modal">
          <div className="card_box pt-[32px]">
            <img className="mx-auto mb-[15px]" src={picture} alt="" />
            <p className="commissioner text-[16px] font-[500] text-center mb-[27px]">
              Create a project
            </p>
            <div className="text-center">
              <BlueButton> Create a project</BlueButton>
            </div>
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
                  <div className="flex justify-end px-[12px] pt-[9px]">
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
                          <a className="commissioner">Share</a>
                        </li>
                        <li>
                          <button
                            className="commissioner"
                            onClick={() => handleLeave(project.project_id)}
                          >
                            Leave project
                          </button>
                        </li>
                        <li>
                          <Link
                            className="commissioner"
                            to={`/dashboard/startSession/${project.project_id}`}
                          >
                            Start session
                          </Link>
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
                          <Link
                            className="commissioner"
                            to="/dashboard/projectUpload"
                          >
                            Edit project
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="commissioner"
                            to={`/dashboard/project-log/${project.project_id}`}
                          >
                            Log
                          </Link>
                        </li>
                        <li onClick={() => handleDisabled(project)}>
                          <a className="commissioner">
                            {project.active === true
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
                      </ul>
                    </div>
                  </div>
                  <div>
                    <img
                      onClick={() => navigateToItemDetails(project.project_id)}
                      className="h-[150px] w-full cursor-pointer mx-auto"
                    
                      src={project.image}
                      alt=""
                    />
                    <p className="commissioner text-[16px] font-[500] mt-2 mb-[8px] text-center">
                      {project.name}
                    </p>
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
      </div>
    </div>
  );
};

export default Project;
