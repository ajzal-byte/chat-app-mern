import { Message } from "../";
import { MessageSkeleton } from "../";
import { useEffect, useRef } from "react";
import { useGetMessages, useListenMessages } from "../../hooks";
import useConversation from "../../zustand/useConversation";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const { selectedConversation } = useConversation();
  useListenMessages();
  const lastMessageRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto max-w-screen-sm">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, id) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center max-w-96">This is the very beginning of your legendary conversation with {selectedConversation.fullName}</p>
      )}
    </div>
  );
};

export default Messages;
