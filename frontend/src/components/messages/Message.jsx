import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;

  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat my-[5px] ${chatClassName}`}>
      <div
        className={`text-sm sm:text-base break-all whitespace-pre-wrap max-w-[75%]  chat-bubble text-white ${bubbleBgColor} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-100 mt-[2px]">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
