import React, { useContext, useState } from "react";
import BlueButton from "../../utils/BlueButton";
import "./manage.css";
import Person1 from "../../assets/person1.png";
import TableBtn from "../../utils/TableBtn";
import { UserContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const Manage = () => {
  const { userList, setUserList } = useContext(UserContext);
  // console.log(userList);
  const [active, setActive] = useState(true);
  const [activeId, setActiveId] = useState([]);

  console.log(active);
  const table = [1, 2, 3, 4, 5, 6, 7];
  const [rows, setRows] = useState(table);
  function handleDelete(id) {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    console.log("clicked", id);
  }
  axios.defaults.withCredentials = true;
  axios
    .post("https://app.cloud4c2.com/api/user/list", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
    .then((response) => setUserList(response.data.users))
  console.log(userList);

  return (
    <div className="Mange__User bg-[#FFFBFB] lg:rounded-l-[50px] h-full lg:px-[57px] lg:py-[61px] p-4 overflow-x-auto">
      <div className="top__btn flex items-center mb-[82px]">
        <BlueButton>Test Filter</BlueButton>
        <button className="gray__btn text-[20px] font-[500] leading-[30px] ml-[20px] px-[38px] py-[18px] rounded-[5px] bg-[#f0f4ff] bordered-[1px]">
          Show Deleted
        </button>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="commissioner">
            <th className="text-left">Image</th>
            <th className="text-left">Username</th>
            <th className="text-left">First Name</th>
            <th className="text-left">Last Name</th>
            <th className="text-left">Account Type</th>
            <th className="text-left">Status</th>
            <th className="text-center">Accounts/Edit</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((i, index) => (
            <tr key={index}>
              <td>
                <img width={60} src={i.image} alt="User Image" />
              </td>
              <td>{i.username}</td>
              <td>{i.first_name}</td>
              <td>{i.last_name}</td>
              <td>{i.role}</td>
              <td>{i.status}</td>
        
              
              {/* <td>
                {activeId.includes(index) && active ? "Active" : "Deactivate"}
              </td> */}
              <td>
                <div className="flex justify-between">
                  <TableBtn
                    index={index}
                    setActiveId={setActiveId}
                    setActive={setActive}
                    active={active}
                  >
                    Active /
                    <br />
                    Deactivate
                  </TableBtn>
                  <TableBtn>Report</TableBtn>
                  {/* <TableBtn>Delete</TableBtn> */}
                  <button onClick={() => handleDelete(index)} type="">
                    del{index}
                  </button>
                  <Link to="/dashboard">
                    <TableBtn>Edit</TableBtn>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage;
