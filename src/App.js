import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account/Account";
import Project from "./components/Projects/Project";
import ProjectDetails from "./components/Projects/ProjectDetails";
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
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
