import { Message } from "../";
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log("Messages: ", messages);
  return (
    <div className="px-4 flex-1 overflow-auto max-w-screen-sm">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
