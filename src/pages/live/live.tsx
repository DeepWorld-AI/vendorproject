import RadialChart from "@/charts/radial-chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, RotateCw } from "lucide-react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router";

const tasks = [
  {
    category: "SaaS - Salesforce",
    title: "SLA Compliance Verified",
    description: "99.9% Uptime Confirmed",
    time: "5 mins ago",
    color: "border-green-500",
    textColor: "text-green-700",
  },
  {
    category: "Managed IT - AWS Support",
    title: "Invoice Validation",
    description: "Overcharge Detected ($5,000)",
    time: "32 mins ago",
    color: "border-red-500",
    textColor: "text-red-700",
  },
  {
    category: "Managed IT - AWS Support",
    title: "Invoice Validation",
    description: "Overcharge Detected ($5,000)",
    time: "32 mins ago",
    color: "border-red-500",
    textColor: "text-red-700",
  },
  {
    category: "SaaS HubSpot",
    title: "Risk Alert Raised",
    description: "GDPR Compliance Issue Flagged",
    time: "1 day ago",
    color: "border-yellow-500",
    textColor: "text-yellow-700",
  },
  {
    category: "Software License - Adobe Creative Cloud",
    title: "Renewal Alert Sent",
    description: "60 days to review renewal",
    time: "2 hrs ago",
    color: "border-green-500",
    textColor: "text-green-700",
  },
];

const getCurrentTime = () => {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const Live = () => {
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  // const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  // const [showFinalOptions, setShowFinalOptions] = useState<boolean>(false);
  // const [action, setAction] = useState<string>("");
  // const [nextAction, setNextAction] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowAnalysis(true);
    }, 4000);

    const timer3 = setTimeout(() => {
      setShowDetails(true);
    }, 6000);

    // const timer4 = setTimeout(() => {
    //   setShowConfirmation(true);
    // }, 8000);

    // const timer6 = setTimeout(() => {
    //   setShowFinalOptions(true);
    // }, 1000);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      // clearTimeout(timer4);
      // clearTimeout(timer6);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient text-sm">
        <Button
          variant="ghost"
          className="text-purple-500 font-bold hover:bg-transparent fixed"
          onClick={() => navigate("/")}
        >
          <ChevronLeft /> Back
        </Button>
        <div className="w-3/4 mx-auto pb-24 pt-8">
          <h1 className="border-b pb-2 font-medium text-xl">
            Welcome back Jeff! Below is a quick update for you.
          </h1>
          <Card className="relative border-0 shadow-none bg-transparent">
            <CardContent className="shadow-none p-4">
              <p className="px-10 py-2 text-xs font-medium">
                <span className="pr-4">Agent Zed</span> {getCurrentTime()}
              </p>
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>ZED</AvatarFallback>
                </Avatar>
                <p className="text-sm font-semibold">
                  Hey Jeff! 👋 Welcome back! Here’s a quick update for you.
                </p>
              </div>
            </CardContent>
          </Card>

          {showAnalysis && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <CardContent className="shadow-none p-4">
                <Fade delay={800} cascade triggerOnce>
                  <p className="px-10 py-2 text-xs font-medium">
                    <span className="pr-4">Agent Zed</span> {getCurrentTime()}
                  </p>
                  <div className="flex space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-700 font-semibold">
                      In the last 48 hours, I've processed 46 tasks, including
                      12 SLA tracking updates, 19 invoice validations, and 5
                      renewal alerts. Here are the key highlights:
                    </p>
                  </div>
                  <div className="px-10 max-w-5xl mx-auto">
                    <p className="py-2 text-xs font-medium flex items-center gap-3">
                      updated 3 minutes ago <RotateCw size={14} />
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      {tasks.map((task, index) => (
                        <div
                          key={index}
                          className={`border-2 rounded-lg p-4 ${task.color} shadow-md`}
                        >
                          <Fade delay={800} cascade triggerOnce>
                            <p className="text-gray-500 text-xs">
                              {task.category}
                            </p>
                            <h2 className={`font-semibold ${task.textColor}`}>
                              {task.title}
                            </h2>
                            <p className="text-gray-600">{task.description}</p>
                            <p className="text-xs text-gray-400 mt-2">
                              {task.time}
                            </p>
                          </Fade>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex space-x-2 text-xs">
                      <button className="border border-purple-500 text-purple-500 font-bold px-4 py-2 rounded-lg">
                        View Detailed Log
                      </button>
                      <button className="border border-purple-500 text-purple-500 font-bold px-4 py-2 rounded-lg">
                        View By Activity
                      </button>
                    </div>
                  </div>
                </Fade>
              </CardContent>
            </Card>
          )}

          {showDetails && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <CardContent className="shadow-none p-4">
                <Fade delay={800} cascade triggerOnce>
                  <p className="px-10 py-2 text-xs font-medium">
                    <span className="pr-4">Agent Zed</span> {getCurrentTime()}
                  </p>
                  <div className="flex space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-700 font-semibold">
                      Execution efficiency is at 94%. SLA adherence looks solid,
                      but I’m seeing an increase in invoice discrepancies.
                      Here’s a quick snapshot of your contracts for this
                      quarter:
                    </p>
                  </div>
                  <div className="px-10">
                    <p className="py-2 text-xs font-medium flex items-center gap-3">
                      updated 3 minutes ago <RotateCw size={14} />
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <RadialChart />
                      <RadialChart />
                      <RadialChart />
                    </div>
                    <div className="mt-4 flex space-x-2 text-xs">
                      <button className="border border-purple-500 text-purple-500 font-bold px-4 py-2 rounded-lg">
                        View All Metrics
                      </button>
                      <button className="border border-purple-500 text-purple-500 font-bold px-4 py-2 rounded-lg">
                        Compare
                      </button>
                      <button className="border border-purple-500 text-purple-500 font-bold px-4 py-2 rounded-lg">
                        Monthly Breakdown
                      </button>
                    </div>
                  </div>
                </Fade>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default Live;
