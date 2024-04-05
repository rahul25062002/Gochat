import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center  gap-2"
    >
      <input
        type="text"
        placeholder="Search…"
        className="w-full input rounded-full h-[2.5rem] text-sm "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-circle w-[2.5rem] h-[2.5rem] min-h-[2.5rem] bg-sky-500 text-white hover:bg-pink-500 border-none"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
