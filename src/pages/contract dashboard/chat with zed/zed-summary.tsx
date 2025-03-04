import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const ZedSummary = () => {
  const [isOlRevealed, setIsOlRevealed] = useState(false);

  const questions = [
    { id: 1, qst: "How does the SaaS TCO compare to on-premise solutions?" },
    {
      id: 2,
      qst: "Have pre-negotiated discounts or volume pricing been applied correctly?",
    },
    {
      id: 3,
      qst: "Does the vendor comply with relevant data protection laws (e.g., GDPR, HIPAA)?",
    },
    {
      id: 4,
      qst: "Are there any risks of over-usage or shadow IT due to user license restrictions?",
    },
  ];

  // Set state after the fade animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOlRevealed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="zed-summary text-sm p-2">
      {/* Intro Text */}
      <Fade delay={500} cascade triggerOnce>
        <p>
          SaaS (Software as a Service) agreement is a contract between a vendor
          (provider) and a customer (user) that outlines the terms and
          conditions for accessing and using cloud-based software. Key
          components typically include:
        </p>
      </Fade>

      {/* Ordered List */}
      <ol className="mt-2 px-2 space-y-3 text-gray-800 text-sm">
        <Fade delay={700} cascade triggerOnce>
          <li>
            <strong>1. Service Description:</strong> Details about the software,
            features, and functionality provided.
          </li>
          <li>
            <strong>2. Pricing & Payment Terms:</strong> Cost structure
            (flat-rate, usage-based, per-user), payment schedules, and any
            hidden fees.
          </li>
          <li>
            <strong>3. Service Level Agreements (SLAs):</strong> Uptime
            guarantees, performance standards, and penalties for non-compliance.
          </li>
          <li>
            <strong>4. Data Security & Compliance:</strong> Vendor’s adherence
            to regulations like GDPR, HIPAA, or CCPA.
          </li>
          <li>
            <strong>5. Data Ownership & Access:</strong> Clarifies who owns the
            data and how customers can access or export it.
          </li>
          <li>
            <strong>6. Termination & Exit Clauses:</strong> Conditions for
            contract termination, data migration, and post-termination
            obligations.
          </li>
          <li>
            <strong>7. Liability & Indemnity:</strong> Defines responsibility
            for data breaches, service failures, or third-party claims.
          </li>
        </Fade>
      </ol>

      {/* Follow-Up Questions (Revealed only when OL is completed) */}
      {isOlRevealed && (
        <div className="pt-4">
          <Fade delay={1100} cascade triggerOnce>
            <h1 className="font-semibold text-base">
              Follow-Up Questions for SaaS Agreement Review?
            </h1>
          </Fade>

          {questions.map((qst) => (
            <Fade key={qst.id} delay={1100} cascade triggerOnce>
              <ul className="flex justify-between items-center pt-4">
                <li>{qst.qst}</li>
                <Plus size={16} />
              </ul>
            </Fade>
          ))}
        </div>
      )}
    </div>
  );
};

export default ZedSummary;
