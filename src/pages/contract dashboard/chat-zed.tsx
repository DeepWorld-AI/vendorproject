import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedGradientBorderTW } from "@/constants/animated-gradient-border";
import {
  ArrowUp,
  ArrowUpRight,
  History,
  Paperclip,
  RefreshCcwDot,
  Sparkles,
  SquarePlus,
} from "lucide-react";
import { useEffect, useState } from "react";

const ChatWithZed = () => {
  const items = [
    "What are my contractual obligations?",
    "Does this contract auto-renew?",
    "What are the billing and payment terms?",
    "Does this contract comply with SOC 2 or GDPR?",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full text-sm">
      {/* Header */}
      <div className="border-b p-4 flex justify-between items-center">
        <h1 className="flex items-center gap-2 font-semibold">
          <Sparkles className="-rotate-90" size={18}/> Ask Zed
        </h1>
        <div className="flex items-center gap-x-6 text-gray-500">
          <History size={18} className="cursor-pointer" />
          <SquarePlus size={18} className="cursor-pointer" />
        </div>
      </div>

      {/* Description */}
      <p className="pt-20 px-20 pb-10 font-medium text-center text-base">
        Zed is here to help! I can analyze multiple aspects of this contract to
        keep everything clear and on track.
      </p>

      {/* Buttons with wrapping and blinking effect */}
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, ind) => (
          <Button
            key={ind}
            variant="outline"
            className={`transition-opacity duration-500 relative ${
              activeIndex === ind
                ? "opacity-100 shadow-[0_0_0_0px_rgba(222,234,234,0.8)] before:absolute before:inset-0 before:bg-[linear-gradient(-225deg,#deeaea_20%,#dbdae6_30%,#f1d5d8_50%)] before:opacity-50 before:blur-md"
                : "opacity-40"
            }`}
          >
            {item} <ArrowUpRight />
          </Button>
        ))}
      </div>

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
