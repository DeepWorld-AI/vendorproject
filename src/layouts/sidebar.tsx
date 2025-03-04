import { AppSidebar } from "./app-sidebar";
import { Link, Route, Routes, useLocation } from "react-router";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Playground from "@/pages/playground";
import ContractLibrary from "@/pages/contract-library";
import { useEffect, useState } from "react";
import AgentResponse from "@/pages/agent-response";
import ContractDashboard from "@/pages/contract dashboard/contract-dashboard";
import ZedSummary from "@/pages/contract dashboard/chat with zed/zed-summary";
import ZedHistory from "@/pages/contract dashboard/chat with zed/zed-history";
import ZedActivity from "@/pages/contract dashboard/chat with zed/zed-activity";

export default function Sidebar() {
  const [isBlurred, setIsBlurred] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className={`flex sticky top-0 h-16 z-50 shrink-0 items-center gap-2 border-b px-4 transition duration-300
      ${isBlurred ? "bg-white/60 backdrop-blur-md" : "bg-white"}`}
        >
          <p className="text-sm font-medium cursor-pointer">Test Run</p>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Link
            to="/"
            className="text-sm font-medium cursor-pointer text-[#9B8BF4]"
          >
            Playground
          </Link>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <p className="text-sm font-medium cursor-pointer">Live</p>
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>

        {/* all the components */}
        <div className="flex flex-1 flex-col gap-4">
          <Routes>
            <Route path="/" element={<Playground />} />
            <Route path="/contract-library" element={<ContractLibrary />} />
            <Route path="/agent-response" element={<AgentResponse />} />
            <Route path="/contract-dashboard" element={<ContractDashboard />}>
              <Route index element={<ZedSummary />} />
              <Route
                path="/contract-dashboard/zed-history"
                element={<ZedHistory />}
              />
              <Route
                path="/contract-dashboard/zed-activity"
                element={<ZedActivity />}
              />
            </Route>
          </Routes>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
