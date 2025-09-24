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
import ZedSummary from "@/pages/contract dashboard/zed/zed-summary";
import ChatWithZed from "@/pages/contract dashboard/zed/chat";
import ZedActivity from "@/pages/contract dashboard/zed/zed-activity";
import { Input } from "@/components/ui/input";
import {
  CircleAlert,
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
import ContractsUI from "@/pages/contracts/contracts";
import Vendors from "@/pages/counterparty/counterparty";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AllContracts from "@/pages/contracts/all-contracts";
import AllCollections from "@/pages/contracts/collections/all-collections";
import SingleCollectionContracts from "@/pages/contracts/collections/singleCollection-contract";
import ZedHistory from "@/pages/contract dashboard/zed/zed-history";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [active, setActive] = useState<string>("live");
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
    <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
      <ContractContextProvider>
        <AppSidebar />

        <SidebarInset>
          <header
            className={`flex justify-between sticky top-0 h-16 z-50 shrink-0 items-center border-b px-4 transition duration-300
              ${isBlurred ? "bg-white/60 backdrop-blur-md" : "bg-white"}`}
          >
            {
              location.pathname !== "/" && (
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  {location.pathname === "/playground" && (
                    <p className="text-sm font-medium cursor-pointer">
                      Test Run
                    </p>
                  )}
                  {location.pathname === "/playground" && (
                    <Separator orientation="vertical" className="mr-2 h-4" />
                  )}
                  {location.pathname === "/playground" && (
                    <Link
                      to="/playground"
                      className={`text-sm font-medium cursor-pointer ${
                        active === "playground" ? "text-[#9B8BF4]" : ""
                      }`}
                      onClick={() => setActive("playground")}
                    >
                      Playground
                    </Link>
                  )}
                  {location.pathname === "/playground" && (
                    <Separator orientation="vertical" className="mr-2 h-4" />
                  )}
                  {location.pathname === "/playground" && (
                    <p className="text-sm font-medium cursor-pointer">
                      <Link
                        to="/"
                        className={`${
                          active === "live" ? "text-[#9B8BF4]" : ""
                        }`}
                        onClick={() => setActive("live")}
                      >
                        Live
                      </Link>
                    </p>
                  )}
                </div>
              )}

            {location.pathname === "/agent-response" ||
              (location.pathname === "/" && (
                <div className="flex items-center">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />

                  <div className="flex flex-col items-start pl-2">
                    <h2 className="text-base font-bold text-[#9D4B77] flex items-center">
                      Vendor Agreements
                      <MoreHorizontal
                        className="text-gray-500 cursor-pointer mx-2 mt-1"
                        size={24}
                      />
                    </h2>

                    <div className="flex items-center space-x-2">
                      <span className="bg-teal-500 text-white text-xs flex items-center justify-center font-semibold px-2 h-4 py-1 rounded">
                        Live
                      </span>
                      <span className="text-gray-500 text-xs">
                        135 active contracts managed
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex items-center gap-4">
              <Input className="w-[400px] h-9" placeholder="search.." />
              <Separator orientation="vertical" className="h-4" />
              <Sheet>
                <SheetTrigger asChild>
                  <Mail size={18} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>HELLO !!</SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    Hello, ZED Welcome to managing your contract
                  </div>
                </SheetContent>
              </Sheet>

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
              <Route path="/" element={<Live setActive={setActive} />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/contract-library" element={<ContractLibrary />} />
              <Route path="/agent-response" element={<AgentResponse />} />
              <Route path="/contracts" element={<ContractsUI />} />
              <Route path="/all-contracts" element={<AllContracts />} />
              <Route path="/all-collections" element={<AllCollections />} />
              <Route
                path="/single-collection-contracts/:contractName"
                element={<SingleCollectionContracts />}
              />
              <Route
                path="/contract-dashboard/:contractName"
                element={<ContractDashboard />}
              >
                <Route index element={<ZedSummary />} />
                <Route
                  path="/contract-dashboard/:contractName/chat"
                  element={<ChatWithZed />}
                />
                <Route
                  path="/contract-dashboard/:contractName/zed-activity"
                  element={<ZedActivity />}
                />
                <Route
                  path="/contract-dashboard/:contractName/zed-history"
                  element={<ZedHistory />}
                />
              </Route>
              <Route path="/vendors" element={<Vendors />} />
            </Routes>
          </div>
        </SidebarInset>
      </ContractContextProvider>
    </SidebarProvider>
  );
}
