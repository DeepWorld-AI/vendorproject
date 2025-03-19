import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedGradientBorderTW } from "@/constants/animated-gradient-border";
import {
  ArrowUp,
  Bot,
  Check,
  ChevronUp,
  MessageCircleReply,
  MessageSquarePlus,
  MessagesSquare,
  Paperclip,
  Plus,
  RefreshCcwDot,
  Shuffle,
  Sparkles,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { cn } from "@/lib/utils";
import OlderChats from "./older-chats";

const ChatWithZed = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState<string>("Ask Zed");
  const { contractName } = useParams<{ contractName: string }>();
  const frameworks = [
    {
      value: "next.js",
      label: "Get a Legal Explanation",
    },
    {
      value: "sveltekit",
      label: "Generate Contract Insights",
    },
    {
      value: "nuxt.js",
      label: "Suggest Contract Revisions",
    },
    {
      value: "remix",
      label: "Legal Precedent Search",
    },
    {
      value: "astro",
      label: "Auto-generate Contract Drafts",
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const decodedURL = decodeURIComponent(location.pathname);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="border-b h-14 px-2 flex justify-between items-center">
        <h1 className="flex items-center gap-2 font-semibold">
          <Sparkles
            className="-rotate-90 cursor-pointer"
            size={18}
            onClick={() => {
              navigate(`/contract-dashboard/${contractName}`);
              setActive("Ask Zed");
            }}
          />{" "}
          {active}
        </h1>
        <div className="flex items-center text-gray-500 p-2">
          <div
            className={`p-1.5 rounded-md cursor-pointer ${
              decodedURL === `/contract-dashboard/${contractName}/zed-history`
                ? ""
                : ""
            }`}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 border text-xs">
                  <MessagesSquare size={18} />
                  Chat
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      navigate(
                        `/contract-dashboard/${contractName}/zed-history`
                      );
                      setActive("Zed History");
                    }}
                  >
                    <Plus /> New Chat
                    <DropdownMenuShortcut>
                      <MessageSquarePlus />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div>
                    <div className="flex justify-between items-center px-2 py-1">
                      <p className="text-sm">Older Conversation</p>
                      <MessageCircleReply size={16} className="text-gray-500" />
                    </div>
                    <OlderChats />
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div
            className={`relative p-1.5 rounded-md cursor-pointer ${
              decodedURL === `/contract-dashboard/${contractName}/zed-activity`
                ? ""
                : ""
            }`}
          >
            <Button
              variant="outline"
              className="h-8 text-xs"
              onClick={() => {
                navigate(`/contract-dashboard/${contractName}/zed-activity`);
                setActive("Zed Activity");
              }}
            >
              <Bot size={18} />
              ZED History
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        <Outlet />
      </div>

      {/* chat-box with zed */}
      <div className="z-40 w-full bg-white px-2 h-30">
        <div className="rounded-md my-2">
          <AnimatedGradientBorderTW className="flex flex-col pb-3">
            <Input
              type="text"
              placeholder="Message Zed"
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="flex items-center justify-between px-3 pt-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="h-8 px-2.5">
                  <Paperclip />
                </Button>
                <Button variant="outline" className="h-8 px-2.5">
                  <RefreshCcwDot />
                </Button>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger
                    className="border h-8 px-2.5 rounded-md text-xs flex items-center gap-3"
                    asChild
                  >
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className=""
                    >
                      <Shuffle size={14} />
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value
                          )?.label
                        : "Auto"}
                      <ChevronUp size={16} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-2">
                    {frameworks.map((framework) => (
                      <div
                        key={framework.value}
                        className="cursor-pointer flex items-center p-1.5 text-sm hover:bg-gray-100 hover:rounded"
                        onClick={() => {
                          setValue(
                            framework.value === value ? "" : framework.value
                          );
                          setOpen(false);
                        }}
                      >
                        {framework.label}
                        <Check
                          size={16}
                          className={cn(
                            "ml-auto transition-opacity",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </div>
              <Button
                variant="default"
                className="bg-purple-400 hover:bg-purple-700 text-white h-8 px-2.5"
              >
                <ArrowUp />
              </Button>
            </div>
          </AnimatedGradientBorderTW>
        </div>
      </div>
    </div>
  );
};

export default ChatWithZed;
