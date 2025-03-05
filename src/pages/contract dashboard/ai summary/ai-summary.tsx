import { ArrowDown, ArrowUp } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const AiSummary = () => {
  const data = [
    {
      title: "Risk",
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
      ],
    },
    {
      title: "Financial & Commercial",
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
      ],
    },
    {
      title: "Obligations & Operational",
      highlight: "3 Oligations & 2 Operational",
      metrics: [
        { label: "SLAs & Uptime Guarantees ", value: "30%", isPositive: true },
        { label: "Incident Response Time", value: "20%", isPositive: true },
        {
          label: "Data Access & API Availability",
          value: "20%",
          isPositive: true,
        },
      ],
    },
    {
      title: "Behavioral & Negotiation",
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
                <p className="mt-1">
                  {card.highlight.split(/(\d+[/\d%]*)/).map((part, index) =>
                    /^\d+[/\d%]*$/.test(part) ? (
                      <span key={index} className="text-xl font-bold">
                        {part}
                      </span>
                    ) : (
                      <span key={index} className="text-sm font-semibold">
                        {part}
                      </span>
                    )
                  )}
                </p>

                <div className="mt-3 space-y-3">
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
      </div>
    </>
  );
};

export default AiSummary;
