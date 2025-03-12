interface Message {
  role: "customer" | "agent";
  text: string;
}

export interface Chat {
  id: number;
  title: string;
  messages: Message[];
}

export const contracts = [
  {
    contract_name: "Software Service (SaaS) Agreements",
    ai_summary: [
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
          {
            label: "Discounts & Volume Pricing",
            value: "15%",
            isPositive: true,
          },
        ],
      },
      {
        title: "Obligations & Operational",
        highlight: "3 Oligations & 2 Operational",
        metrics: [
          {
            label: "SLAs & Uptime Guarantees ",
            value: "30%",
            isPositive: true,
          },
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
    ],
    zed_summary: {
      summary: [
        {
          id: "1",
          icon: "1️⃣",
          title: "On Track",
          description: "Contract execution is 70% complete.",
        },
        {
          id: "2",
          icon: "2️⃣",
          title: "Steady Progress",
          description: "4 activities completed this week.",
        },
        {
          id: "3",
          icon: "3️⃣",
          title: "Issue Alert",
          description: "1 escalation recorded.",
        },
        {
          id: "4",
          icon: "4️⃣",
          title: "Opportunities Identified",
          description: "2 potential opportunities to explore.",
        },
        {
          id: "5",
          icon: "5️⃣",
          title: "Upcoming Tasks",
          description: "5 planned activities ahead.",
        },
        {
          id: "6",
          icon: "6️⃣",
          title: "Financial Check",
          description: "Invoice check-in underway with Ryan.",
        },
        {
          id: "7",
          icon: "7️⃣",
          title: "Overall Status: Good",
          description: "Execution progressing smoothly.",
        },
      ],
      followUpQuestions: [
        { id: "1", question: "What are my contractual obligations?" },
        { id: "2", question: "Does this contract auto-renew?" },
        { id: "3", question: "What are the SLA and uptime commitments?" },
      ],
    },
    zed_history: [
      {
        id: 1,
        title: "Contract Renewal Process",
        messages: [
          { role: "customer", text: "Hey ZED, how do I renew a contract?" },
          {
            role: "agent",
            text: "To renew a contract, check clause 12 in your agreement.",
          },
          { role: "customer", text: "Got it, thanks!" },
          {
            role: "agent",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste hic recusandae provident. Quasi dolorem quisquam,distinctio illum deserunt laborum?",
          },
          {
            role: "customer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste hic recusandae provident.",
          },
          {
            role: "agent",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste hic recusandae provident. Quasi dolorem quisquam,distinctio illum deserunt laborum?",
          },
          {
            role: "customer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste hic recusandae provident.",
          },
        ],
      },
      {
        id: 2,
        title: "Termination Clauses",
        messages: [
          { role: "customer", text: "Can I terminate my contract early?" },
          {
            role: "agent",
            text: "Early termination depends on penalty clauses.",
          },
        ],
      },
      {
        id: 3,
        title: "Payment Terms",
        messages: [
          { role: "customer", text: "When should I expect my payments?" },
          {
            role: "agent",
            text: "Check section 4 of your contract for payment schedules.",
          },
        ],
      },
    ],
    zed_activity: {
      ongoing: [
        {
          id: "INV-3421",
          amount: "$80,000",
          status: "Check In",
          statusColor: "red",
          milestone:
            "Linked to Milestone Deliverable 3: User Training Completion",
          alert: "Pending Project Owner Check-in",
          alertColor: "orange",
        },
        {
          id: "INV-74251",
          amount: "$120,000",
          status: "Check In",
          statusColor: "green",
          milestone:
            "Linked to Milestone Deliverable 3: User Training Completion",
          alert: "Approved",
          alertColor: "green",
        },
      ],
      upcoming: [
        {
          status: "Cleared",
          description: "Invoice for Training Module",
          amount: "$80,000 Released",
          statusColor: "green",
        },
        {
          status: "Pending",
          description: "Invoice for API Integration",
          amount: "$120,000 Pending",
          statusColor: "yellow",
        },
        {
          status: "Pending",
          description:
            "Vendor Reviewing Deliverable 5 to Address Missing Features",
          statusColor: "yellow",
        },
        {
          status: "On Hold",
          description: "Invoice for Custom Reporting Due to Stakeholder Issues",
          amount: "$50,000 Delayed",
          statusColor: "red",
        },
      ],
    },
  },
  {
    contract_name: "Dealer Portal Development Agreement",
    ai_summary: [
      {
        title: "Financial & Commercial",
        highlight: "73% Budget usage",
        metrics: [
          {
            label: "Budget Utilization",
            value: "73%",
            isPositive: true,
          },
          {
            label: "Invoice Payment Timeliness",
            value: "92%",
            isPositive: false,
          },
          {
            label: "Potential Savings",
            value: "$250K",
            isPositive: true,
          },
        ],
      },
      {
        title: "Obligations & Operational",
        highlight: "88% milestone completion",
        metrics: [
          {
            label: "Milestone Completion Rate",
            value: "88%",
            isPositive: true,
          },
          {
            label: "Integration Progress",
            value: "70%",
            isPositive: true,
          },
          {
            label: "Resource Allocation Efficiency",
            value: "85%",
            isPositive: false,
          },
        ],
      },
      {
        title: "Behavioral & Negotiation",
        highlight: "Vendor response time 24 hours",
        metrics: [
          {
            label: "Vendor Responsiveness",
            value: "24h",
            isPositive: true,
          },
          {
            label: "Scope Change Requests",
            value: "5",
            isPositive: false,
          },
          {
            label: "Negotiation Effectiveness",
            value: "82%",
            isPositive: true,
          },
        ],
      },
      {
        title: "Risk",
        highlight: "1 compliance risk pending",
        metrics: [
          {
            label: "Compliance Risk",
            value: "1 pending audit",
            isPositive: false,
          },
          {
            label: "Cost Overrun Risk",
            value: "15%",
            isPositive: false,
          },
          {
            label: "Performance Penalties",
            value: "$0",
            isPositive: true,
          },
        ],
      },
    ],
    zed_summary: {
      summary: [
        {
          id: "1",
          icon: "1️⃣",
          title: "On Track",
          description: "88% milestone completion",
        },
        {
          id: "2",
          icon: "2️⃣",
          title: "Steady Progress",
          description: "93% client acceptance",
        },
        {
          id: "3",
          icon: "3️⃣",
          title: "Issue Alert",
          description: "cost overrun risks (15%)",
        },
        {
          id: "4",
          icon: "4️⃣",
          title: "Opportunities Identified",
          description: "scope changes (+$150K approved variations)",
        },
      ],
      followUpQuestions: [
        { id: "1", question: "How will you manage cost overruns?" },
        { id: "2", question: "Any updates on the compliance audit?" },
        { id: "3", question: "How can resource efficiency be improved?" },
      ],
    },
    zed_history: [],
    zed_activity: {
      ongoing: [
        {
          id: "INV-9201",
          amount: "$150,000",
          status: "Check In",
          statusColor: "red",
          milestone:
            "Linked to Overcharge Variations: Additional Scope Changes",
          alert: "Pending Finance Approval",
          alertColor: "orange",
        },
        {
          id: "INV-4823",
          amount: "$250,000",
          status: "Check In",
          statusColor: "green",
          milestone: "Linked to Cost Savings Initiative: Cloud Optimization",
          alert: "Approved",
          alertColor: "green",
        },
      ],
      upcoming: [
        {
          status: "Cleared",
          description: "Milestone Payment for 88% Completion Rate",
          amount: "$200,000 Released",
          statusColor: "green",
        },
        {
          status: "Pending",
          description: "Invoice for Vendor Development Efforts",
          amount: "$92,000 Pending",
          statusColor: "yellow",
        },
        {
          status: "Pending",
          description: "Review of Scope Change Requests (5 Major Requests)",
          statusColor: "yellow",
        },
        {
          status: "On Hold",
          description:
            "Compliance Audit Costs Due to Pending SOC 2 / ISO 27001",
          amount: "$50,000 Delayed",
          statusColor: "red",
        },
      ],
    },
  },
  {
    contract_name: "Software Development Agreements",
    ai_summary: [
      {
        title: "Risk",
        highlight: "3 major risks identified",
        metrics: [
          {
            label: "IP Ownership & Licensing Risk",
            value: "70%",
            isPositive: false,
          },
          {
            label: "Vendor Dependency Risk",
            value: "65%",
            isPositive: false,
          },
          {
            label: "Security & Compliance Risk",
            value: "80%",
            isPositive: false,
          },
        ],
      },
      {
        title: "Financial & Commercial",
        highlight: "85% milestone-based payments",
        metrics: [
          {
            label: "Fixed Price vs. T&M Model",
            value: "85%",
            isPositive: true,
          },
          {
            label: "Hidden Cost Triggers",
            value: "40%",
            isPositive: false,
          },
          {
            label: "Penalty & Late Delivery Clauses",
            value: "90%",
            isPositive: true,
          },
        ],
      },
      {
        title: "Obligations & Operational",
        highlight: "75% milestone adherence",
        metrics: [
          {
            label: "Project Milestone Adherence",
            value: "75%",
            isPositive: false,
          },
          {
            label: "Software Acceptance Criteria",
            value: "88%",
            isPositive: true,
          },
          {
            label: "SLAs for Bug Fixes",
            value: "80%",
            isPositive: true,
          },
        ],
      },
      {
        title: "Behavioral & Negotiation",
        highlight: "70% Vendor response time",
        metrics: [
          {
            label: "Vendor’s Willingness to Modify Scope",
            value: "60%",
            isPositive: false,
          },
          {
            label: "Response Time to Change Requests",
            value: "70%",
            isPositive: false,
          },
          {
            label: "Historical Penalty Enforcement",
            value: "90%",
            isPositive: true,
          },
        ],
      },
    ],
    zed_activity: {
      ongoing: [
        {
          id: "INV-5734",
          amount: "$150,000",
          status: "Check In",
          statusColor: "red",
          milestone: "Linked to Approved Variation for Scope Expansion",
          alert: "Pending Financial Approval",
          alertColor: "orange",
        },
        {
          id: "INV-9832",
          amount: "$250,000",
          status: "Check In",
          statusColor: "green",
          milestone: "Linked to Cost Optimization Savings Identified",
          alert: "Approved",
          alertColor: "green",
        },
      ],
      upcoming: [
        {
          status: "Cleared",
          description: "Payment for On-Time Milestone Completion",
          amount: "$120,000 Released",
          statusColor: "green",
        },
        {
          status: "Pending",
          description: "Invoice for Additional Scope Features",
          amount: "$150,000 Pending",
          statusColor: "yellow",
        },
        {
          status: "Pending",
          description: "Vendor Reviewing Deliverable 5 for Compliance",
          statusColor: "yellow",
        },
        {
          status: "On Hold",
          description:
            "Payment for Late Deliverables Due to Resource Bottlenecks",
          amount: "$90,000 Delayed",
          statusColor: "red",
        },
      ],
    },
    zed_summary: {
      summary: [
        {
          id: "1",
          icon: "1️⃣",
          title: "On Track",
          description: "88% milestone completion",
        },
        {
          id: "2",
          icon: "2️⃣",
          title: "Steady Progress",
          description: "93% client acceptance",
        },
        {
          id: "3",
          icon: "3️⃣",
          title: "Risk Alert",
          description: "15% potential budget overrun",
        },
        {
          id: "4",
          icon: "4️⃣",
          title: "Opportunities Identified",
          description: "Potential $250K cloud savings",
        },
      ],
      followUpQuestions: [
        {
          id: "1",
          question: "How will you manage cost overruns?",
        },
        {
          id: "2",
          question: "Any updates on the compliance audit?",
        },
        {
          id: "3",
          question: "What measures can improve resource allocation efficiency?",
        },
      ],
    },
    zed_history: [],
  },
];
