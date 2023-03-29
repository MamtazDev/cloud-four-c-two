import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectLog = () => {
  const [projectLog, setProjectLog] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post(`https://app.cloud4c2.com/api/project/logs/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setProjectLog(response.data.log_strings))
      .catch((err) => {
        if (err.response.status === 403) {
        navigate("/")
        }
      });
  }, [id,navigate]);
  return (
    <div className="node__info bg-[#FFFBFB] lg:rounded-l-[50px] h-full overflow-x-auto lg:py-[54px] lg:pt-[196px] lg:px-[57px] p-4">
      <h1 className="text-3xl font-bold mb-5">Project Logs</h1>
      <table className="w-[1032px]">
        <tr className="bg-blue-200 h-16">
          <th>Log</th>
          <th>Time</th>
        </tr>

        {projectLog.map((i, index) => (
          <tr key={index}>
            <td
              dangerouslySetInnerHTML={{
                __html: i.log,
              }}
            ></td>
            <td>{i.time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProjectLog;
