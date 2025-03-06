import ChatWithZed from "./chat with zed/chat-zed";
import Dashboard from "./ai summary/dashboard";

const ContractDashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="w-2/4 relative border-r h-[calc(100vh-4rem)]">
          <ChatWithZed />
        </div>

        <div className="w-2/4 relative border-r h-[calc(100vh-4rem)]">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default ContractDashboard;
