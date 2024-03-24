import { Message } from "../";
import useGetMessages from "../../hooks/useGetMessages";
import { MessageSkeleton } from "../";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log("Messages: ", messages);
  return (
    <div className="px-4 flex-1 overflow-auto max-w-screen-sm">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, id) => (
          <Message key={message._id} message={message} />
        ))}

      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
