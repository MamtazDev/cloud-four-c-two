import { Route, Routes } from "react-router-dom";
import "./App.css";
import Project from "./components/Projects/Project";
import Login from "./components/Register/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
