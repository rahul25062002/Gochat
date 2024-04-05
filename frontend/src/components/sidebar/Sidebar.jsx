import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="relative w-[35%] sm:w-[30%] border-r border-slate-400 px-2  sm:px-4 pt-3  pb-2 flex flex-col">
      <SearchInput />
      <div className="h-0 sm:h-[1rem] divider px-3 my-[0.5rem] "></div>

      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;

