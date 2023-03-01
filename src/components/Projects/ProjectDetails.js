import React from "react";
import BlueButton from "../../utils/BlueButton";
import girl from '../../assets/girl.png';

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
          <button className="outline_btn w-full py-[18px] font-[500] mb-[20px]" type="">
            Edit description
          </button>
          <div className="flex flex-wrap gap-[15px]">
            <BlueButton>Disable project</BlueButton>
            <BlueButton>Delete project</BlueButton>
            <BlueButton>Copy project</BlueButton>
            <BlueButton>Edit project</BlueButton>
          </div>
        </div>
        <div>
            <img className="w-full rounded-[12px]" src={girl} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
