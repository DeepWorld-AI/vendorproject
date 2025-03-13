import ChatWithZed from "./chat with zed/chat-zed";
import Dashboard from "./ai summary/dashboard";

const ContractDashboard = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] w-full">
        <div className="w-1/2 border-r h-full">
          <ChatWithZed />
        </div>

        <div className="w-1/2 h-full">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default ContractDashboard;
