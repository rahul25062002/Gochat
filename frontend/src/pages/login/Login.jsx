import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-80 sm:min-w-96 mx-auto">
      <div className="flex flex-col gap-2 w-full p-5 rounded-lg shadow-md bg-gradient-to-l from-slate-900 to-purple-900">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> GoChat</span>
        </h1>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <label className="label  ">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="text-gray-300 text-sm mt-3  ">
            {"Don't"} have an account?{` `}
            <Link
              className="text-blue-600 hover:text-pink-500 font-bold "
              to={"/signup"}
              href="#"
            >
              SignUp
            </Link>
          </p>

          <div>
            <button
              className="w-[100%] relative inline-flex items-center justify-center p-0.5 mt-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  focus:outline-none"
              disabled={loading}
            >
              <span class="w-[100%] text-lg h-[3rem] min-h-[3rem] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
