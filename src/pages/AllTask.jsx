import { useContext } from "react";
import Navbar from "../components/Navbar";
import { TaskContext } from "../context/TaskContext";

function AllTask() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <Navbar />
      <h1 className="p-4 font-bold text-xl">All Tasks</h1>

      <section className="grid grid-cols-3 gap-4 p-4">
        <article className="bg-zinc-200 p-4 rounded-md flex flex-col gap-2 ">
          <p className="text-xs text-red-400">Task Priority</p>
          <h2 className="font-semibold text-lg">Task Title</h2>
          <p className="text-sm">Task Description</p>
          <p className="text-xs bg-green-300 w-fit font-semibold px-4 py-1 rounded-4xl">
            Task Status
          </p>
        </article>
      </section>
    </div>
  );
}

export default AllTask;
