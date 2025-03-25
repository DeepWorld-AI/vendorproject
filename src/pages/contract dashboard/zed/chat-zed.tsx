import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedGradientBorderTW } from "@/constants/animated-gradient-border";
import {
  ArrowUp,
  Bot,
  Check,
  ChevronUp,
  History,
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
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import OlderChats from "./older-chats";
import ZedActions from "./zed-actions";
import { useChats } from "@/hooks/use-chats";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const ChatWithZed = () => {
  const { activeChat, createChat, addMessage, setActiveChat } = useChats();
  const [inputValue, setInputValue] = useState<string>("");
  const [select, setSelect] = useState<string>("zed-activity");
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<string>("Ask Zed");
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

  // Function to handle input change and create chat only if there's no active chat
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // Function to submit prompt and simulate response loading
  function handleSubmit() {
    if (!location.pathname.includes("chat")) {
      navigate(`/contract-dashboard/${contractName}/chat`);

      // Wait briefly to ensure the route changes before continuing
      setTimeout(() => processInput(), 100);
      return;
    }

    // If already on chat page, process input immediately
    processInput();
  }

  function processInput() {
    if (!inputValue.trim()) return;

    if (!activeChat) {
      createChat(inputValue.trim());
    } else {
      addMessage(inputValue.trim(), "user");
    }

    setInputValue("");
  }

  useEffect(() => {
    if (activeChat) {
      console.log("Updated activeChat:", activeChat);
    }
  }, [activeChat]);

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
              decodedURL === `/contract-dashboard/${contractName}/chat`
                ? ""
                : ""
            }`}
          >
            <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 border text-xs">
                  <MessagesSquare size={18} />
                  Chat
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      navigate(`/contract-dashboard/${contractName}/chat`);
                      setActive("Ask Zed");
                      setActiveChat(null);
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
                    <OlderChats setOpenDropdown={setOpenDropdown} />
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
            <Select
              onValueChange={(value) => {
                setSelect(value);
                navigate(`/contract-dashboard/${contractName}/${value}`);
              }}
            >
              <SelectTrigger className="w-[150px] h-8 px-2">
                {select === "zed-activity" ? "ZED Activity" : "ZED History"}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="zed-activity" className="p-0 m-0">
                    <div className="flex items-center gap-4 p-2">
                      <Bot size={18} />
                      <span>ZED Activity</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="zed-history" className="p-0 m-0">
                    <div className="flex items-center gap-4 p-2">
                      <History size={16} />
                      <span>ZED History</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        <Outlet />
      </div>

      {/* chat-box with zed */}
      <div className="z-40 w-full bg-white px-2 h-30 py-2">
        <div className="flex items-center gap-2">
          <ZedActions triggerButton="Focus On +" />
          <ZedActions
            triggerButton={
              <div className="flex items-center gap-2">
                Any Relevant Contract <ChevronUp />
              </div>
            }
          />
        </div>
        <div className="rounded-md pt-0.5">
          <AnimatedGradientBorderTW className="flex flex-col pb-3">
            <Input
              type="text"
              value={inputValue}
              placeholder="Message Zed"
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
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
                onClick={handleSubmit}
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
