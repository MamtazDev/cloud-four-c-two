import React from "react";
import BlueButton from "../../utils/BlueButton";
import "./manage.css";

import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.png";
import Person4 from "../../assets/person4.png";
import Person5 from "../../assets/person5.png";
import Person6 from "../../assets/person6.png";
import Person7 from "../../assets/person7.png";
import Person8 from "../../assets/person8.png";

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
      {/* <div className='manage__info'>
                <table className='w-full'>
                    <tr className='bg-[red]'>
                        <td className='w-[6%]'>Image</td>
                        <td className='w-[10%]'>Username</td>
                        <td className='w-[10%]'>First Name</td>
                        <td className='w-[10%]'>Last Name</td>
                        <td className='w-[10%]'>Account Type</td>
                        <td className='w-[10%]'>Status</td>
                        <td className='text-center'>Accounts/edit</td>
                    </tr>
                </table>
                <table><tr><td className='h-[30px] w-full'></td></tr></table>
                <table>
                    <tr>
                        <td className='w-[6%]'><img src={Person1} alt='img'/></td>
                        <td className='w-[10%]'>Sajib Ahmed</td>
                        <td className='w-[10%]'>Sajib</td>
                        <td className='w-[10%]'>Ahmed</td>
                        <td className='w-[10%]'>Admin</td>
                        <td className='w-[10%]'>Active</td>
                        <td className='w-[32%]'>
                            <table className='w-full'>
                                <tr>
                                    <td><TableBtn>Activate/ <br/> Deactive</TableBtn></td>
                                    <td><TableBtn>Report</TableBtn></td>
                                    <td><TableBtn>Delete</TableBtn></td>
                                    <td><TableBtn>Edit</TableBtn></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table><tr><td className='h-[20px] w-full'></td></tr></table>
                <table>
                    <tr>
                        <td className='w-[6%]'><img src={Person2} alt='img'/></td>
                        <td className='w-[10%]'>Sajib Ahmed</td>
                        <td className='w-[10%]'>Sajib</td>
                        <td className='w-[10%]'>Ahmed</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td className='w-[32%]'>
                            <table className='w-full'>
                                <tr>
                                    <td><TableBtn>Activate/ <br/> Deactive</TableBtn></td>
                                    <td><TableBtn>Report</TableBtn></td>
                                    <td><TableBtn>Delete</TableBtn></td>
                                    <td><TableBtn>Edit</TableBtn></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table><tr><td className='h-[20px] w-full'></td></tr></table>
            </div> */}

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
