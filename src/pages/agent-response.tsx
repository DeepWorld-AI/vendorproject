import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Files, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router";

const AgentResponse = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showFinalOptions, setShowFinalOptions] = useState<boolean>(false);
  const [action, setAction] = useState<string>("");
  const [nextAction, setNextAction] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowAnalysis(true);
    }, 4000);

    const timer3 = setTimeout(() => {
      setShowDetails(true);
    }, 6000);

    const timer4 = setTimeout(() => {
      setShowConfirmation(true);
    }, 8000);

    const timer6 = setTimeout(() => {
      setShowFinalOptions(true);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer6);
    };
  }, [action]);

  return (
    <>
      <div className="bg-gradient">
        <div className="w-3/4 mx-auto pb-24">
          {/* <Card className="relative border-0 shadow-none bg-transparent">
            <CardContent className="shadow-none p-4 relative rounded-xl">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>ZED</AvatarFallback>
                </Avatar>
                <p className="text-sm">
                  Hi, this is Zed! Upload or Choose Contract and I’ll get
                  started.
                </p>
              </div>
              <div className="border rounded-md flex flex-col space-y-2 justify-center items-center text-gray-500 mt-4 mx-8 h-32">
                <Files />
                <p className="text-gray-500">
                  SaaS Subscription agreement with Benching.pdf
                </p>
              </div>
            </CardContent>
          </Card> */}

          <Card className="relative border-0 shadow-none bg-transparent">
            <CardContent className="shadow-none p-4">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>ZED</AvatarFallback>
                </Avatar>
                <p className="text-sm font-semibold">
                  Nice choice! SaaS agreements are unique… Let's get this set up
                  right!
                </p>
              </div>
              <div className="px-10 py-2 space-y-1 text-sm">
                <p className="text-blue-500 text-xs flex gap-2">
                  SaaS Subscription agreement with Benching.pdf{" "}
                  {loading && <LoaderIcon size={16} className="animate-spin" />}
                </p>
                <h1>Analyzing...</h1>
                {!loading && (
                  <Fade cascade triggerOnce>
                    <ul className="list-disc pl-4 text-gray-500">
                      <li>
                        I’m scanning for renewal terms—SaaS contracts often
                        auto-renew unless canceled early. I’ll flag any tricky
                        renewal clauses.
                      </li>
                      <li>
                        {" "}
                        I’ll also check financials. Monthly payments? Discounts?
                        Unexpected fees? You’ll know before they become a
                        problem.
                      </li>
                      <li>
                        Security is a big deal in SaaS. I’ll review data privacy
                        terms and compliance requirements like SOC 2 or GDPR.
                      </li>
                    </ul>
                  </Fade>
                )}
              </div>
            </CardContent>
          </Card>

          {showAnalysis && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <CardContent className="shadow-none p-4">
                <Fade cascade triggerOnce delay={500}>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold">
                      Here’s what I found in your Contract! Click to expand
                      sections.
                    </p>
                  </div>
                </Fade>
                <div className="px-10 py-2 space-y-1 text-sm">
                  <div className=" text-gray-800 max-w-2xl space-y-4">
                    <Accordion type="single" collapsible defaultValue="item-1">
                      <AccordionItem value="item-1" className="border-0">
                        <Fade delay={700} cascade triggerOnce>
                          <AccordionTrigger className="hover:no-underline py-1.5 w-1/4 flex-none px-2 rounded-lg bg-gray-50">
                            <h2 className="font-semibold">
                              About the Contract
                            </h2>
                          </AccordionTrigger>
                        </Fade>
                        <AccordionContent>
                          <Fade delay={800} cascade triggerOnce>
                            <div className="space-y-1 text-sm pl-4 pt-2">
                              <p>
                                <span className="font-bold">Vendor : </span>
                                Benchling, Inc.
                              </p>
                              <p>
                                <span className="font-bold">Customer : </span>
                                Revolution Medicines
                              </p>
                              <p>
                                <span className="font-bold">
                                  Contract Duration :{" "}
                                </span>
                                2 Years (Start Date: Jan 1, 2023 – End Date: Dec
                                31, 2024)
                              </p>
                              <p>
                                <span className="font-bold">
                                  Total Contract Value :{" "}
                                </span>
                                $1,500,000
                              </p>
                            </div>
                          </Fade>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible defaultValue="item-2">
                      <AccordionItem value="item-2" className="border-0">
                        <Fade delay={900} cascade triggerOnce>
                          <AccordionTrigger className="hover:no-underline py-1.5 w-1/3 flex-none px-2 rounded-lg bg-gray-50">
                            <h2 className="font-semibold">
                              Key Terms & Conditions
                            </h2>
                          </AccordionTrigger>
                        </Fade>
                        <AccordionContent>
                          <Fade delay={1000} cascade triggerOnce>
                            <div className="space-y-2 text-sm pl-4 pt-2">
                              <p>
                                <span className="font-bold">
                                  SLA & Uptime Guarantees :{" "}
                                </span>
                                99.9% Uptime Guarantee. Vendor must resolve
                                critical issues within 4 hours.
                              </p>
                              <p>
                                <span className="font-bold">
                                  Renewal Terms :{" "}
                                </span>
                                Auto-renews every 12 months unless canceled 90
                                days prior.
                              </p>
                              <p>
                                <span className="font-bold">
                                  Billing & Costs :{" "}
                                </span>
                                Monthly fee: $100,000. Late payments incur 1.5%
                                interest per month.
                              </p>
                              <p>
                                <span className="font-bold">
                                  Security & Compliance :{" "}
                                </span>
                                Vendor complies with SOC 2, GDPR, but does not
                                specify data portability on termination.
                              </p>
                              <p>
                                <span className="font-bold">
                                  Support Response Time :{" "}
                                </span>
                                Critical Issues: 4-hour response time.
                                Low-priority requests: 48 hours.
                              </p>
                              <p>
                                <span className="font-bold">
                                  Licensing & User Rights :{" "}
                                </span>
                                License covers 250 users, but additional seats
                                cost $120/user/month.
                              </p>
                            </div>
                          </Fade>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {showDetails && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <CardContent className="shadow-none p-4">
                <Fade cascade triggerOnce delay={500}>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold">
                      Does everything here look correct? You can modify any key
                      details before we start execution tracking
                    </p>
                  </div>
                  <div className="px-10 py-2 space-y-1 space-x-4 text-sm">
                    <Button
                      variant="outline"
                      className="bg-green-50 border border-green-600 h-7 text-xs text-green-600"
                      onClick={() => setAction("Confirm")}
                    >
                      Confirm
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-purple-100 border border-purple-600 h-7 text-xs text-purple-600"
                    >
                      Modify
                    </Button>
                  </div>
                </Fade>
              </CardContent>
            </Card>
          )}

          {showDetails && action === "Confirm" && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <CardContent className="shadow-none p-4">
                <Fade cascade triggerOnce>
                  <div className="flex items-center justify-end space-x-4">
                    <p className="text-sm w-auto px-2 py-1 bg-purple-100 rounded-md">
                      {action}
                    </p>
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-701751695033492ww0i0raud4.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                  </div>
                </Fade>
              </CardContent>
            </Card>
          )}

          {showConfirmation && action === "Confirm" && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <CardContent className="shadow-none p-4">
                <Fade cascade triggerOnce delay={500}>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold">
                      Does everything here look correct? You can modify any key
                      details before we start execution tracking
                    </p>
                  </div>
                </Fade>
                <div className="px-10 py-2 space-y-1 text-sm">
                  {[
                    {
                      label: "SLA & Uptime Monitoring",
                      description:
                        "I’ll track uptime, response times, and penalties for SLA breaches.",
                    },
                    {
                      label: "License Utilization Optimization",
                      description:
                        "I’ll monitor active users vs. purchased seats to help you optimize cost.",
                    },
                    {
                      label: "Cost & Billing Compliance",
                      description:
                        "I’ll flag any unexpected fees, renewal pricing, or billing discrepancies.",
                    },
                    {
                      label: "Renewal Tracking",
                      description:
                        "I’ll remind you 90 days before the auto-renewal deadline.",
                    },
                  ].map((item, index) => (
                    <Fade key={index} cascade triggerOnce delay={800}>
                      <div className="flex items-start space-x-2">
                        <Check className="text-green-500 w-5 h-5 mt-1" />
                        <p className="text-gray-700 text-sm">
                          <span className={`font-semibold`}>{item.label}</span>{" "}
                          – {item.description}
                        </p>
                      </div>
                    </Fade>
                  ))}
                  <Fade cascade triggerOnce delay={500}>
                    <div className="space-x-4 space-y-2">
                      <Button
                        variant="outline"
                        className="bg-green-50 border border-green-600 h-7 text-xs text-green-600"
                        onClick={() => setNextAction("Looks Good")}
                      >
                        Looks Good
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-purple-100 border border-purple-600 h-7 text-xs text-purple-600"
                      >
                        Modify
                      </Button>
                    </div>
                  </Fade>
                </div>
              </CardContent>
            </Card>
          )}

          {showConfirmation && nextAction === "Looks Good" && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <CardContent className="shadow-none p-4">
                <Fade cascade triggerOnce>
                  <div className="flex items-center justify-end space-x-4">
                    <p className="text-sm w-auto px-2 py-1 bg-purple-100 rounded-md">
                      {nextAction}
                    </p>
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-701751695033492ww0i0raud4.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                  </div>
                </Fade>
              </CardContent>
            </Card>
          )}

          {showFinalOptions && nextAction === "Looks Good" && (
            <Card className="relative border-0 shadow-none bg-transparent">
              <Fade cascade triggerOnce>
                <CardContent className="shadow-none p-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>ZED</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold">
                      Does everything here look correct? You can modify any key
                      details before we start execution tracking
                    </p>
                  </div>
                  <div className="px-10 py-2 space-y-1 space-x-4 text-sm">
                    <Button
                      variant="outline"
                      className="bg-green-50 border border-green-600 h-7 text-xs text-green-600"
                    >
                      Add Stakeholders
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-purple-100 border border-purple-600 h-7 text-xs text-purple-600"
                      onClick={() => navigate("/contract-dashboard")}
                    >
                      Go To Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Fade>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default AgentResponse;
