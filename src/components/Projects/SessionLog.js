import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SessionLog = () => {
  const [sessionLog, setsessionLog] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post(`https://app.cloud4c2.com/api/session/logs/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setsessionLog(response.data.logs))
      .catch((err) => {
        if (err.response.status === 403) {
        navigate("/")
        }
      });
  }, [id,navigate]);
  return (
    <div className="node__info bg-[#FFFBFB] lg:rounded-l-[50px] h-full overflow-x-auto lg:py-[54px] lg:pt-[196px] lg:px-[57px] p-4">
      <h1 className="text-3xl font-bold mb-5">Session Logs</h1>

      <p
        className="text-lg font-[600]"
        dangerouslySetInnerHTML={{
          __html: sessionLog,
        }}
      ></p>
    </div>
  );
};

export default SessionLog;
