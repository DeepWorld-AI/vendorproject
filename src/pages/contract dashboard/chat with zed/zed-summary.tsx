import { Button } from "@/components/ui/button";
import { useContract } from "@/hooks/use-contract";
import { ChevronDown, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ZedSummary = () => {
  const { filteredContract } = useContract();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="zed-summary text-sm p-1">
      <div className="relative w-full overflow-hidden rounded-md border p-1 flex items-center">
        <div
          className={`flex items-center whitespace-nowrap transition-all duration-300 z-10 ${
            expanded ? "overflow-visible" : "animate-marquee"
          }`}
        >
          {!expanded ? (
            <span className="flex gap-2">
              <span>Overall Status Good</span>
              <span>•</span>
              <span>Contract Execution on track 70% done</span>
              <span>•</span>
              <span>I’m working on...</span>
            </span>
          ) : (
            <ul className="list-disc pl-5">
              <li>Overall Status Good</li>
              <li>Contract Execution on track 70% done</li>
              <li>I’m working on...</li>
            </ul>
          )}
        </div>
        <Button
          onClick={toggleExpand}
          variant="ghost"
          size="icon"
          className="ml-auto z-20 h-8 px-1"
        >
          <ChevronDown
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </Button>
      </div>

      {/* Follow-Up Questions */}
      <div className="flex flex-col gap-2 p-2 absolute bottom-32">
        <Fade delay={500} cascade triggerOnce>
          {filteredContract.zed_summary?.followUpQuestions?.map(
            (question: any) => (
              <p
                key={question.id}
                className="inline-flex items-center gap-2 border rounded font-medium px-4 py-2 w-fit text-gray-500
                hover:border-black cursor-pointer hover:text-black/70"
              >
                {question.question} <MoveUpRight size={16} />
              </p>
            )
          )}
        </Fade>
      </div>
    </div>
  );
};

export default ZedSummary;
