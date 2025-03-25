import { useChats } from "@/hooks/use-chats";
import { Pin } from "lucide-react";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";

interface OlderChatsProps {
  setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OlderChats({ setOpenDropdown }: OlderChatsProps) {
  const { pinnedChats, chats, selectChat, togglePinChat } = useChats();
  const location = useLocation();
  const navigate = useNavigate();
  const { contractName } = useParams<{ contractName: string }>();

  return (
    <div className="mt-4">
      {[
        { title: "Pinned", chats: pinnedChats },
        { title: "Chat History", chats: chats },
      ].map(({ title, chats }) =>
        chats.length > 0 ? (
          <div key={title} className="mb-4 last:mb-0">
            <h3 className="text-xs font-medium text-gray-400 uppercase px-1">
              {title}
            </h3>
            <ul className="mt-2">
              {chats.map((chat) => (
                <li
                  key={chat.id}
                  className="text-sm flex justify-between items-center"
                  onClick={() => {
                    if (!location.pathname.includes("chat")) {
                      navigate(`/contract-dashboard/${contractName}/chat`);
                    }
                    selectChat(chat.id);
                    setOpenDropdown(false);
                  }}
                >
                  <p className="truncate hover:bg-gray-100 cursor-pointer rounded-md py-1 px-2 flex-1">
                    {chat.title || chat.messages[0]?.text || "Untitled Chat"}
                  </p>
                  <Pin
                    className="text-gray-400 hover:text-gray-600 cursor-pointer w-4 h-4 rotate-45 mx-1"
                    onClick={() => togglePinChat(chat.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null
      )}
    </div>
  );
}
