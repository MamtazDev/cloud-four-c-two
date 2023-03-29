import React, { useEffect, useState } from "react";
import BlueButton from "../../utils/BlueButton";
import girl from "../../assets/girl.png";
import bob from "../../assets/bob.png";
import sarah from "../../assets/sarah.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [project, setProject] = useState();
  const [session, setSession] = useState();
  const { id } = useParams();
  const [deletesession, setDelete] = useState(false);
  axios.defaults.withCredentials = true;

  const handleDeleteSession = (id) => {
    axios
      .post(`https://app.cloud4c2.com/api/session/delete/${id}`)
      .then((res) => {
        if (res.data.message === "session deleted") {
          setDelete(!deletesession);
        }
      });
  };

  const handleUserRemove = (UserId) => {
    axios
      .post(`https://app.cloud4c2.com/api/project/remove_user/${id}`, {
        user_id: UserId,
      })
      .then((res) => {
        if (res.data.message === "you removed someone from the project") {
          alert(res.data.message);
          window.location.reload(true);
        }
      });
  };

  const handleSessionDetails = (id) => {
    console.log(id);
    axios
      .post(`https://app.cloud4c2.com/api/session/details/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => console.log(response.data.session));
  };

  useEffect(() => {
    axios
      .post(`https://app.cloud4c2.com/api/project/details/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => setProject(response.data.project));
  }, [deletesession]);
  console.log(project);

  return (
    <div className="bg-[#FFFBFB] lg:py-[61px] lg:px-[57px] lg:rounded-[50px] p-4">
      <div className="max-w-[1091px]">
        <div className="mb-[57px]">
          <BlueButton>Leave Project (Not Admin)</BlueButton>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-[40px]">
          <div>
            <button
              className="commissioner outline_btn w-full mb-[20px] py-[18px] font-[500]"
              type=""
            >
              Edit Name
            </button>
            <button
              className="commissioner outline_btn w-full py-[18px] font-[500] mb-[20px]"
              type=""
            >
              Edit description
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] mb-[20px]">
              <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                Disable project
              </button>
              <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                Delete project
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
              <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                <Link to={`/dashboard/projectCopy/${id}`}>Copy project</Link>
              </button>







              
              <button className="bg-[#3853A4] py-[17px]  text-white text-[16px] font-[500] rounded-[5px]">
                Edit project
              </button>
              <button className="bg-[#3853A4] py-[17px] text-white text-[16px] font-[500] rounded-[5px]">
                Change image
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-[12px] h-[305px] w-full"
              src={project?.image}
              // src={girl}
              alt=""
            />
          </div>
        </div>

        {/* session part */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="commissioner text-[16px] font-[500]">Sessions</p>
            {/* <BlueButton>New session</BlueButton> */}
            <Link
              to={`/dashboard/startSession/${project?.project_id}`}
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              type="submit"
            >
              New session
            </Link>
          </div>
          <div className="border border-[#3853A4] rounded-[5px] pb-[56px]">
            {project?.sessions?.map((session, index) => (
              <div className="flex ">
                <p className="commissioner font-[500] w-[210px] pl-[17px] py-[20px]">
                  Sessions {index + 1}{" "}
                </p>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://cloud4c2.com/map/?sessionID=${session.session_id}`}
                  className="commissioner session_bg w-[111px] py-[20px] text-center font-[400]"
                >
                  Join
                </a>
                <button
                  onClick={() => handleDeleteSession(session.session_id)}
                  className="commissioner session_bg w-[226px] py-[20px] text-center font-[400]"
                >
                  Delete (ANALYST)
                </button>
                <button></button>

                {/* The button to open modal */}
                <label
                  onClick={() => handleSessionDetails(session.session_id)}
                  className="commissioner session_bg px-5 py-[20px] text-center font-[400]"
                  htmlFor={"my-modal" + session.session_id}
                >
                  {" "}
                  Details
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id={"my-modal" + session.session_id}
                  className="modal-toggle"
                />
                <label
                  htmlFor={"my-modal" + session.session_id}
                  className="modal cursor-pointer"
                >
                  <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">
                      Creation Time: {session.creation_time}
                    </h3>
                    <p className="py-4">Creator: {session.creator}</p>
                    <p className="py-4">Project Id: {session.project_id}</p>
                    <p className="py-4">Session Id: {session.session_id}</p>
                  </label>
                </label>
                <Link to={`/dashboard/session-log/${session.session_id}`}>
                  <button className="commissioner session_bg w-[111px] py-[20px] text-center font-[400]">
                    Log
                  </button>
                </Link>
              </div>
            ))}
            {/* <div className="flex text-[16px]">
              <p className="commissioner w-[210px] font-[500] pl-[17px] py-[20px]">
                Sessions 02{" "}
              </p>

              <p className="commissioner session_bg  w-[111px] py-[20px] text-center font-[400]">
                Join
              </p>
              <p className="commissioner session_bg  w-[226px] py-[20px] text-center font-[400]">
                Delete (ANALYST)
              </p>
            </div> */}
          </div>
        </div>
        {/* user part */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="text-[16px] font-[500]">Users</p>
            {/* <BlueButton>Add user</BlueButton> */}
            <Link
              to={`/dashboard/addUser/${project?.project_id}`}
              className="outfit bg-[#3853A4] p-3 lg:py-[17px] lg:px-[50px] text-white text-[15px] lg:text-[20px] font-[500] rounded-[5px]"
              type="submit"
            >
              Add user
            </Link>
          </div>
          <div className="border border-[#3853A4] rounded-[5px] pb-[56px]">
            {project?.users?.map((user) => (
              <div key={user.user_id} className="flex ">
                <p className="flex items-center gap-[11px] font-[500] w-[210px] pl-[17px] py-[20px]">
                  <img width={36} src={user.image} alt="" /> {user.username}
                </p>

                <p
                  className=" session_bg w-[257px] py-[20px] text-center font-[400] cursor-pointer"
                  onClick={() => handleUserRemove(user.user_id)}
                >
                  Remove (ANALYST)
                </p>
                <p className=" session_bg w-[257px] py-[20px] text-center font-[400]">
                  Change role (ANALYST)
                </p>
              </div>
            ))}

            {/* <div className="flex text-[16px]">
              <p className="flex items-center gap-[11px] font-[500] w-[210px] pl-[17px] py-[20px]">
                <img width={36} src={sarah} alt="" /> Sarah
              </p>

              <p className=" session_bg  w-[257px] py-[20px] text-center font-[400]">
                Remove (ANALYST)
              </p>
              <p className=" session_bg  w-[257px] py-[20px] text-center font-[400]">
                Change role (ANALYST)
              </p>
            </div> */}
          </div>
        </div>
        {/* recent activity part */}
        <div className="mb-[22px]">
          <div className="flex items-center justify-between mb-[12px]">
            <p className="text-[16px] font-[500]">Recent Activity</p>
            <BlueButton>Full report</BlueButton>
          </div>
          <div className="border border-[#3853A4] rounded-[5px] pb-[56px]">
            <div className="flex ">
              <p className="font-[500] w-[210px] pl-[17px] py-[20px]">
                Session 01
              </p>

              <p className=" session_bg w-[257px] py-[20px] text-center font-[400]">
                Remove (ANALYST)
              </p>
              <p className=" session_bg w-[257px] py-[20px] text-center font-[400]">
                Change role (ANALYST)
              </p>
            </div>
            <div className="flex text-[16px]">
              <p className="w-[210px] font-[500] pl-[17px] py-[20px]">Bob</p>
              <p className="font-[500] py-[20px]">
                this is some text log, no buttons should be here
              </p>
            </div>
            <div className="flex text-[16px]">
              <p className="w-[210px] font-[500] pl-[17px] py-[20px]"></p>
              <p className="font-[500] py-[20px] mr-[97px]">Remove (ANALYST)</p>
              <p className="font-[500] py-[20px]">Change role (ANALYST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
