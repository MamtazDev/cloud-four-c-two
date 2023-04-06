import axios from "axios";
import React, { useRef, useState } from "react";

const EditProject = ({ id }) => {
  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const inputRef = useRef();
  // image upload start
  const onFileChangeCapture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const inputHandler = () => {
    inputRef.current.click();
  };
  // image upload end
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const project_name = e.target.project_name.value;
    const project_description = e.target.project_description.value;

    const info = {
      project_name,
      project_description,
      project_image: base64Image,
    };

    axios.defaults.withCredentials = true;

    axios
      .post(`https://app.cloud4c2.com/api/project/edit/${id}`, info, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data.message === "Project successfully edited") {
          e.target.reset();
          window.location.reload(true);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-5">Edit Project</h1>
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

        <div className="copy__img border-[1px] overflow-hidden w-3/4 mx-auto bordered rounded-[8px] mb-4">
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            onChangeCapture={onFileChangeCapture}
            onChange={handleImageChange}
            className="file-input w-full hidden  border-0 bg-white"
          />
          {file === null ? (
            <div
              onClick={inputHandler}
              className="profile relative cursor-pointer "
            >
              {/* <img
                className="relative z-[99] h-[192px] w-full"
                src="https://lppm.upnjatim.ac.id/assets/img/nophoto.png"
                alt=""
              /> */}
              <button
                type="button"
                className="underline commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]"
              >
                Pick new image
              </button>
            </div>
          ) : (
            <div
              onClick={inputHandler}
              className="profile relative cursor-pointer "
            >
              <img
                className="relative z-[99] w-full h-[192px] "
                src={file}
                alt=""
              />
              <button className="underline commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]">
                Pick new image
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-[30px] mb-[30px]">
          <button
            type="submit"
            className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
