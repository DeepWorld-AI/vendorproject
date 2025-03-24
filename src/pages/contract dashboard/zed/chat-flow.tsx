import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChats } from "@/hooks/use-chats";

const ChatFlow = () => {
  const { activeChat } = useChats();

  return (
    <>
      {activeChat?.messages?.map((message: any, index: number) => (
        <Message key={index} message={message} />
      ))}
    </>
  );
};

export default ChatFlow;

// Message Component
interface MessageProps {
  message: {
    sender: string;
    text: string;
  };
}

const Message = ({ message }: MessageProps) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex gap-2 text-sm mb-2 p-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarImage
            src="https://r2.erweima.ai/imgcompressed/compressed_b9be5ab00f146e784ddeff98dc99caa8.webp"
            alt="Zed"
          />
          <AvatarFallback className="rounded-lg">Z</AvatarFallback>
        </Avatar>
      )}

      <p
        className={`p-2 rounded-lg max-w-xs ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {message.text}
      </p>

      {isUser && (
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarImage src="https://via.placeholder.com/40" alt="User" />
          <AvatarFallback className="rounded-lg">U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
