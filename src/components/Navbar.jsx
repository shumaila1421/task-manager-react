import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-4 py-3 flex items-center justify-between">
      <h1 className="font-semibold">TASK MANAGER</h1>
      <Link
        className="px-4 py-2 rounded bg-blue-600 text-white font-semibold"
        to="login"
      >
        Login
      </Link>
    </div>
  );
}

export default Navbar;
