import React from "react";
import "../Account/account.css";
import SideLogo from "../../assets/Sidelogo.png";
import Person from "../../assets/Person.png";
import Home from "../../assets/Home.png";
import Info from "../../assets/Info-Square.png";
import User from "../../assets/User.png";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <label tabIndex="0" htmlFor="dashboard-sidebar" className=" lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

          <div className="sideBar py-[36px] bg-[#E1E5F1] h-screen	flex flex-col items-center w-[156px]">
            <div className="bar__top mb-[180px]">
              <Link to="/dashboard/project">
                <img
                  className="px-[45px] mb-[66px]"
                  src={SideLogo}
                  alt="logo"
                />
              </Link>
              <Link to="/dashboard">
                <img
                  className="px-[45px] cursor-pointer"
                  src={Person}
                  alt="image"
                />
              </Link>
            </div>
            <div className="bar__bottom flex flex-col items-center">
              <Link to="/dashboard/project" className="img-wrapper mb-[12px]">
                <img
                  className="px-[45px] py-[25px] cursor-pointer"
                  src={Home}
                  alt="image"
                />
              </Link>
              <Link to="/dashboard/nodeInfo" className="img-wrapper mb-[12px]">
                <img
                  className="px-[45px] py-[25px] cursor-pointer"
                  src={Info}
                  alt="image"
                />
              </Link>
              <Link to="/dashboard/manageUser" className="img-wrapper mb-[62px]">
                <img
                  className="px-[45px] py-[25px] cursor-pointer"
                  src={User}
                  alt="image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="drawer drawer-mobile">
    //   <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content">
    //     <Outlet></Outlet>
    //   </div>
    //   <div className="drawer-side">
    //     <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

    //     <div className="sideBar py-[36px] bg-[#E1E5F1] h-screen	flex flex-col items-center w-[156px]">
    //       <div className="bar__top mb-[180px]">
    //         <img className="px-[45px] mb-[66px]" src={SideLogo} alt="logo" />
    //         <img
    //           className="px-[45px] cursor-pointer"
    //           src={Person}
    //           alt="image"
    //         />
    //       </div>
    //       <div className="bar__bottom flex flex-col items-center">
    //         <div className="img-wrapper mb-[12px]">
    //           <img
    //             className="px-[45px] py-[25px] cursor-pointer"
    //             src={Home}
    //             alt="image"
    //           />
    //         </div>
    //         <Link to="/dashboard/project" className="img-wrapper mb-[12px]">
    //           <img
    //             className="px-[45px] py-[25px] cursor-pointer"
    //             src={Info}
    //             alt="image"
    //           />
    //         </Link>
    //         <div className="img-wrapper mb-[62px]">
    //           <img
    //             className="px-[45px] py-[25px] cursor-pointer"
    //             src={User}
    //             alt="image"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="sideBar py-[36px] bg-[#E1E5F1] h-screen	flex flex-col items-center w-[156px]">
    //   <div className="bar__top mb-[180px]">
    //     <img className="px-[45px] mb-[66px]" src={SideLogo} alt="logo" />
    //     <img className="px-[45px] cursor-pointer" src={Person} alt="image" />
    //   </div>
    //   <div className="bar__bottom flex flex-col items-center">
    //     <div className="img-wrapper mb-[12px]">
    //       <img
    //         className="px-[45px] py-[25px] cursor-pointer"
    //         src={Home}
    //         alt="image"
    //       />
    //     </div>
    //     <div className="img-wrapper mb-[12px]">
    //       <img
    //         className="px-[45px] py-[25px] cursor-pointer"
    //         src={Info}
    //         alt="image"
    //       />
    //     </div>
    //     <div className="img-wrapper mb-[62px]">
    //       <img
    //         className="px-[45px] py-[25px] cursor-pointer"
    //         src={User}
    //         alt="image"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
