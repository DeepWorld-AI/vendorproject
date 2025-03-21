import { Card, CardContent } from "@/components/ui/card";
import { collections } from "@/json data/contracts";

const Collections = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {collections.map((item, i) => (
          <Card
            key={i}
            className="relative rounded-lg border p-0 shadow-sm hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
          >
            <CardContent className="p-2 flex flex-col gap-2">
              <div className="flex justify-between items-center text-gray-400">
                <span className="text-gray-500 rotate-90">{item.icon}</span>
              </div>
              <div className="mt-4 space-y-1">
                <p className="font-semibold text-sm leading-tight">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Collections;
