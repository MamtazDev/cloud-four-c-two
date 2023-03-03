import React from "react";
import "./manage.css";

const NodeInfo = () => {
  return (
    <div className="node__info bg-[#FFFBFB] lg:rounded-l-[50px] h-full overflow-x-auto lg:py-[54px] lg:pt-[196px] lg:px-[57px] p-4">
      <table className="w-[1032px]">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <tr>
            <td>Node {i}</td>
            <td>127.8.3.4</td>
            <td>32gb RAM</td>
            <td>16 CPUS</td>
            <td>9 active sessions</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default NodeInfo;
