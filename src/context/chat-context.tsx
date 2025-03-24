import { generateRandomSentence } from "@/pages/contract dashboard/random-text-generator";
import React, { createContext, ReactNode, useState } from "react";

interface Message {
  sender: "user" | "zed";
  text: string;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  pinned: boolean;
}

interface ChatContextProps {
  chats: Chat[];
  pinnedChats: Chat[];
  activeChat: Chat | null;
  createChat: (initialMessage: string) => void;
  selectChat: (chatId: string) => void;
  togglePinChat: (chatId: string) => void;
  addMessage: (message: string, sender: "user" | "zed") => void;
  setActiveChat: React.Dispatch<React.SetStateAction<Chat | null>>;
}

export const ChatContext = createContext<ChatContextProps | undefined>(
  undefined
);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [pinnedChats, setPinnedChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);

  // Function to create a new chat
  const createChat = (initialMessage: string) => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: initialMessage,
      messages: [{ sender: "user", text: initialMessage }],
      pinned: false,
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChat(newChat);

    // Immediately generate a response from "zed"
    const zedResponse: Message = {
      sender: "zed",
      text: generateRandomSentence(),
    };

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === newChat.id
          ? { ...chat, messages: [...chat.messages, zedResponse] }
          : chat
      )
    );

    setActiveChat((prevChat) =>
      prevChat
        ? { ...prevChat, messages: [...prevChat.messages, zedResponse] }
        : null
    );
  };

  // Function to select an existing chat
  const selectChat = (chatId: string) => {
    const chat = chats.find((c) => c.id === chatId);
    if (chat) setActiveChat(chat);
  };

  const togglePinChat = (chatId: string) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId ? { ...chat, pinned: !chat.pinned } : chat
      )
    );
    const chatToToggle = chats.find((chat) => chat.id === chatId);
    if (chatToToggle) {
      setPinnedChats((prevPinned) =>
        chatToToggle.pinned
          ? prevPinned.filter((c) => c.id !== chatId)
          : [chatToToggle, ...prevPinned]
      );
    }
  };

  const addMessage = (message: string, sender: "user" | "zed") => {
    if (!activeChat) return;

    const newMessage: Message = { sender, text: message };

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChat.id
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    );

    setActiveChat((prevChat) =>
      prevChat
        ? { ...prevChat, messages: [...prevChat.messages, newMessage] }
        : null
    );

    // If the sender is the user, generate a response from "zed"
    if (sender === "user") {
      setTimeout(() => {
        const zedResponse: Message = {
          sender: "zed",
          text: generateRandomSentence(),
        };

        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === activeChat?.id
              ? { ...chat, messages: [...chat.messages, zedResponse] }
              : chat
          )
        );

        setActiveChat((prevChat) =>
          prevChat
            ? { ...prevChat, messages: [...prevChat.messages, zedResponse] }
            : null
        );
      }, 1000);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        pinnedChats,
        activeChat,
        createChat,
        selectChat,
        togglePinChat,
        addMessage,
        setActiveChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
