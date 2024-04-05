import React, { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  // Function to group messages by date
  const groupMessagesByDate = (messages) => {
    return messages.reduce((groupedMessages, message) => {
      const messageDate = new Date(message.createdAt).toDateString();
	  console.log(messageDate)
      if (!groupedMessages[messageDate]) {
        groupedMessages[messageDate] = [];
      }
      groupedMessages[messageDate].push(message);
      return groupedMessages;
    }, {});
  };

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="sm:px-4 flex-1 overflow-auto">
      {!loading &&
        Object.entries(groupedMessages).map(([date, messages]) => (
          <div key={date}>
            <div className="flex items-center my-2">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="mx-2 text-gray-200 text-sm">{date}</div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            {messages.map((message, index) => (
              <div
                key={message._id}
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                <Message message={message} />
              </div>
            ))}
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-slate-300">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
