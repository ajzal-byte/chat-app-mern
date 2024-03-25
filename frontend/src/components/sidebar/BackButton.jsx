import React from "react";
import useConversation from "../../zustand/useConversation";
import { IoReturnUpBackOutline } from "react-icons/io5";

const BackButton = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <>
      {selectedConversation && (
        <IoReturnUpBackOutline
          className="cursor-pointer mb-2 text-zinc-950"
          onClick={() => setSelectedConversation(null)}
        />
      )}
    </>
  );
};

export default BackButton;
