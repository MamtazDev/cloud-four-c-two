import React from "react";

const AddUser = () => {
  return (
    <div className="p-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="bg-[#F8FAFF] p-6 rounded-[40px]">
          <input
            type="search"
            className="border h-[40px] rounded-[36px] pl-8 w-full"
            placeholder="Search"
          />
          <div className="flex gap-[6px]">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT60MyBMkcLfLBsjr8HyLmjKrCiPyFzyA-4Q&usqp=CAU" />
              </div>
            </div>

            <div>
              <p>Hannan</p>
              <p>You: Hello... 2.18</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <button type=""></button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
