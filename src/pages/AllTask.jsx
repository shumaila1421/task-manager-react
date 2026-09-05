import { useContext } from "react";
import Navbar from "../components/Navbar";
import { TaskContext } from "../context/TaskContext";
import Card from "../components/Card";

function AllTask() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <Navbar />
      <h1 className="p-4 font-bold text-xl">All Tasks</h1>

      <section className="grid grid-cols-3 gap-4 p-4">
        {tasks.map(function (val, idx) {
          return <Card data={val} key={idx} />;
        })}
      </section>
    </div>
  );
}

export default AllTask;
