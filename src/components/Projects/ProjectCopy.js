import React, { useRef, useState } from "react";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton2 from "../../utils/ProjectButton2";
import ProjectButton3 from "../../utils/ProjectButton3";

import copyImg from "../../assets/copyproject.png";

const ProjectCopy = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();
  const onFileChangeCapture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const inputHandler = () => {
    inputRef.current.click();
  };
  return (
    <div className="bg-white lg:rounded-l-[50px] project__copy w-full h-full flex justify-center items-center">
      <div className="copy__inner  border-[1px] rounded-[8px] bordered-[#F8FAFF] shadow-black px-[28px] py-[20px] flex flex-col items-center w-[593px]">
        <ProjectButton>Copy this porject</ProjectButton>
        <ProjectButton2>New project Name</ProjectButton2>
        <ProjectButton2>New project description</ProjectButton2>

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
                src={copyImg}
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

          {/* <img className="relative z-[99]" src={copyImg} alt="image" />
          <button className="commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]">
            Pick new image
          </button> */}
        </div>

        <div className="cencelation flex justify-between w-[253px] mt-[20px]">
          <ProjectButton3>Cancel</ProjectButton3>
          <ProjectButton3>Accept</ProjectButton3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCopy;
