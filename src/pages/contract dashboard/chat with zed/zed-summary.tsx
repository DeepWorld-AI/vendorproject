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
  ];

  // Set state after the fade animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOlRevealed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="zed-summary text-sm px-4 py-2">
      {/* Intro Text */}
      <Fade delay={500} cascade triggerOnce>
        <p>
          SaaS (Software as a Service) agreement is a contract between a vendor
          (provider) and a customer (user) that outlines the terms and
          conditions for accessing and using cloud-based software.
        </p>
        <div className="space-y-2 bg-gray-50 rounded p-2 my-2">
          <Fade cascade triggerOnce>
            <p>
              1️⃣ <strong>On Track</strong> – Contract execution is 70% complete.
            </p>
            <p>
              2️⃣ <strong>Steady Progress</strong> – 4 activities completed this
              week.
            </p>
            <p>
              3️⃣ <strong>Issue Alert</strong> – 1 escalation recorded.
            </p>
            <p>
              4️⃣ <strong>Opportunities Identified</strong> – 2 potential
              opportunities to explore.
            </p>
            <p>
              5️⃣ <strong>Upcoming Tasks</strong> – 5 planned activities ahead.
            </p>
            <p>
              6️⃣ <strong>Financial Check</strong> – Invoice check-in underway
              with Ryan.
            </p>
            <p>
              7️⃣ <strong>Overall Status: Good</strong> – Execution progressing
              smoothly.
            </p>
          </Fade>
        </div>
      </Fade>

      {/* Follow-Up Questions (Revealed only when OL is completed) */}
      {isOlRevealed && (
        <Fade delay={900} cascade triggerOnce>
          <div className="pt-4">
            <h1 className="font-semibold text-base">
              Follow-Up Questions for SaaS Agreement Review?
            </h1>

            {questions.map((qst) => (
              <ul
                key={qst.id}
                className="flex justify-between items-center pt-4"
              >
                <li>{qst.qst}</li>
                <Plus size={16} />
              </ul>
            ))}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default ZedSummary;
