import React from "react";
import BlueButton from "../../utils/BlueButton";
import "./manage.css";
import Person1 from "../../assets/person1.png";
import TableBtn from "../../utils/TableBtn";

const Manage = () => {
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
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <tr>
              <td>
                <img src={Person1} alt="User Image" />
              </td>
              <td>Sajib Ahmed</td>
              <td>Sajib</td>
              <td>Ahmed</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className="flex justify-between">
                  <TableBtn>
                    Active/
                    <br />
                    Deactivate
                  </TableBtn>
                  <TableBtn>Report</TableBtn>
                  <TableBtn>Delete</TableBtn>
                  <TableBtn>Edit</TableBtn>
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
