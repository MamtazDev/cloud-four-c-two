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

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [base64Image, setBase64Image] = useState("");
  const navigate = useNavigate()
  const navigateToItemDetails = id => {
      navigate(`/dashboard/projectDetails/${id}`);
  }

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
    axios
      .post("https://app.cloud4c2.com/api/project/my_projects", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setProjects(response.data.projects));
  }, []);

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
      });
  };
  return (
    <div className="bg-[#FFFBFB] p-5 lg:py-[61px] lg:px-[57px] lg:rounded-l-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[61px] mb-[34px] ">
        <div className="col-span-2">
          <input
            type="search"
            className="search_bg pl-16 input input-bordered w-full rounded-[60px] h-[58px] "
          />
        </div>
        <div className="flex gap-1 lg:gap-[18px]">
          {/* The button to open modal */}
          <label
            className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
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

          <Link to="/dashboard/projectUpload">
            <BlueButton>Upload Project</BlueButton>
          </Link>
        </div>
      </div>
      <div className="flex gap-[20px] mb-[20px]">
        <button className="outfit outline_btn py-[8px] px-[33px]" type="">
          Disabled
        </button>
        <button className="outfit outline_btn py-[8px] px-[33px]" type="">
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

        {/* project (staff) parts */}
        {/* The button to open modal */}
        <label className="cursor-pointer" htmlFor="my-modal-5">
          {" "}
          <div className="card_box p-[7px]">
            <div className="img_box">
              <div className="flex justify-end px-[12px] pt-[9px] pb-[22px]"></div>
              <div>
                <img className="mx-auto mb-[-30px]" src={staff} alt="" />
                <p className="commissioner text-[16px] font-[500] mt-[35px] mb-[8px] text-center">
                  Staff
                </p>
                <p className="commissioner text-[14px] font-[400] text-center">
                  School administration and <br /> development
                </p>
              </div>
            </div>
          </div>
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <label htmlFor="my-modal-5" className="modal cursor-pointer">
          <label className="modal-box relative bg-transparent" htmlFor="">
            <div className="card_box p-[7px]">
              <div className="img_box">
                <div className="flex justify-end px-[12px] pt-[9px] pb-[22px]">
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
                      <li>
                        <Link
                          className="commissioner"
                          to="/dashboard/projectDetails"
                        >
                          Project details
                        </Link>
                      </li>
                      <li>
                        <a className="commissioner">Share</a>
                      </li>
                      <li>
                        <Link
                          className="commissioner"
                          to="/dashboard/projectDetails"
                        >
                          Leave project
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="commissioner"
                          to="/dashboard/startSession"
                        >
                          start session
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="commissioner"
                          to="/dashboard/projectCopy"
                        >
                          copy project
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="commissioner"
                          to="/dashboard/projectUpload"
                        >
                          edit project
                        </Link>
                      </li>
                      <li>
                        <a className="commissioner">disable project</a>
                      </li>
                      <li>
                        <a className="commissioner">delete project</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img className="mx-auto mb-[-30px]" src={staff} alt="" />
                  <p className="commissioner text-[16px] font-[500] mt-[35px] mb-[8px] text-center">
                    Staff
                  </p>
                  <p className="commissioner text-[14px] font-[400] text-center">
                    School administration and <br /> development
                  </p>
                </div>
              </div>
            </div>
          </label>
        </label>

        {projects.map((project) => (
          <div key={project.project_id}>
            {/* project (staff) parts */}
            {/* The button to open modal */}
            <label
              className="cursor-pointer"
              htmlFor={"my-modal" + project.project_id}
            >
              {" "}
              <div className="card_box p-[7px]">
                <div className="img_box">
                  <div>
                    <img
                      width={100}
                      className="h-[150px] mx-auto mb-[-30px]"
                      src={project.image}
                      alt=""
                    />
                    <p className="commissioner text-[16px] font-[500] mt-[35px] mb-[8px] text-center">
                      {project.name}
                    </p>
                    <p className="commissioner text-[14px] font-[400] text-center">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </label>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id={"my-modal" + project.project_id}
              className="modal-toggle"
            />
            <label
              htmlFor={"my-modal" + project.project_id}
              className="modal cursor-pointer"
            >
              <label className="modal-box relative bg-transparent" htmlFor="">
                <div className="card_box p-[7px]">
                  <div className="img_box">
                    <div className="flex justify-end px-[12px] pt-[9px] pb-[22px]">
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
                          <li  onClick={()=>navigateToItemDetails(project.project_id)}>
                            {/* <Link
                              className="commissioner"
                              to="/dashboard/projectDetails"
                            > */}
                            <p     className="commissioner">

                              Project details
                            </p>
                            {/* </Link> */}
                          </li>
                          <li>
                            <a className="commissioner">Share</a>
                          </li>
                          <li>
                            <Link
                              className="commissioner"
                              to="/dashboard/projectDetails"
                            >
                              Leave project
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="commissioner"
                              to="/dashboard/startSession"
                            >
                              start session
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="commissioner"
                              to="/dashboard/projectCopy"
                            >
                              copy project
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="commissioner"
                              to="/dashboard/projectUpload"
                            >
                              edit project
                            </Link>
                          </li>
                          <li>
                            <a className="commissioner">disable project</a>
                          </li>
                          <li>
                            <a
                              onClick={() => handleDelete(project.project_id)}
                              className="commissioner"
                            >
                              delete project
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <img
                        width={100}
                        className="mx-auto mb-[-30px]"
                        src={project.image}
                        alt=""
                      />
                      <p className="commissioner text-[16px] font-[500] mt-[35px] mb-[8px] text-center">
                        {project.name}
                      </p>
                      <p className="commissioner text-[14px] font-[400] text-center">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </label>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
