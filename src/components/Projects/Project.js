import React from "react";
import BlueButton from "../../utils/BlueButton";
import "./Project.css";
import picture from "../../assets/upload-img.png";
import code from "../../assets/code.png";
import close from "../../assets/close.png";
import more from "../../assets/more.png";
import staff from "../../assets/staff.png";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Project = () => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="bg-[#FFFBFB] py-[61px] px-[57px]">
      <div className="grid grid-cols-3 gap-[61px] mb-[34px] ">
        <div className="col-span-2">
          <input
            type="search"
            className="search_bg pl-16 input input-bordered w-full rounded-[60px] h-[58px] "
          />
        </div>
        <div className="flex gap-[18px]">
          <BlueButton>Create Project</BlueButton>
          <BlueButton>Upload Project</BlueButton>
        </div>
      </div>
      <div className="flex gap-[20px] mb-[20px]">
        <button className="outline_btn py-[8px] px-[33px]" type="">
          Disabled
        </button>
        <button className="outline_btn py-[8px] px-[33px]" type="">
          Deleted
        </button>
      </div>

      <div className="flex flex-wrap gap-[21px]">
        <div className="card_box pt-[32px]">
          <img className="mx-auto mb-[15px]" src={picture} alt="" />
          <p className="text-[16px] font-[500] text-center mb-[27px]">
            Create a team
          </p>
          <div className="text-center">
            <BlueButton> Create a team</BlueButton>
          </div>
        </div>

        <div className="code_box px-[7px]">
          <div>
            <img className="mx-auto" src={code} alt="" />
          </div>
          <input
            type="number"
            placeholder="Enter code"
            className="input input-bordered w-full h-[56px] mb-[27px]"
          />
          <p className="text-[16px] font-[500] text-center mb-[8px]">Code</p>

          <p className="text-center text-[10px]">
            Got a code to join a team? <br /> Enter it above
          </p>
        </div>

        <div className="card_box p-[7px]">
          <div className="img_box">
            <div className="flex justify-between px-[12px] pt-[9px] pb-[22px]">
              <img onClick={handleDelete} src={close} alt="" />

              <div className="dropdown dropdown-right">
                <label tabIndex={0}>
                  <img src={more} alt="" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ml-1"
                >
                  <li>
                    <Link to="/dashboard/projectDetails">Project details</Link>
                  </li>
                  <li>
                    <a>Share</a>
                  </li>
                  <li>
                    <a>Leave project</a>
                  </li>
                  <li>
                    <a>start session</a>
                  </li>
                  <li>
                    <a>copy project</a>
                  </li>
                  <li>
                    <a>edit project</a>
                  </li>
                  <li>
                    <a>disable project</a>
                  </li>
                  <li>
                    <a>delete project</a>
                  </li>
                </ul>
              </div>
            </div>

            <img className="mx-auto mb-[-30px]" src={staff} alt="" />
            <p className="text-[16px] font-[500] mt-[35px] mb-[8px] text-center">
              Staff
            </p>
            <p className="text-[14px] font-[400] text-center">
              School administration and <br /> development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
