import { ChatContext } from "@/context/chat-context";
import { useContext } from "react";

export const useChats = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("chat context must be within the chat provider");
  }

  return context;
};
