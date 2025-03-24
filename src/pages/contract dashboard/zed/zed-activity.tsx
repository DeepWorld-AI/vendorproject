import { Badge } from "@/components/ui/badge";
import { Circle, CircleAlert } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";
import { useContract } from "@/hooks/use-contract";

const ZedActivity = () => {
  const { filteredContract } = useContract();
  return (
    <div className="zed-activity text-sm px-4">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className="border-0">
          <Fade delay={800} cascade triggerOnce>
            <AccordionTrigger>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">Ongoing Activity</h2>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {filteredContract.zed_activity.ongoing.map((activity: any) => (
                <div
                  key={activity.id}
                  className="border rounded-lg p-4 space-y-2 mt-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold flex items-center gap-2">
                      <CircleAlert
                        size={16}
                        className={`text-${activity.statusColor}-500`}
                      />
                      Invoice <span className="font-bold">{activity.id}</span>:{" "}
                      {activity.amount}
                    </p>
                    <Badge
                      className={`bg-${activity.statusColor}-100 text-${activity.statusColor}-700 hover:bg-${activity.statusColor}-100`}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{activity.milestone}</p>
                  <p
                    className={`text-${activity.alertColor}-800 text-sm flex items-center gap-1`}
                  >
                    <Circle
                      className={`bg-${activity.alertColor}-600 w-2.5 h-2.5 text-${activity.alertColor}-600 rounded-full`}
                    />
                    {activity.alert}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </Fade>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-2"
      >
        <AccordionItem value="item-2" className="border-0">
          <Fade delay={1000} cascade triggerOnce>
            <AccordionTrigger>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">
                  Upcoming items that need attention
                </h2>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-2 text-sm">
                {filteredContract.zed_activity.upcoming.map(
                  (item: any, index: any) => (
                    <li
                      key={index}
                      className={`text-${item.statusColor}-600 flex items-center gap-2`}
                    >
                      <Circle
                        className={`bg-${item.statusColor}-400 w-2.5 h-2.5 text-${item.statusColor}-600 rounded-full`}
                      />
                      {item.description}{" "}
                      {item.amount && (
                        <span className="text-gray-600">({item.amount})</span>
                      )}
                    </li>
                  )
                )}
              </ul>
            </AccordionContent>
          </Fade>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ZedActivity;
