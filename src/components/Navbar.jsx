import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "./ui/Button";

function Navbar() {
  let { user, setUser } = useContext(AuthContext);

  function handleClick() {
    setUser(null);
  }

  return (
    <div className="px-4 py-3 flex items-center justify-between">
      <h1 className="font-semibold">TASK MANAGER</h1>

      {user && (
        <nav className="flex gap-4 items-center">
          <Link to="/">Home</Link>
          <Link to="/">All Task</Link>
          <Link to="/add-task">Add Task</Link>
          <Button type="button" text="Logout" onClick={handleClick} />
        </nav>
      )}

      {!user && (
        <Link
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold"
          to="login"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
