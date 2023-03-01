import React from "react";
import ProjectButton from "../../utils/ProjectButton";
import ProjectButton3 from "../../utils/ProjectButton3";
import arrow from "../../assets/right-arrow.png";
import { MdKeyboardArrowRight } from "react-icons/md";

import imgSeen from '../../assets/person1.png'

const AddUser = () => {
  return (
    <div className="addUser w-full  xl:h-full flex justify-center items-center">
      <div className="addUser__inner p-12 max-w-[900px] border-[1px] rounded-[16px] border-[#d5d5d5]">
      <ProjectButton>Add User</ProjectButton>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-[#F8FAFF] p-6 rounded-[40px] overflow-hidden">
          <input
            type="search"
            className="border h-[40px] rounded-[36px] pl-8 w-full"
            placeholder="Search"
          />
          <div className="flex gap-[6px] overflow-x-scroll overflow-auto mb-[25px]">
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

          <div className="h-[368px] overflow-y-scroll">
            <div className="flex items-center gap-4 relative mb-[12px]">
              <div className="avatar online">
                <div className="w-20 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
                </div>
              </div>

              <div>
                <p className="text-[20px] font-[600]">Hannan</p>
                <p>You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18</p>
                <img className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute" src={imgSeen} alt="image" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative mb-[12px]">
              <div className="avatar online">
                <div className="w-20 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
                </div>
              </div>

              <div>
                <p className="text-[20px] font-[600]">Hannan</p>
                <p>You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18</p>
                <img className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute" src={imgSeen} alt="image" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative mb-[12px]">
              <div className="avatar online">
                <div className="w-20 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
                </div>
              </div>

              <div>
                <p className="text-[20px] font-[600]">Hannan</p>
                <p>You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18</p>
                <img className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute" src={imgSeen} alt="image" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative mb-[12px]">
              <div className="avatar online">
                <div className="w-20 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
                </div>
              </div>

              <div>
                <p className="text-[20px] font-[600]">Hannan</p>
                <p>You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18</p>
                <img className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute" src={imgSeen} alt="image" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative mb-[12px]">
              <div className="avatar online">
                <div className="w-20 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
                </div>
              </div>

              <div>
                <p className="text-[20px] font-[600]">Hannan</p>
                <p>You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18</p>
                <img className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute" src={imgSeen} alt="image" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative mb-[12px]">
              <div className="avatar online">
                <div className="w-20 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
                </div>
              </div>

              <div>
                <p className="text-[20px] font-[600]">Hannan</p>
                <p>You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18</p>
                <img className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute" src={imgSeen} alt="image" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative mb-[12px]">
              <div className="avatar online">
                <div className="w-20 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
                </div>
              </div>

              <div>
                <p className="text-[20px] font-[600]">Hannan</p>
                <p>You: Hello... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.18</p>
                <img className="right-[10px] top-[50%] h-[18px] w-[18px] rounded-[50%] absolute" src={imgSeen} alt="image" />
              </div>
            </div>
          </div>

          
        </div>

        <div className="">
          <div className="flex flex-col w-[121px] ">
            <button className="w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px  font-[500] rounded-[8px] p-[8px] mb-[10px]">
              Filter
            </button>
            <div className="dropdown dropdown-right">
  <label tabIndex={0}> <button className="flex  items-center justify-center w-[121px] bg-[#F1F6FF] text-[20px] leading-[38px  font-[500] rounded-[8px] p-[8px] mb-[10px]">
              Role <MdKeyboardArrowRight />
            </button></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 right-[0]">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
           

            <div className="cencelation flex flex-col items-center">
              <ProjectButton3>Cancel</ProjectButton3>
              <ProjectButton3>Accept</ProjectButton3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddUser;
