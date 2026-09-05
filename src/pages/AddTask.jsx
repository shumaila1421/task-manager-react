import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function AddTask() {
  const { register, handleSubmit } = useForm();

  function handleData(data) {
    console.log(data);
  }

  return (
    <div>
      <Navbar />

      <form
        onSubmit={handleSubmit(handleData)}
        className="max-w-lg mx-auto h-screen flex flex-col gap-2 justify-center"
      >
        <Input
          label={"title"}
          type="text"
          placeholder="Task Title"
          register={register}
        />
        <Input
          label={"description"}
          type="text"
          placeholder="Description"
          register={register}
        />

        <select
          {...register("status")}
          className="px-3 py-2 border border-gray-300"
        >
          <option>Task Status</option>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select {...register("priority")}>
          <option>Task Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <Button text="Add Task" type="submit" />
      </form>
    </div>
  );
}

export default AddTask;
