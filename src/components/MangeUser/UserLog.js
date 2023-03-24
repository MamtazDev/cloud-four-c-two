import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserLog = () => {
  const [userLog, setUserLog] = useState([]);
  const { id } = useParams();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post(`https://app.cloud4c2.com/api/user/logs/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUserLog(response.data.log_strings));
  }, []);

  return (
    <div className="node__info bg-[#FFFBFB] lg:rounded-l-[50px] h-full overflow-x-auto lg:py-[54px] lg:pt-[196px] lg:px-[57px] p-4">
      <table className="w-[1032px]">
        <tr>
          <th>Log</th>
          <th>Time</th>
        </tr>

        {userLog.map((i, index) => (
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

export default UserLog;
