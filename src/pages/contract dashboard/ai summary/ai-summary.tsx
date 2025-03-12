import { useContract } from "@/hooks/use-contract";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const AiSummary = () => {
  const { filteredContract } = useContract();
  return (
    <>
      <div className="ai-summary text-sm">
        <h1 className="font-semibold text-base">{filteredContract.contract_name}</h1>

        <div className="grid grid-cols-2 gap-2 py-4">
          {filteredContract.ai_summary?.map((card: any, index: any) => (
            <Fade key={index} delay={500} cascade triggerOnce>
              <div className="border rounded-lg p-4 text-xs shadow-sm bg-white">
                <h3 className="text-gray-600 font-medium text-base">
                  {card.title}
                </h3>
                <p className="mt-1">
                  {card.highlight
                    .split(/(\d+[/\d%]*)/)
                    .map((part: any, index: any) =>
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
                  {card.metrics.map((metric: any, idx: any) => (
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
