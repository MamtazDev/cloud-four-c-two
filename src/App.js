import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account/Account";
import Help from "./components/Help.js/Help";
import Manage from "./components/MangeUser/Manage";
import NodeInfo from "./components/MangeUser/NodeInfo";
import AddUser from "./components/Projects/AddUser";
import Project from "./components/Projects/Project";
import ProjectCopy from "./components/Projects/ProjectCopy";
import ProjectDetails from "./components/Projects/ProjectDetails";
import ProjectUpload from "./components/Projects/ProjectUpload";
import StartSession from "./components/Projects/StartSession";

import ProjectReport from "./components/Projects/ProjectReport";

import Login from "./components/Register/Login";
import Register from "./components/Register/Register";
import Sidebar from "./components/shared/Sidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="dashboard" element={<Sidebar />}>
          <Route index element={<Account />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="projectDetails" element={<ProjectDetails />}></Route>
          <Route path="projectReport" element={<ProjectReport />}></Route>
          <Route path="help" element={<Help />}></Route>
          <Route path="manage" element={<Manage />}></Route>

          <Route path="nodeInfo" element={<NodeInfo />}></Route>
          <Route path="addUser" element={<AddUser />}></Route>


          <Route path='startSession' element={<StartSession />}></Route>
          <Route path='projectCopy' element={<ProjectCopy />}></Route>
          <Route path='projectUpload' element={<ProjectUpload />}></Route>

          

        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
