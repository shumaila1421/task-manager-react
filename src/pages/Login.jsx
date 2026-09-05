import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { user, setUser } = useContext(AuthContext);

  function handleData(data) {
    console.log(data);
    setUser(data);
    navigate("/");
  }

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col gap-2 justify-center">
      <h1 className="font-bold text-xl">Login to your account</h1>
      <p className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis cumque
        architecto vero saepe dignissimos! Fuga fugiat vero dolorum dolore rem.
      </p>

      <form onSubmit={handleSubmit(handleData)}>
        <Input
          register={register}
          label="email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          register={register}
          label="password"
          type="password"
          placeholder="Enter your password"
        />
        <Button type="submit" />
      </form>

      <Link to="/" className="text-sm text-blue-500 my-3 ">
        Go to Home
      </Link>
    </div>
  );
}

export default Login;
