import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton2 from "../../utils/ProjectButton2";
import ProjectButton3 from "../../utils/ProjectButton3";

const StartSession = () => {
  const [sessionNameShow, setSessionNameShow] = useState(false);
  const [sessionDescriptionShow, setSessionDescriptionShow] = useState(false);
  const [sessionName, setSessionName] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleCreateSession = () => {
    axios
      .post(`https://app.cloud4c2.com/api/session/create/${id}`, {
        name: sessionName,
        description: sessionDescription,
      })
      .then((res) => {
        if (res.data.message === "session created") {
          setSessionNameShow(false);
          setSessionDescriptionShow(false);
          navigate("/dashboard/project");
        }
      });
  };

  return (
    <div className="bg-white lg:rounded-l-[50px] start__session h-full w-full flex justify-center items-center">
      <div className="session__inner  border-[1px] rounded-[8px] bordered-[#F8FAFF] shadow-black px-[28px] py-[20px] flex flex-col items-center w-[593px]">
        <ProjectButton>Start Session</ProjectButton>
        {/* <ProjectButton2>Session Name</ProjectButton2> */}
    
          <input
            className="block pl-4 border h-[40px] w-[288px] rounded-[7px] mb-[12px]"
            type="text"
            placeholder="Session name"
            onChange={(e) => setSessionName(e.target.value)}
          />
       

        {/* <ProjectButton2>Session Description</ProjectButton2> */}
        {sessionDescriptionShow ? (
          <input
            className="block pl-4 border h-[40px] w-[288px] rounded-[7px] mb-[12px]"
            type="text"
            onChange={(e) => setSessionDescription(e.target.value)}
          />
        ) : (
          <button
            onClick={() => setSessionDescriptionShow(true)}
            className="commissioner w-[302px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[12px]"
          >
            Session Description
          </button>
        )}

        <div className="cencelation  flex justify-between w-[253px] mt-[20px]">
          <ProjectButton3>Cancel</ProjectButton3>
          {/* <ProjectButton3>Accept</ProjectButton3> */}
          <button
            onClick={handleCreateSession}
            className="commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartSession;
