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
  // console.log(base64Image);

  const handleSubmit = (e) => {
    e.preventDefault();
    const project_name = e.target.project_name.value;
    const project_description = e.target.project_description.value;
    const file_data = e.target.file_data.value;
    const project_path_to_execute = e.target.project_path_to_execute.value;

    const data = {
      project_name,
      file_data: base64Image,
      project_path_to_execute,
      project_description,
      // project_image: base64Image,
    };
    console.log(data);

    fetch("https://app.cloud4c2.com/api/project/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "New project successfully created") {
          e.target.reset();
          alert(data.message);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            name="project_description"
          ></textarea>
        </div>
        {/* <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            Project Image <sup className="text-[#C9312E]">*</sup>
          </label>
          <input
            type="file"
            accept="image/*"
            className="file-input w-full bg-white"
            onChange={handleImageChange}
          />
        </div> */}
        <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            File Data <sup className="text-[#C9312E]">*</sup>
          </label>
          <input
            type="file"
            name="file_data"
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
            name="project_path_to_execute"
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
