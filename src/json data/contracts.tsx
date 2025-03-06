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
        title: "Renewal Check-ins",
        items: [
          {
            heading: "Tracked Renewal Dates",
            text: "Monitored renewal windows and set automated reminders to ensure timely action on SaaS contract renewals.",
          },
          {
            heading: "Usage Analysis",
            text: "Evaluated SaaS usage data to determine if the service aligns with business needs, identifying opportunities for renegotiation or cancellation of unused licenses.",
          },
          {
            heading: "Proactive Engagement",
            text: "Initiated early discussions with vendors to review terms, negotiate pricing, and adjust service levels as necessary 134.",
          },
        ],
      },
      {
        title: "Invoice Check-ins",
        items: [
          {
            heading: "Payment Monitoring",
            text: "Verified invoice accuracy for SaaS subscriptions, ensuring alignment with contract terms (e.g., pricing, discounts).",
          },
          {
            heading: "Pending Payments",
            text: "Flagged overdue invoices and coordinated follow-ups to avoid service interruptions.",
          },
          {
            heading: "Cost Optimization",
            text: "Identified overpayments or billing errors and recommended adjustments to reduce costs 45.",
          },
        ],
      },
      {
        title: "Amendments",
        items: [
          {
            heading: "Drafted Amendments",
            text: "Created amendments to reflect changes in contract scope, SLAs, or pricing based on evolving business needs.",
          },
          {
            heading: "Compliance Updates",
            text: "Incorporated regulatory requirements (e.g., GDPR) into contract amendments as needed.",
          },
          {
            heading: "Negotiation Support",
            text: "Facilitated discussions between stakeholders and vendors to finalize amendment terms efficiently 23.",
          },
        ],
      },
      {
        title: "User Q&A",
        items: [
          {
            heading: "Customer Support",
            text: "Answered user queries about SaaS contract terms, obligations, and renewal processes.",
          },
          {
            heading: "Education",
            text: "Provided clarity on auto-renewal clauses, termination policies, and SLA expectations to ensure informed decision-making.",
          },
          {
            heading: "Onboarding Assistance",
            text: "Guided users in understanding how to leverage SaaS tools effectively based on contract provisions 56.",
          },
        ],
      },
      {
        title: "Status Updates",
        items: [
          {
            heading: "Weekly Reports",
            text: "Delivered status updates summarizing key metrics such as renewal deadlines, compliance status, and financial commitments.",
          },
          {
            heading: "Performance Tracking",
            text: "Highlighted vendor performance against SLAs and flagged any risks or breaches requiring attention.",
          },
          {
            heading: "Stakeholder Alerts",
            text: "Sent notifications about upcoming deadlines or critical changes in contract status 34.",
          },
        ],
      },
      {
        title: "Recalculation of KPIs & Markers",
        items: [
          {
            heading: "Performance Metrics Review",
            text: "Recalculated KPIs such as SLA adherence (e.g., uptime, response times) and customer satisfaction scores based on real-time data.",
          },
          {
            heading: "Cost-Benefit Analysis",
            text: "Assessed ROI by comparing SaaS costs with business outcomes achieved during the contract period.",
          },
          {
            heading: "Forecasting Adjustments",
            text: "Updated financial forecasts based on subscription renewals, cancellations, or price changes 45.",
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
  { contract_name: "Software Development Agreements" },
  { contract_name: "Master Services Agreements (MSAs)" },
];
