import ChatWithZed from "./chat with zed/chat-zed";
import Dashboard from "./ai summary/dashboard";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ContractDashboard = () => {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px]">
        <ResizablePanel defaultSize={50}>
          <ChatWithZed />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Dashboard />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default ContractDashboard;
