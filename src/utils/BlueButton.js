import React from "react";

const BlueButton = ({ children }) => {
  return (
    <div>
      <button
        className="bg-[#3853A4] py-[17px] px-[50px] text-white text-[20px] font-[500] rounded-[5px]"
        type=""
      >
        {children}
      </button>
    </div>
  );
};

export default BlueButton;
