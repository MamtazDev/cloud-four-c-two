import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
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
      file_data: "data:text/plain;base64,",
      project_path_to_execute: "project/project.360",
      project_description,
      project_image: base64Image,
    };
    // console.log(info, "click");

    axios.defaults.withCredentials = true;

    axios
      .post("https://app.cloud4c2.com/api/project/create", info, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data.message === "New project successfully created") {
          fetch(
            `app.cloud4c2.com/editor/?editorID=124ebb02-8d9c-4d28-a6c1-da523dbda0ee&projectID=5s `,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                credentials: "include",
              },
            }
          ).then((response) => console.log(response, "start editing"));

          e.target.reset();
          window.location.reload(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          navigate("/");
        }
      });
  };
  const handleEditor = (projectId) => {
    console.log("clicked on handleEditor");

    fetch(
      `app.cloud4c2.com/editor/?editorID=124ebb02-8d9c-4d28-a6c1-da523dbda0ee&projectID=${projectId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          credentials: "include",
        },
      }
    ).then((res) => {
      console.log("start editing", res);
      const fullUrl = res.url;
      console.log("URL:", fullUrl);
      const domain = fullUrl.split("/projectDetails/")[1];

      setTimeout(() => {
        redirectHandler(domain);
      }, 2000);

      // if (res.ok === true) {
      // navigate(`/${domain}`);
      // }
    });
  };

  const redirectHandler = (domain) => {
    console.log("Redirect function is triggered", domain);

    window.open(` ${"http://" + domain}`, "_blank");
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-5">New Project</h1>
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
              <img
                className="relative z-[99] h-[192px] w-full"
                src="https://lppm.upnjatim.ac.id/assets/img/nophoto.png"
                alt=""
              />
              <button className="underline commissioner w-full bg-[#F8FAFF] text-[18px] font-[500] text-center py-[15px] mt-[-10px] z-[9]">
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
        {/* <div className="mb-[33px]">
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
        </div> */}
        {/* <div className="mb-[33px]">
          <label className="outfit text-[20px] font-[300] mb-[10px] block">
            Project Path to Execute <sup className="text-[#C9312E]">*</sup>
          </label>
          <input
            type="text"
            className="input input-bordered w-full h-[56px]"
            name="project_path_to_execute"
          />
        </div> */}

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
