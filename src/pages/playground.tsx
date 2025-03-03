import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedGradientBorderTW } from "@/constants/animated-gradient-border";
import { Link } from "react-router";

const Playground = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-16">
      <Card
        className="relative border-0 before:absolute before:-inset-2 before:bg-gradient-to-r
       before:from-blue-400 before:via-purple-400 before:to-pink-400 before:blur-lg before:opacity-30 before:rounded-xl"
      >
        <CardContent className="shadow-none p-4 relative bg-white rounded-xl">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>ZED</AvatarFallback>
            </Avatar>
            <p className="text-sm">
              Hi, this is Zed! Upload or Choose Contract and I’ll get started.
            </p>
          </div>

          <div className="flex items-center w-full gap-4 pb-4 px-4 pt-6 text-sm">
            {/* Upload from Computer */}
            <AnimatedGradientBorderTW>
              <div className="flex-1 text-center p-10">
                <p className="font-medium text-gray-400">
                  Upload from Computer
                </p>
                <Label className="mt-3 inline-block border rounded-lg px-4 py-2 text-blue-400 border-blue-400 hover:bg-blue-50 transition cursor-pointer">
                  <Input type="file" className="hidden" />+ Browse
                </Label>
              </div>
            </AnimatedGradientBorderTW>

            <p className="text-gray-500 text-center">Or</p>

            {/* Choose from Library */}
            <AnimatedGradientBorderTW className="flex justify-center items-center">
              <div className="relative p-9">
                <div className="flex flex-col text-center">
                  <p className="font-medium">
                    Or choose from 100+ sample contracts!
                  </p>
                  <Button
                    variant="outline"
                    className="mt-3 border rounded-lg px-4 py-2 text-blue-400 border-blue-400 hover:bg-blue-50 transition"
                  >
                    <Link to="/contract-library" className="flex items-center gap-2">
                      Choose from Library <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-black/90 text-white/80 text-[0.8rem] rounded-lg p-4 shadow-lg transition-transform duration-700 ease-out ${
                    showTooltip
                      ? "block opacity-100 scale-100"
                      : "hidden opacity-0 scale-95"
                  }`}
                >
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-full w-4 h-4 bg-black/90 rotate-45"></div>
                  <div
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setShowTooltip(false)}
                  >
                    <X size={18} />
                  </div>
                  <p>
                    <strong className="text-white">
                      What happens when you upload a contract?
                    </strong>{" "}
                    <br />
                    Zed reads the document like an execution expert. He extracts
                    obligations, SLAs, renewal terms, and payment schedules.
                  </p>
                  <br />
                  <p>
                    💡 In the full version, new contracts can be automatically
                    detected, categorized, and onboarded from team mailboxes,
                    DocuSign, and contract repositories without manual uploads.
                    Zed’s inbox allows you to email contracts, amendments, and
                    other documents, and they are automatically linked and
                    updated to the contract.
                  </p>
                  <br />
                  <p>
                    In the full version, new contracts are automatically
                    detected and onboarded for tracking without manual uploads.
                  </p>
                </div>
              </div>
            </AnimatedGradientBorderTW>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Playground;
