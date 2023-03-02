import React from "react";

const BlueButton = ({ children }) => {
  return (
    <div>
      <button
        className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
        type=""
      >
        {children}
      </button>
    </div>
  );
};

export default BlueButton;
