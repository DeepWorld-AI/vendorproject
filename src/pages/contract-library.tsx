import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

// Define contract categories
const categories = [
  "All",
  "IT",
  "Facilities",
  "Purchasing & Supply Chain",
  "Sales & Marketing",
  "HR",
  "Procurement & Operations",
  "Legal",
  "Finance",
];

// Sample contract data
const contracts = [
  {
    category: "IT",
    title: "SaaS Agreement",
    details: [
      "License Utilization Optimization",
      "Cost & Billing Compliance",
      "SLA & Uptime Monitoring",
    ],
  },
  {
    category: "IT",
    title: "Managed IT Services Agreement",
    details: [
      "Cost & ROI Optimization",
      "Security & Compliance Assurance",
      "Service Quality Monitoring",
    ],
  },
  {
    category: "IT",
    title: "Software Development Agreement",
    details: [
      "Milestone & Deliverable Tracking",
      "Code Quality & Security Compliance",
      "Scope & Change Management",
    ],
  },
  {
    category: "Facilities",
    title: "Facilities Maintenance Agreement",
    details: ["Service Performance Monitoring", "Cost & Vendor Optimization"],
  },
  {
    category: "Facilities",
    title: "Lease Agreements",
    details: [
      "Payment & Compliance Tracking",
      "Maintenance & Legal Compliance",
    ],
  },
  {
    category: "Sales & Marketing",
    title: "Independent Contractor Agreement",
    details: [
      "Creative & PR Impact Tracking",
      "Scope & Deliverable Compliance",
    ],
  },
  {
    category: "Procurement & Operations",
    title: "Independent Contractor Agreement",
    details: [
      "Deliverable-Based Tracking",
      "IP & Confidentiality Compliance",
      "Payment & Invoice Processing",
    ],
  },
  {
    category: "HR",
    title: "Independent Contractor Agreement",
    details: [
      "Deliverable-Based Tracking",
      "IP & Confidentiality Compliance",
      "Payment & Invoice Processing",
    ],
  },
  {
    category: "Sales & Marketing",
    title: "Distribution Agreement",
    details: [
      "Sales & Performance Tracking",
      "Pricing & Compliance Enforcement",
      "Customer satisfaction",
    ],
  },
  {
    category: "Procurement & Supply Chain",
    title: "Independent Contractor Agreement",
    details: [
      "Delivery & Installation Compliance",
      "Warranty & Maintenance Tracking",
    ],
  },
  {
    category: "Engineering, R&D",
    title: "Independent Contractor Agreement",
    details: [
      "Financial & Cost Sharing Compliance",
      "Regulatory & IP Protection",
      "Development & Contribution Monitoring",
    ],
  },
];

export default function ContractLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedContract, setSelectedContract] = useState<string | null>(null);
  const navigate = useNavigate();

  // Filter contracts based on selected category
  const filteredContracts =
    selectedCategory === "All"
      ? contracts
      : contracts.filter((contract) => contract.category === selectedCategory);

  return (
    <div className="">
      <div className="px-4 py-2">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Select a Sample Contract</h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3 py-1 border rounded-full text-sm transition",
                selectedCategory === cat
                  ? "bg-blue-100 text-blue-600 border-blue-500"
                  : "border-gray-300 text-gray-500 hover:bg-gray-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Contracts Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {filteredContracts.map((contract, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-lg p-4 transition cursor-pointer",
                selectedContract === contract.title
                  ? "border-blue-200 bg-gradient-to-r from-pink-50 to-violet-50"
                  : "hover:border-gray-400"
              )}
              onClick={() => setSelectedContract(contract.title)}
            >
              <span className="block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full w-fit mb-2">
                {contract.category}
              </span>
              <h3 className="text-sm font-semibold">{contract.title}</h3>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                {contract.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <Button
            disabled={!selectedContract}
            className="px-6 py-2"
            variant={selectedContract ? "default" : "secondary"}
            onClick={() => navigate("/agent-response")}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}
