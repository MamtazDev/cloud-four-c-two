import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account/Account";
import Manage from "./components/MangeUser/Manage";
import Project from "./components/Projects/Project";
import ProjectDetails from "./components/Projects/ProjectDetails";
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
          <Route path="manage" element={<Manage />}></Route>
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
