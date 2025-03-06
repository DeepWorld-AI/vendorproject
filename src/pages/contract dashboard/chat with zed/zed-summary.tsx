import { useContract } from "@/hooks/use-contract";
import { MoveUpRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const ZedSummary = () => {
  const { contract } = useContract();
  return (
    <div className="zed-summary text-sm p-1">
      <Fade delay={500} cascade triggerOnce>
        <div className="space-y-2 bg-gray-50 rounded my-2">
          <Fade cascade triggerOnce>
            {contract.zed_summary?.summary?.map((item: any) => (
              <p key={item.id}>
                {item.icon} <strong>{item.title}</strong> – {item.description}
              </p>
            ))}
          </Fade>
        </div>
      </Fade>

      {/* Follow-Up Questions */}
      <div className="flex flex-col gap-2 mt-36 p-2">
        <Fade delay={500} cascade triggerOnce>
          {contract.zed_summary?.followUpQuestions?.map((question: any) => (
            <p
              key={question.id}
              className="inline-flex items-center gap-2 border rounded font-semibold px-4 py-2 w-fit"
            >
              {question.question} <MoveUpRight size={16} />
            </p>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default ZedSummary;
