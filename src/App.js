
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account/Account";
import Manage from "./components/MangeUser/Manage";
import NodeInfo from "./components/MangeUser/NodeInfo";
import Project from "./components/Projects/Project";
import Login from "./components/Register/Login";
import Register from "./components/Register/Register";
import Sidebar from "./components/shared/Sidebar";

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Sidebar/>} >
          <Route index element={<Account/>}></Route>
          <Route path='project' element={<Project />}></Route>
          <Route path='manage' element={<Manage />}></Route>
          <Route path='nodeInfo' element={<NodeInfo />}></Route>
          

        </Route>

        <Route path="/register" element={<Register />} />
        {/* <Route path="/account" element={<Account />} /> */}
      </Routes>
    </div>

  );
}

export default App;
