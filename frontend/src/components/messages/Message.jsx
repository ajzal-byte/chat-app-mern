const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCUe9wnnxcH6NBN-4j1oDzYPgBcEKdJgj6A"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi! what's up?</div>
      <div className="chat-bubble text-white bg-blue-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto porro, fugit, similique blanditiis quis ut id magnam cupiditate dignissimos iusto consectetur, accusamus laborum? Eius quos sequi explicabo eos provident nisi?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1">9:41</div>
    </div>
  );
};

export default Message;
