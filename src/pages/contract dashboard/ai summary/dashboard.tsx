import { Button } from "@/components/ui/button";
import { useState } from "react";
import AiSummary from "./ai-summary";

const Dashboard = () => {
  const all_btn = [
    { id: 1, name: "AI Summary" },
    { id: 2, name: "Document" },
    { id: 3, name: "Financials" },
    { id: 4, name: "History" },
  ];
  const [active, setActive] = useState<string>("ai summary");

  return (
    <>
      <div className="flex justify-between px-2 h-14 items-center border-b">
        {all_btn.map((btn) => (
          <Button
            variant="ghost"
            className={`h-7 px-8 rounded-full ${
              active.toLowerCase() === btn.name.toLowerCase()
                ? "bg-purple-100 text-purple-600"
                : ""
            }`}
            key={btn.id}
            onClick={() => setActive(btn.name)}
          >
            {btn.name}
          </Button>
        ))}
      </div>

      <div className="p-3">
        <AiSummary />
      </div>
    </>
  );
};

export default Dashboard;
