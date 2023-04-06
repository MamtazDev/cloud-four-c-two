import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StartSession = ({ projectId, closeRef }) => {
  const [sessionName, setSessionName] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const { id } = useParams();
  const newId = id ? id : projectId;

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleCreateSession = () => {
    axios
      .post(`https://app.cloud4c2.com/api/session/create/${newId}`, {
        session_name: sessionName,
        session_description: sessionDescription,
      })

      .then((res) => {
        if (res.data.message === "session created") {
          alert(res.data.message);
          navigate(`/dashboard/projectDetails/${newId}`);
          window.location.reload(true);
          closeRef();
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };

  return (
    <div className="bg-white lg:rounded-l-[50px] start__session h-full w-full flex justify-center items-center">
      <div className="session__inner  border-[1px] rounded-[8px] bordered-[#F8FAFF] shadow-black px-[28px] py-[20px] flex flex-col items-center w-[593px]">
        <h1 className="text-center text-3xl font-bold mb-5">Start Session</h1>
        {/* <ProjectButton2>Session Name</ProjectButton2> */}

        <input
          className="block pl-4 border h-[40px] w-[288px] rounded-[7px] mb-[12px]"
          type="text"
          placeholder="Session name"
          onChange={(e) => setSessionName(e.target.value)}
        />

        {/* <ProjectButton2>Session Description</ProjectButton2> */}

        <input
          className="block pl-4 border h-[40px] w-[288px] rounded-[7px] mb-[12px]"
          type="text"
          placeholder="Session Description"
          onChange={(e) => setSessionDescription(e.target.value)}
        />

        {/* <div className="cencelation  flex justify-between w-[253px] mt-[20px]"> */}
        {/* <ProjectButton3>
            <label htmlFor={myModal}>Cancel</label>{" "}
          </ProjectButton3> */}
        {/* <ProjectButton3>Accept</ProjectButton3> */}
        <button
          onClick={handleCreateSession}
          className="commissioner min-w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px font-[500] rounded-[8px] p-[8px] mb-[10px]"
        >
          Start
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default StartSession;
