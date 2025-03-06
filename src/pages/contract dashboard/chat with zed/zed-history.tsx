const ZedHistory = () => {
  const sections = [
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
  ];
  return (
    <>
      <div className="p-4 text-sm">
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-semibold text-base">
              {index + 1}. {section.title}
            </h2>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.heading}</strong>: {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ZedHistory;
