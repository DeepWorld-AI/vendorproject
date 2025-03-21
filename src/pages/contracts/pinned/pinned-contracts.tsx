import { Card, CardContent } from "@/components/ui/card";
import { pinnedContracts } from "@/json data/contracts";
import { Pin } from "lucide-react";
const PinnedContracts = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {pinnedContracts.map((item, i) => (
          <Card key={i} className="relative rounded-lg border p-0 shadow-sm">
            <CardContent className="p-2 flex flex-col gap-2">
              <div className="flex justify-between items-center text-gray-400">
                <span className="text-gray-500">{item.icon}</span>
                <Pin className="w-4 h-4 cursor-pointer hover:text-gray-600" />
              </div>
              <div className="mt-4 space-y-1">
                <p className="font-semibold text-sm leading-tight">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                )}
                <div className="flex flex-wrap gap-1">
                  {item.labels?.map((label, index) => (
                    <span
                      key={index}
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${label.color}`}
                    >
                      {label.text}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PinnedContracts;
