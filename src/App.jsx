import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddTask from "./pages/AddTask";
import AllTask from "./pages/AllTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/all-tasks" element={<AllTask />} />
      </Routes>
    </>
  );
}

export default App;
