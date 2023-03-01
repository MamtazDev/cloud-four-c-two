import React from "react";
import BlueButton from "../../utils/BlueButton";
import girl from "../../assets/girl.png";

const ProjectDetails = () => {
  return (
    <div className="bg-[#FFFBFB] lg:py-[61px] lg:px-[57px] p-4">
      <div className="mb-[57px]">
        <BlueButton>Leave Project (Not Admin)</BlueButton>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-[40px]">
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

      {/* session part */}
      <div className="mb-[22px]">
        <div className="flex items-center justify-between mb-[12px]">
          <p className="text-[16px] font-[500]">Sessions</p>
          <BlueButton>New session</BlueButton>
        </div>
        <div className="border border-[#3853A4] rounded-[5px] pb-[56px]">
          <div className="flex ">
            <p className="font-[500] w-[210px] pl-[17px] py-[20px]">
              Sessions 01{" "}
            </p>

            <p className=" session_bg w-[111px] py-[20px] text-center font-[400]">
              Join
            </p>
            <p className=" session_bg w-[226px] py-[20px] text-center font-[400]">
              Delete (ANALYST)
            </p>
          </div>
          <div className="flex text-[16px]">
            <p className="w-[210px] font-[500] pl-[17px] py-[20px]">
              Sessions 02{" "}
            </p>

            <p className=" session_bg  w-[111px] py-[20px] text-center font-[400]">
              Join
            </p>
            <p className=" session_bg  w-[226px] py-[20px] text-center font-[400]">
              Delete (ANALYST)
            </p>
          </div>
        </div>
      </div>
      {/* session part */}
      <div>
        <div className="flex items-center justify-between mb-[12px]">
          <p className="text-[16px] font-[500]">Users</p>
          <BlueButton>Add user</BlueButton>
        </div>
        <div className="border border-[#3853A4] rounded-[5px] pb-[56px]">
          <div className="flex ">
            <p className="font-[500] w-[210px] pl-[17px] py-[20px]">
              Sessions 01{" "}
            </p>

            <p className=" session_bg w-[257px] py-[20px] text-center font-[400]">
              Remove (ANALYST)
            </p>
            <p className=" session_bg w-[257px] py-[20px] text-center font-[400]">
              Change role (ANALYST)
            </p>
          </div>
          <div className="flex text-[16px]">
            <p className="w-[210px] font-[500] pl-[17px] py-[20px]">
              Sessions 02{" "}
            </p>

            <p className=" session_bg  w-[257px] py-[20px] text-center font-[400]">
              Remove (ANALYST)
            </p>
            <p className=" session_bg  w-[257px] py-[20px] text-center font-[400]">
              Change role (ANALYST)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
