import { AppSidebar } from "./app-sidebar";
import { Link, Route, Routes, useLocation } from "react-router";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Playground from "@/pages/playground";
import ContractLibrary from "@/pages/contract-library";
import { useEffect, useState } from "react";
import AgentResponse from "@/pages/agent-response";
import ContractDashboard from "@/pages/contract dashboard/contract-dashboard";
import ZedSummary from "@/pages/contract dashboard/chat with zed/zed-summary";
import ZedHistory from "@/pages/contract dashboard/chat with zed/zed-history";
import ZedActivity from "@/pages/contract dashboard/chat with zed/zed-activity";
import { Input } from "@/components/ui/input";
import {
  CircleAlert,
  CircleCheck,
  CircleUserRound,
  Mail,
  MoreHorizontal,
  Settings,
} from "lucide-react";
import Live from "@/pages/live/live";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ContractContextProvider } from "@/context/contract-context";

export default function Sidebar() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [active, setActive] = useState<string>("playground");
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
          className={`flex justify-between sticky top-0 h-16 z-50 shrink-0 items-center border-b px-4 transition duration-300
      ${isBlurred ? "bg-white/60 backdrop-blur-md" : "bg-white"}`}
        >
          {location.pathname !== "/live" && (
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <p className="text-sm font-medium cursor-pointer">Test Run</p>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Link
                to="/"
                className={`text-sm font-medium cursor-pointer ${
                  active === "playground" ? "text-[#9B8BF4]" : ""
                }`}
                onClick={() => setActive("playground")}
              >
                Playground
              </Link>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <p className="text-sm font-medium cursor-pointer">
                <Link
                  to="/live"
                  className={`${
                    location.pathname === "/live" ? "text-[#9B8BF4]" : ""
                  }`}
                  onClick={() => setActive("live")}
                >
                  Live
                </Link>
              </p>
            </div>
          )}
          {location.pathname === "/live" && (
            <div className="flex items-center">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />

              <div className="flex flex-col items-center">
                <h2 className="text-base font-bold text-[#9D4B77] flex items-center">
                  IT Vendor Agreements{" "}
                  <MoreHorizontal
                    className="text-gray-500 cursor-pointer mx-2 mt-1"
                    size={24}
                  />
                </h2>

                <div className="flex items-center space-x-2 pl-2">
                  <span className="bg-teal-500 text-white text-xs flex items-center justify-center font-semibold px-2 h-4 py-1 rounded">
                    Live
                  </span>
                  <span className="text-gray-500 text-xs">
                    135 active contracts managed
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-4">
            <Input className="w-[400px] h-9" placeholder="search.." />
            <Separator orientation="vertical" className="h-4" />
            <CircleCheck size={18} className="cursor-pointer" />
            <Separator orientation="vertical" className="h-4" />
            <Mail size={18} className="cursor-pointer" />
            <Separator orientation="vertical" className="h-4" />
            <CircleAlert size={18} className="cursor-pointer" />
            <Separator orientation="vertical" className="h-4" />
            <Settings size={18} className="cursor-pointer" />
            <Separator orientation="vertical" className="h-4" />
            <Popover>
              <PopoverTrigger asChild>
                <CircleUserRound
                  className="text-gray-600 cursor-pointer"
                  size={25}
                />
              </PopoverTrigger>
              <PopoverContent className="w-80 mr-4 mt-4 text-sm">
                User Profile
              </PopoverContent>
            </Popover>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4">
          <Routes>
            <Route path="/" element={<Playground />} />
            <Route path="/contract-library" element={<ContractLibrary />} />
            <Route path="/agent-response" element={<AgentResponse />} />
            <Route
              path="/contract-dashboard/:contractName"
              element={
                <ContractContextProvider>
                  <ContractDashboard />
                </ContractContextProvider>
              }
            >
              <Route index element={<ZedSummary />} />
              <Route
                path="/contract-dashboard/:contractName/zed-history"
                element={<ZedHistory />}
              />
              <Route
                path="/contract-dashboard/:contractName/zed-activity"
                element={<ZedActivity />}
              />
            </Route>
            <Route path="/live" element={<Live />} />
          </Routes>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
