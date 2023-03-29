import React, { useEffect, useRef, useState } from "react";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton2 from "../../utils/ProjectButton2";
import ProjectButton3 from "../../utils/ProjectButton3";

import copyImg from "../../assets/copyproject.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProjectCopy = ({myModal}) => {
  const [files, setFile] = useState(null);
  const inputRef = useRef();

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

  const { id } = useParams();

  const [project, setProject] = useState("");

  const [nameShow, setNameShow] = useState(false);
  const [descriptionShow, setDescriptionShow] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  axios.defaults.withCredentials = true;

  const handleAccept = () => {
    const data = {
      project_name: projectName,
      project_description: description,
      project_picture: base64Image,
    };

    console.log(data, "datass");

    axios
      .post(`https://app.cloud4c2.com/api/project/copy/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) =>{
        if (res.data.message === "New project successfully created") {
          alert(res.data.message);
          window.location.reload(true);
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
      .then((response) => setProject(response.data.project));
  }, []);

  console.log(project, "project");

  const inputHandler = () => {
    inputRef.current.click();
  };
  return (
    <div className="bg-white lg:rounded-l-[50px] project__copy w-full h-full flex justify-center items-center">
      <div className="copy__inner  border-[1px] rounded-[8px] bordered-[#F8FAFF] shadow-black px-[28px] py-[20px] flex flex-col items-center w-[593px]">
        <ProjectButton>Copy this porject</ProjectButton>
        {/* <ProjectButton2>New project Name</ProjectButton2> */}
       
          <input
            className="block pl-4 border h-[40px] w-[288px] rounded-[7px] mb-[12px]"
            type="text"
            onChange={(e) => setProjectName(e.target.value)}
            Value={project.name}
          />
     

        {/* <ProjectButton2>New project description</ProjectButton2> */}
     
          <input
            className="block pl-4 border h-[40px] w-[288px] rounded-[7px] mb-[12px] "
            type="text"
            Value={project.description}
            onChange={(e) => setDescription(e.target.value)}
          
          />
     

        <div className="copy__img border-[1px] overflow-hidden w-[302px] bordered rounded-[8px]">
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            onChangeCapture={onFileChangeCapture}
            className="file-input w-full hidden  border-0 bg-white"
          />
          {files === null ? (
            <div
              onClick={inputHandler}
              className="profile relative cursor-pointer "
            >
              <img
                className="relative z-[99] h-[192px] w-full"
                src={project?.image}
                alt="image"
              />
              <button className="underline commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]">
                Pick new image
              </button>
            </div>
          ) : (
            <div
              onClick={inputHandler}
              className="profile relative cursor-pointer "
            >
              <img
                className="relative z-[99] w-full h-[192px] "
                src={files}
                alt="image"
              />
              <button className="underline commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]">
                Pick new image
              </button>
            </div>
          )}

          {/* <img className="relative z-[99]" src={copyImg} alt="image" />
          <button className="commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]">
            Pick new image
          </button> */}
        </div>

        <div className="cencelation flex justify-between w-[253px] mt-[20px]">
          {/* <ProjectButton3>Cancel</ProjectButton3> */}
          {/* <ProjectButton3>
            <span>Cancel</span>
          </ProjectButton3> */}
          <label htmlFor={myModal} className="text-center commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]">
            Cancel
          </label>
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
  );
};

export default ProjectCopy;
