import React from "react";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton3 from "../../utils/ProjectButton3";
import ProjectButton4 from "../../utils/ProjectButton4";
import arrow from "../../assets/right-arrow.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const AddUser = () => {
  return (
    <div className="p-12">
      <ProjectButton>Add User</ProjectButton>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-[#F8FAFF] p-6 rounded-[40px]">
          <input
            type="search"
            className="border h-[40px] rounded-[36px] pl-8 w-full"
            placeholder="Search"
          />
          <div className="flex gap-[6px]">
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="avatar online">
              <div className="w-20 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>

            <div>
              <p>Hannan</p>
              <p>You: Hello... 2.18</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col">
            <button className="w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px  font-[500] rounded-[8px] p-[8px] mb-[10px]">
              Filter
            </button>
            <div className="dropdown dropdown-right">
  <label tabIndex={0}> <button className="flex  items-center justify-center w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px  font-[500] rounded-[8px] p-[8px] mb-[10px]">
              Role <MdKeyboardArrowRight />
            </button></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
           

            <ProjectButton3>Cancel</ProjectButton3>
            <ProjectButton4>Accept</ProjectButton4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
