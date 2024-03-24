import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversaion: null,
  setSelectedConversation: (selectedConversaion) =>
    set({ selectedConversaion }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
