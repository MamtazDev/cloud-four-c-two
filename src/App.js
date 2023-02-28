
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Register/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>

  );
}

export default App;
