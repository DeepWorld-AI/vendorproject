import { useContract } from "@/hooks/use-contract";

const ZedHistory = () => {
  const { contract } = useContract();
  return (
    <>
      <div className="p-4 text-sm">
        {contract.zed_history?.map((section: any, index: any) => (
          <div key={index} className="mb-6">
            <h2 className="font-semibold text-base">
              {index + 1}. {section.title}
            </h2>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              {section.items.map((item: any, idx: any) => (
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
