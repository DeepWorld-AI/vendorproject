import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContract } from "@/hooks/use-contract";

const ZedHistory = () => {
  const { activeChat } = useContract();

  return (
    <div className="flex-1 flex flex-col p-2">
      <h2 className="text-xl font-semibold border-b pb-2">
        {activeChat?.title}
      </h2>
      <div className="flex-1 overflow-y-auto py-1 px-0 space-y-4">
        {activeChat?.messages?.map((msg: any, index: any) => (
          <div
            key={index}
            className={`flex gap-2 ${
              msg.role === "agent" ? "justify-start" : "justify-end"
            }`}
          >
            {/* Show Avatar for Agent */}
            {msg.role === "agent" && (
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Agent Avatar"
                />
                <AvatarFallback>ZED</AvatarFallback>
              </Avatar>
            )}

            {/* Message Bubble */}
            <div
              className={`p-2 rounded-md max-w-xs ${
                msg.role === "agent" ? "bg-gray-200" : "bg-purple-50"
              }`}
            >
              {msg.text}
            </div>

            {/* Show Avatar for Customer */}
            {msg.role === "customer" && (
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="https://ui-avatars.com/api/?name=Aquib"
                  alt="customer"
                />
                <AvatarFallback>AQ</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZedHistory;
