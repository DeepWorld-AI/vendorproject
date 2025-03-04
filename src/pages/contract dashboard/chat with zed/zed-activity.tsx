import { Badge } from "@/components/ui/badge";
import { Circle, CircleAlert, CircleCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";

const ZedActivity = () => {
  return (
    <>
      <div className="zed-activity text-sm p-4">
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
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold flex items-center gap-2">
                      <CircleAlert size={16} className="text-red-500" /> Invoice{" "}
                      <span className="font-bold">INV-3421</span>: $80,000
                    </p>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                      Check In
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Linked to Milestone Deliverable 3: User Training Completion
                  </p>
                  <p className="text-sm text-orange-800 flex items-center gap-1">
                    <Circle className="bg-orange-600 w-2.5 h-2.5 text-orange-600 rounded-full" />{" "}
                    Pending Project Owner Check-in
                  </p>
                </div>
                <div className="border rounded-lg p-4 mt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold flex items-center gap-2">
                      <CircleAlert size={16} className="text-green-500" />{" "}
                      Invoice <span className="font-bold">INV-74251</span>:
                      $120,000
                    </p>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Check In
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Linked to Milestone Deliverable 3: User Training Completion
                  </p>
                  <p className="text-green-800 text-sm flex items-center gap-1">
                    <CircleCheck className="bg-green-600 w-3 h-3 text-white rounded-full" />{" "}
                    Approved
                  </p>
                </div>
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
            <AccordionTrigger>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">
                  Upcoming items that need attention
                </h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Fade delay={800} cascade triggerOnce>
                <ul className="space-y-2 text-sm">
                  <li className="text-green-600 flex items-center gap-2">
                    <CircleCheck className="bg-green-600 w-3 h-3 text-white rounded-full" />
                    Invoice for Training Module Cleared
                    <span className="text-gray-600">($80,000 Released)</span>
                  </li>
                  <li className="text-yellow-600 flex items-center gap-2">
                    <Circle className="bg-yellow-400 w-2.5 h-2.5 text-yellow-600 rounded-full" />
                    Invoice for API Integration Pending Final Finance Review
                    <span className="text-gray-600">($120,000 Pending)</span>
                  </li>
                  <li className="text-yellow-600 flex items-center gap-2">
                    <Circle className="bg-yellow-400 w-2.5 h-2.5 text-yellow-600 rounded-full" />
                    Vendor Reviewing Deliverable 5 to Address Missing Features
                  </li>
                  <li className="text-red-600 flex items-center gap-2">
                    <Circle className="bg-red-500 w-2.5 h-2.5 text-orange-600 rounded-full" />
                    Invoice for Custom Reporting On Hold Due to Stakeholder
                    Issues{" "}
                    <span className="text-gray-600">($50,000 Delayed)</span>
                  </li>
                </ul>
              </Fade>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default ZedActivity;
