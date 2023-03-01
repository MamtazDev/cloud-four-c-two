import React from "react";
import BlueButton from "../../utils/BlueButton";
import girl from "../../assets/girl.png";

const ProjectDetails = () => {
  return (
    <div className="bg-[#FFFBFB] py-[61px] px-[57px]">
      <div className="mb-[57px]">
        <BlueButton>Leave Project (Not Admin)</BlueButton>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <div>
          <button
            className="outline_btn w-full mb-[20px] py-[18px] font-[500]"
            type=""
          >
            Edit Name
          </button>
          <button
            className="outline_btn w-full py-[18px] font-[500] mb-[20px]"
            type=""
          >
            Edit description
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] mb-[20px]">
            <button className="bg-[#3853A4] py-[17px] px-[50px] text-white text-[20px] font-[500] rounded-[5px]">
              Disable project
            </button>
            <button className="bg-[#3853A4] py-[17px] px-[50px] text-white text-[20px] font-[500] rounded-[5px]">
              Delete project
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
            <button className="bg-[#3853A4] py-[17px] px-[50px] text-white text-[20px] font-[500] rounded-[5px]">
              Copy project
            </button>
            <button className="bg-[#3853A4] py-[17px] px-[50px] text-white text-[20px] font-[500] rounded-[5px]">
              Edit project
            </button>
            <button className="bg-[#3853A4] py-[17px] px-[50px] text-white text-[20px] font-[500] rounded-[5px]">
              Change image
            </button>
          </div>
        </div>
        <div>
          <img className="rounded-[12px] h-[305px] w-full" src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
