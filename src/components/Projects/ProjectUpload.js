import React, { useRef, useState } from "react";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton2 from "../../utils/ProjectButton2";
import ProjectButton3 from "../../utils/ProjectButton3";
import uploadImg from "../../assets/uploadproject.png";
import Dataimg from "../../assets/Data.png";

const ProjectUpload = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();
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
      <div className="copy__inner  border-[1px] rounded-[8px] bordered-[#F8FAFF] shadow-black px-[28px] py-[20px] flex flex-col items-center w-[593px]">
        <ProjectButton>Upload Project</ProjectButton>
        <div className="flex justify-between w-[302px] mt-[20px]">
          <ProjectButton3>Project name</ProjectButton3>
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

        <ProjectButton2>project description</ProjectButton2>

        <div className="copy__img border-[1px] overflow-hidden w-[302px] bordered rounded-[8px]">
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

        <div className="cencelation flex justify-between w-[253px] mt-[20px]">
          <ProjectButton3>Cancel</ProjectButton3>
          <ProjectButton3>Accept</ProjectButton3>
        </div>
      </div>
    </div>
  );
};

export default ProjectUpload;
