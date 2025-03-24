import { MoreVertical } from "lucide-react";

const ZedHistory = () => {
  const chats = [
    {
      initials: "F",
      title: "SaaS Agreement Insights",
      started: "12 Mar 2025, 10:24 AM",
      lastInteraction: "12 Mar 2025, 12:48 PM",
      colors: ["bg-teal-600", "text-white"],
    },
    {
      initials: "R A",
      title: "Smart Monitoring for Your Agreement",
      started: "11 Mar 2025, 12:05 PM",
      lastInteraction: "12 Mar 2025, 12:48 PM",
    },
    {
      initials: "L F",
      title: "SaaS Terms & Risk Analysis",
      started: "12 Mar 2025, 12:48 PM",
      lastInteraction: "12 Mar 2025, 12:48 PM",
    },
    {
      initials: "F L R",
      title: "Billing, Uptime & Legal Checks",
      started: "12 Mar 2025, 12:48 PM",
      lastInteraction: "12 Mar 2025, 12:48 PM",
    },
  ];

  return (
    <div className="mx-auto p-4 space-y-4">
      {chats.map((chat, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b pb-1 space-y-2"
        >
          <div className="flex flex-col">
            <div className={`flex ${index > 0 ? "-space-x-2" : ""}`}>
              {chat.initials.split(" ").map((initial, i) => (
                <div
                  key={i}
                  className={`h-7 w-7 flex items-center justify-center rounded-lg bg-purple-500 border text-white text-sm font-semibold`}
                >
                  {initial}
                </div>
              ))}
            </div>

            <div className="flex-1">
              <h2 className="font-semibold text-sm">{chat.title}</h2>
              <p className="text-xs text-gray-500">Started: {chat.started}</p>
              <p className="text-xs text-gray-500">
                Last Interaction: {chat.lastInteraction}
              </p>
            </div>
          </div>
          <MoreVertical className="text-gray-400 cursor-pointer" size={18} />
        </div>
      ))}
    </div>
  );
};

export default ZedHistory;
