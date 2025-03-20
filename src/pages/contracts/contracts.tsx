import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Pin, Filter, Tags, ChevronRight } from "lucide-react";
import { useContract } from "@/hooks/use-contract";
import { pinnedContracts } from "@/json data/contracts";
import { Link } from "react-router";

export default function ContractsUI() {
  const { contract, filterContract, searchFilterContract } = useContract();
  return (
    <div className="p-4 space-y-8">
      {/* Search and Filter */}
      <div className="flex justify-center items-center gap-2">
        <Input
          placeholder="Search Contracts"
          className="w-1/3"
          onChange={(e) => searchFilterContract(e.target.value)}
        />
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={16} /> Filter
        </Button>
      </div>

      {/* Pinned and Collections */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2 h-8 bg-purple-600 text-white text-xs"
            >
              <Pin className="rotate-45 w-2 h-2" /> Pinned
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-8 text-xs"
            >
              <Tags className="rotate-90" />
              Collections
            </Button>
          </div>
          <Button
            variant="ghost"
            className="text-purple-600 text-xs font-semibold hover:bg-transparent"
          >
            <Link to="/all-contracts" className="flex items-center">
              View All <ChevronRight />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {pinnedContracts.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <span className="mt-1 text-gray-500">{item.icon}</span>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Suggested Contracts Table */}
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Suggested Contracts</h2>
          <Button
            variant="ghost"
            className="text-purple-600 text-xs font-semibold hover:bg-transparent"
          >
            <Link to="/all-contracts" className="flex items-center">
              View All <ChevronRight />
            </Link>
          </Button>
        </div>
        <Table className="border">
          <TableHeader className="rounded-md bg-gray-100">
            <TableRow>
              <TableHead className="text-black font-semibold border-r">
                Name
              </TableHead>
              <TableHead className="text-black font-semibold border-r">
                Category
              </TableHead>
              <TableHead className="text-black font-semibold border-r">
                Last Accessed
              </TableHead>
              <TableHead className="text-black font-semibold border-r">
                Status
              </TableHead>
              <TableHead className="text-black font-semibold border-r">
                User Activity
              </TableHead>
              <TableHead className="text-black font-semibold">
                Zed Activity
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contract.map((contract: any, index: any) => (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    to={`/contract-dashboard/${contract.contract_name}`}
                    className="truncate overflow-hidden text-ellipsis whitespace-nowrap"
                    onClick={() => filterContract(contract.contract_name)}
                  >
                    {contract.contract_name}
                  </Link>
                </TableCell>
                <TableCell>{contract.category}</TableCell>
                <TableCell>{contract.lastAccessed}</TableCell>
                <TableCell>{contract.status}</TableCell>
                <TableCell>{contract.userActivity}</TableCell>
                <TableCell className="truncate whitespace-nowrap overflow-hidden max-w-[200px]">
                  {contract.zedActivity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
