import React, { useRef, useState } from "react";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton2 from "../../utils/ProjectButton2";
import ProjectButton3 from "../../utils/ProjectButton3";
import uploadImg from "../../assets/uploadproject.png";
import Dataimg from "../../assets/Data.png";
import axios from "axios";

const ProjectUpload = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();
  const [base64Image, setBase64Image] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const project_name = e.target.project_name.value;
    const project_description = e.target.project_description.value;
    const project_path_to_execute = e.target.project_path_to_execute.value;

    const info = {
      project_name,
      file_data: base64Image,
      project_path_to_execute,
      project_description,
      // project_image: base64Image,
    };
    console.log(info, "click");

    axios.defaults.withCredentials = true;

    axios
      .post("https://app.cloud4c2.com/api/project/create", info, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        console.log(res, "hello");
        if (res.data.message === "New project successfully created") {
          e.target.reset();
          window.location.reload(true);
        }
      });
  };
  const onFileChangeCapture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const inputHandler = () => {
    inputRef.current.click();
  };

  const [filename, setFilename] = useState("");
  const filenameRef = useRef();
  const onFileChange = (e) => {
    const name = e.target.files[0].name;
    console.log(name);
    setFilename(name);
  };

  const filenameHandler = () => {
    filenameRef.current.click();
  };
  return (
    <div className="bg-white lg:rounded-l-[50px] project__copy w-full h-full flex justify-center items-center">
      <div className="copy__inner  border-[1px] rounded-[8px] bordered-[#F8FAFF] shadow-black px-[28px] py-[20px] flex flex-col items-center w-full">
        <ProjectButton>Upload Project</ProjectButton>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-3/4 mx-auto my-[20px]">
            <input
              className="border px-3 w-full rounded-lg"
              type="text"
              placeholder="Project Name"
              name="project_name"
            />
            <ProjectButton3>
              {" "}
              <div className="">
                <input
                  type="file"
                  ref={filenameRef}
                  onChangeCapture={onFileChange}
                  className="file-input w-full hidden  border-0 bg-white"
                />
                {filename === "" ? (
                  <div
                    onClick={filenameHandler}
                    className="flex items-center justify-between"
                  >
                    <img className="mr-[5px]" src={Dataimg} alt="image" /> File
                    Picker
                  </div>
                ) : (
                  <div
                    onClick={filenameHandler}
                    className="flex items-center justify-between"
                  >
                    {filename}
                  </div>
                )}
              </div>
            </ProjectButton3>
          </div>
          <div className="w-3/4 mx-auto">
            <input
              className="border px-3 w-full  py-2 rounded-lg mb-[20px]"
              type="text"
              placeholder="Project description"
              name="project_description"
              
            />

            <input
              className="border px-3 w-full py-2 rounded-lg mb-[20px]"
              type="text"
              placeholder="Project Path to Execute"
              name="project_path_to_execute"
            />
          </div>

          <div className="copy__img border-[1px] overflow-hidden w-3/4 mx-auto bordered rounded-[8px]">
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
                className="profile relative cursor-pointer "
              >
                <img
                  className="relative z-[99] h-[192px] w-full"
                  src={uploadImg}
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
                  src={file}
                  alt="image"
                />
                <button className="underline commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]">
                  Pick new image
                </button>
              </div>
            )}
          </div>

          <div className="mx-auto cencelation flex justify-between w-[253px] mt-[20px]">
            <ProjectButton3>Cancel</ProjectButton3>

            <button
              type="submit"
              className="commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]"
            >
              Accept
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectUpload;
