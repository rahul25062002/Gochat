import { useState, useEffect } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = ({ selectedConversation }) => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  useEffect(() => {
    setMessage("");
  }, [selectedConversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message.trim());
    setMessage("");
    e.target.style.height = "2.75rem";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    const textarea = e.target;
    if (textarea.scrollHeight > textarea.clientHeight) {
      textarea.style.overflowY = "hidden";
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    } else if (textarea.value === "") {
      textarea.style.height = "2.75rem";
    }
  };

  return (
    <form className="px-2 sm:px-4 my-3 " onSubmit={handleSubmit}>
      <div className="w-full flex items-end gap-2">
        <textarea
          type="text"
          className=" resize-none text-sm sm:text-base rounded-lg w-full p-2 bg-white dark:bg-[#1D232A] dark:text-slate-400 border-none text-black outline-none !important h-[2.75rem]  max-h-[7rem] placeholder-middle"
          placeholder="Send a message"
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          className="flex items-center justify-center w-[2.75rem] h-[2.75rem]  btn btn-circle  bg-sky-500 text-white hover:bg-pink-500 border-none min-h-[2.75rem] !important  "
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend className="w-5 h-5 outline-none" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
