import ChatWithZed from "./chat-zed";
import Dashboard from "./dashboard";

const ContractDashboard = () => {
  return (
    <>
      <div className="flex">
        <div className="w-2/4 relative border-r h-[calc(100vh-4rem)] overflow-y-auto">
          <ChatWithZed />
        </div>

        <div className="w-2/4 relative border-r h-[calc(100vh-4rem)] overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default ContractDashboard;
