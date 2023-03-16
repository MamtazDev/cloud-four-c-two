import React, { useState } from "react";

const CreateProject = () => {
  const [base64Image, setBase64Image] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  console.log(base64Image);
  return (
    <div>
      <form>
        <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            Project Name <sup className="text-[#C9312E]">*</sup>
          </label>
          <input
            type="text"
            className="input input-bordered w-full h-[56px]"
            name="project_name"
          />
        </div>
        <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            Project Description <sup className="text-[#C9312E]">*</sup>
          </label>
          <textarea
            className="input input-bordered w-full"
            name="O project_description"
          ></textarea>
        </div>
        <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            Project Image <sup className="text-[#C9312E]">*</sup>
          </label>
          <input
            type="file"
            accept="image/*"
            className="file-input w-full bg-white"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            File Data <sup className="text-[#C9312E]">*</sup>
          </label>
          <input
            type="file"
            accept=".zip,.rar,.7zip"
            className="file-input w-full bg-white"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            Project Path to Execute <sup className="text-[#C9312E]">*</sup>
          </label>
          <input
            type="text"
            className="input input-bordered w-full h-[56px]"
            name="project_path_to_execute
            "
          />
        </div>

        <div className="flex justify-center gap-[30px] mb-[30px]">
          <button
            type="submit"
            className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
