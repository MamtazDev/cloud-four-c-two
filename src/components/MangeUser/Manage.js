import React, { useContext, useEffect, useState } from "react";
import BlueButton from "../../utils/BlueButton";
import "./manage.css";
import TableBtn from "../../utils/TableBtn";
import { UserContext } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Manage = () => {
  const [user, setUser] = useState();
  const { userList, setUserList } = useContext(UserContext);
  const [filter, setFilter] = useState("");
  const [return_deleted, setReturn_deleted] = useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post("https://app.cloud4c2.com/api/user/", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUser(response.data.user));
  }, []);
  useEffect(() => {
    const info = {
      filter: filter,
      return_deleted: return_deleted,
    };
    axios
      .post("https://app.cloud4c2.com/api/user/list", info, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setUserList(response.data.users));
  }, [filter, return_deleted]);
  // console.log(userList);

  const handleDelete = (user) => {
    axios
      .post(`https://app.cloud4c2.com/api/user/delete/${user.user_id}`, user, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })

      .then((res) => {
        console.log(res);
        setUserList(userList.filter((item) => item.user_id !== res.data.user));
      });
  };

  const handleActive = (user) => {
    const status = {
      status: user?.status === "active" ? "suspended" : "active",
      // status: "active",
      // status: "suspended",
    };
    axios
      .post(
        `https://app.cloud4c2.com/api/user/change_status/${user.user_id}`,
        status,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      )

      .then((res) => {
        if (res.data.success === true) {
          alert("User Updated successfully");
          // window.location.reload(true);
        }
      });
  };

  return (
    <div className="Mange__User bg-[#FFFBFB] lg:rounded-l-[50px] h-full lg:px-[57px] lg:py-[61px] p-4 overflow-x-auto">
      <div className="top__btn flex items-center mb-[82px]">
        <input
          type="search"
          className="search_bg pl-16 input input-bordered w-1/2 rounded-[60px] h-[58px] "
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          className={`gray__btn text-[20px] font-[500] leading-[30px] ml-[20px] px-[38px] py-[18px] rounded-[5px] bg-[#f0f4ff] bordered-[1px] ${
            return_deleted && "bg-primary text-white"
          }`}
          onClick={() => setReturn_deleted(!return_deleted)}
        >
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
                <img width={60} src={i.image} alt="User Image"/>
              </td>
              <td>{i.username}</td>
              <td>{i.first_name}</td>
              <td>{i.last_name}</td>
              <td>{i.role}</td>
              <td>{i.status}</td>

              <td>
                <div className="flex justify-between">
                  <TableBtn>
                    <button onClick={() => handleActive(i)}>
                      Active /
                      <br />
                      Deactivate
                    </button>
                  </TableBtn>

                  <TableBtn>
                    {user?.role === "administrator" ? (
                      <button onClick={() => handleDelete(i)} type="">
                        Delete
                      </button>
                    ) : (
                      ""
                    )}
                  </TableBtn>

                  <Link to={`/dashboard/edit-user/${i.user_id}`}>
                    <TableBtn>Edit</TableBtn>
                  </Link>
                  <Link to={`/dashboard/user-log/${i.user_id}`}>
                    <TableBtn>Log</TableBtn>
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
