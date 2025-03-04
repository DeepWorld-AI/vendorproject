import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  ArrowUp,
  Circle,
  CircleAlert,
  CircleCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";

const AiSummary = () => {
  const data = [
    {
      title: "Obligations & Operational Markers",
      highlight: "3 Oligations & 2 Operational",
      metrics: [
        { label: "SLAs & Uptime Guarantees ", value: "30%", isPositive: true },
        { label: "Incident Response Time", value: "20%", isPositive: true },
        {
          label: "Data Access & API Availability",
          value: "20%",
          isPositive: true,
        },
        {
          label: "Software Updates & Support",
          value: "15%",
          isPositive: true,
        },
        {
          label: "User License Compliance",
          value: "15%",
          isPositive: true,
        },
      ],
    },
    {
      title: "Behavioral & Negotiation Markers:",
      highlight: "1/3 open",
      metrics: [
        {
          label: "Vendor’s Willingness to Adjust Pricing",
          value: "25%",
          isPositive: false,
        },
        {
          label: "Redline Frequency on Key Clauses",
          value: "20%",
          isPositive: false,
        },
        {
          label: "Amendment & Renewal Patterns",
          value: "20%",
          isPositive: false,
        },
        {
          label: "Penalty Clause Negotiability",
          value: "15%",
          isPositive: false,
        },
        {
          label: "Renewal Negotiation Success Rate",
          value: "20%",
          isPositive: false,
        },
      ],
    },
    {
      title: "Risk Markers",
      highlight: "1 compliance risk",
      metrics: [
        {
          label: "Data Security & Compliance Risk",
          value: "30%",
          isPositive: true,
        },
        {
          label: "Single Vendor Dependency Risk",
          value: "20%",
          isPositive: true,
        },
        { label: "Termination & Exit Risk", value: "15%", isPositive: true },
        { label: "Uptime & SLA Risk", value: "20%", isPositive: true },
        { label: "Liability & Indemnity Risk", value: "15%", isPositive: true },
      ],
    },
    {
      title: "Financial & Commercial Markers",
      highlight: "1 milestone met",
      metrics: [
        {
          label: "Pricing Model & Cost Control",
          value: "25%",
          isPositive: true,
        },
        {
          label: "Auto-Renewal & Price Escalation",
          value: "20%",
          isPositive: true,
        },
        { label: "Discounts & Volume Pricing", value: "15%", isPositive: true },
        { label: "TCO Impact", value: "25%", isPositive: true },
        { label: "Hidden Fees", value: "15%", isPositive: true },
      ],
    },
  ];
  return (
    <>
      <div className="ai-summary text-sm">
        <h1 className="font-semibold text-base">
          Software as a Service (SaaS) Agreements
        </h1>

        <div className="grid grid-cols-2 gap-2 py-4">
          {data.map((card, index) => (
            <Fade key={index} delay={500} cascade triggerOnce>
              <div className="border rounded-lg p-4 text-xs shadow-sm bg-white">
                <h3 className="text-gray-600 font-medium text-base">
                  {card.title}
                </h3>
                <p className="text-sm font-semibold mt-1">{card.highlight}</p>
                <div className="mt-3 space-y-1">
                  {card.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-gray-500"
                    >
                      <span>{metric.label}</span>
                      <span
                        className={`flex items-center gap-1 font-medium ${
                          metric.isPositive ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {metric.isPositive ? (
                          <ArrowUp size={14} />
                        ) : (
                          <ArrowDown size={14} />
                        )}
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className="border-0">
            <Fade delay={800} cascade triggerOnce>
              <AccordionTrigger>
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold">Ongoing Activity</h2>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold flex items-center gap-2">
                      <CircleAlert size={16} className="text-red-500" /> Invoice{" "}
                      <span className="font-bold">INV-3421</span>: $80,000
                    </p>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                      Check In
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Linked to Milestone Deliverable 3: User Training Completion
                  </p>
                  <p className="text-sm text-orange-800 flex items-center gap-1">
                    <Circle className="bg-orange-600 w-2.5 h-2.5 text-orange-600 rounded-full" />{" "}
                    Pending Project Owner Check-in
                  </p>
                </div>
                <div className="border rounded-lg p-4 mt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold flex items-center gap-2">
                      <CircleAlert size={16} className="text-green-500" />{" "}
                      Invoice <span className="font-bold">INV-74251</span>:
                      $120,000
                    </p>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Check In
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Linked to Milestone Deliverable 3: User Training Completion
                  </p>
                  <p className="text-green-800 text-sm flex items-center gap-1">
                    <CircleCheck className="bg-green-600 w-3 h-3 text-white rounded-full" />{" "}
                    Approved
                  </p>
                </div>
              </AccordionContent>
            </Fade>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-2"
        >
          <AccordionItem value="item-2" className="border-0">
            <AccordionTrigger>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">
                  Upcoming items that need attention
                </h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Fade cascade triggerOnce>
                <ul className="space-y-2 text-sm">
                  <li className="text-green-600 flex items-center gap-2">
                    <CircleCheck className="bg-green-600 w-3 h-3 text-white rounded-full" />
                    Invoice for Training Module Cleared{" "}
                    <span className="text-gray-600">($80,000 Released)</span>
                  </li>
                  <li className="text-yellow-600 flex items-center gap-2">
                    <Circle className="bg-yellow-400 w-2.5 h-2.5 text-yellow-600 rounded-full" />
                    Invoice for API Integration Pending Final Finance Review{" "}
                    <span className="text-gray-600">($120,000 Pending)</span>
                  </li>
                  <li className="text-yellow-600 flex items-center gap-2">
                    <Circle className="bg-yellow-400 w-2.5 h-2.5 text-yellow-600 rounded-full" />
                    Vendor Reviewing Deliverable 5 to Address Missing Features
                  </li>
                  <li className="text-red-600 flex items-center gap-2">
                    <Circle className="bg-red-500 w-2.5 h-2.5 text-orange-600 rounded-full" />
                    Invoice for Custom Reporting On Hold Due to Stakeholder
                    Issues{" "}
                    <span className="text-gray-600">($50,000 Delayed)</span>
                  </li>
                </ul>
              </Fade>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AiSummary;
