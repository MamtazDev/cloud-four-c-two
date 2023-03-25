import axios from "axios";
import React, { useEffect, useState } from "react";
import "./manage.css";

const NodeInfo = () => {
  const [node, setNode] = useState([]);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/node", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => setNode(res.data.nodes));
  }, []);
  console.log(node);
  return (
    <div className="node__info bg-[#FFFBFB] lg:rounded-l-[50px] h-full overflow-x-auto lg:py-[54px] lg:pt-[196px] lg:px-[57px] p-4">
      <table className="w-[1032px]">
        {node?.map((i) => (
          <tr>
            <td> {i.hostname}</td>
            <td> {i.address}</td>
            <td> {i.memory_mibytes}</td>
            <td> {i.num_cpu}</td>
            <td> {i.creation_time}</td>
            <td>{i.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default NodeInfo;
