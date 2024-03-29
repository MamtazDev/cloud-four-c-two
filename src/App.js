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
import EditUser from "./components/Account/EditUser";
import UserLog from "./components/MangeUser/UserLog";
import SessionLog from "./components/Projects/SessionLog";
import ProjectLog from "./components/Projects/ProjectLog";
import Notfound from "./components/Notfound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="dashboard" element={<Sidebar />}>
          <Route index element={<Account />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="edit-user/:id" element={<EditUser />}></Route>
          <Route path="projectDetails/:id" element={<ProjectDetails />}></Route>
          <Route path="projectReport" element={<ProjectReport />}></Route>
          <Route path="help" element={<Help />}></Route>
          <Route path="manageUser" element={<Manage />}></Route>
          <Route path="nodeInfo" element={<NodeInfo />}></Route>
          <Route path="addUser/:id" element={<AddUser />}></Route>
          <Route path="user-log/:id" element={<UserLog />}></Route>
          <Route path="session-log/:id" element={<SessionLog />}></Route>
          <Route path="project-log/:id" element={<ProjectLog />}></Route>
          <Route path="startSession/:id" element={<StartSession />}></Route>
          <Route path="projectCopy/:id" element={<ProjectCopy />}></Route>
          <Route path="projectUpload" element={<ProjectUpload />}></Route>
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
