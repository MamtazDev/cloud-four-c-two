import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./manage.css";

const NodeInfo = () => {
  const [node, setNode] = useState([]);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/node", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => setNode(res.data.nodes))
      .catch((err) => {
        if (err.response.status === 403) {
        navigate("/")
        }
      });
  }, []);
  console.log(node);
  return (
    <div className="node__info bg-[#FFFBFB] lg:rounded-l-[50px] h-full overflow-x-auto lg:py-[54px] lg:pt-[196px] lg:px-[57px] p-4">
      <h1 className="text-3xl font-[600] mb-8">Node Information</h1>

      <table className="w-[1032px]">
        <thead className="bg-gray-300 h-[60px]">
          <th>Host name</th>
          <th>Address</th>
          <th>Memory mibytes</th>
          <th>No of CPU</th>
          <th>Creation Time</th>
          <th>Status</th>
        </thead>
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
