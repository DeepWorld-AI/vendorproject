import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedGradientBorderTW } from "@/constants/animated-gradient-border";
import {
  ArrowUp,
  Bot,
  Check,
  ChevronUp,
  History,
  Paperclip,
  RefreshCcwDot,
  Shuffle,
  Sparkles,
  SquarePlus,
} from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { cn } from "@/lib/utils";

const ChatWithZed = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
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

  return (
    <div className="w-full text-sm">
      {/* Header */}
      <div className="border-b h-14 px-2 flex justify-between items-center">
        <h1 className="flex items-center gap-2 font-semibold">
          <Sparkles
            className="-rotate-90"
            size={18}
            onClick={() => navigate("/contract-dashboard")}
          />{" "}
          Ask Zed
        </h1>
        <div className="flex items-center gap-x-6 text-gray-500 p-2">
          <div
            className={`p-1.5 rounded-md hover:bg-gray-100 cursor-pointer ${
              location.pathname === "/contract-dashboard/zed-history"
                ? "bg-gray-100"
                : ""
            }`}
          >
            <History
              size={18}
              onClick={() => navigate("/contract-dashboard/zed-history")}
            />
          </div>
          <div
            className={`relative p-1.5 rounded-md hover:bg-gray-100 cursor-pointer ${
              location.pathname === "/contract-dashboard/zed-activity"
                ? "bg-gray-100"
                : ""
            }`}
          >
            <Bot
              size={18}
              onClick={() => navigate("/contract-dashboard/zed-activity")}
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"></div>
          </div>
          <div className="hover:bg-gray-100 p-1.5 rounded-md">
            <SquarePlus size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="h-[500px] overflow-scroll pb-10">
        <Outlet />

        {/* chat-box with zed */}
        <div className="absolute bottom-0 w-full">
          <div className="rounded-md m-3">
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
    </div>
  );
};

export default ChatWithZed;
