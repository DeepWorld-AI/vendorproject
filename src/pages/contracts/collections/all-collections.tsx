import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { collections } from "@/json data/contracts";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const AllCollections = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <div className="p-4 space-y-4">
        <h2 className="text-base font-semibold">
          All Collections ({collections.length})
        </h2>
        <div className="flex justify-between items-center">
          <Input
            placeholder="Search Contracts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/3 h-9"
          />
          <div className="flex gap-2">
            <Button variant="outline" className="h-9 text-xs">
              New Collection <Plus />
            </Button>
            <Button variant="outline" className="h-9">
              <SquarePen />
            </Button>
            <Button variant="outline" className="h-9">
              <Trash2 size={16} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {collections.map((item, i) => (
            <Link to={`/single-collection-contracts/${item.title}`}>
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCollections;
