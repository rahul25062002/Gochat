import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className=" absolute bottom-3 left-3 ">
      {!loading ? (
        <BiLogOut
          className="w-8 h-8 text-white cursor-pointer hover:text-pink-500 "
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
