import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useContract } from "@/hooks/use-contract";
import {
  ArrowDown,
  ArrowUpWideNarrow,
  FileStack,
  FileText,
  History,
  LayoutDashboard,
  MoreVertical,
  NotebookText,
  Pin,
  Star,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function ContractsUI() {
  const { contract, filterContract } = useContract();
  const [activeSorting, setActiveSorting] = useState<string>("View All");

  return (
    <div className="px-4 py-2 space-y-2">
      <div className="flex items-center gap-2">
        <h1 className="text-base font-semibold">Contracts</h1>
      </div>

      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="text-xs">
              <ArrowUpWideNarrow /> Sort By : {activeSorting}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                View All
                <DropdownMenuShortcut>
                  <FileStack />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActiveSorting("Recent Contracts")}
              >
                Recent Contracts
                <DropdownMenuShortcut>
                  <History />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActiveSorting("Pinned Contracts")}
              >
                Pinned Contracts
                <DropdownMenuShortcut>
                  <Pin />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActiveSorting("My Favourite")}
              >
                My Favourite
                <DropdownMenuShortcut>
                  <Star />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input className="w-1/3" placeholder="search contracts.." />
      </div>

      <Table className="border">
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead>
              <div className="flex items-center gap-1">
                Contract <ArrowDown size={14} className="cursor-pointer" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                Type <ArrowDown size={14} className="cursor-pointer" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                Role <ArrowDown size={14} className="cursor-pointer" />
              </div>
            </TableHead>

            <TableHead>
              <div className="flex items-center gap-1">
                Status <ArrowDown size={14} className="cursor-pointer" />
              </div>
            </TableHead>
            <TableHead>Recent Updates</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contract?.map((file: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="py-1">
                <div className="flex items-center gap-2 max-w-[200px] overflow-hidden">
                  <FileText size={14} className="text-gray-400 flex-shrink-0" />
                  <Link
                    to={`/contract-dashboard/${file.contract_name}`}
                    className="truncate overflow-hidden text-ellipsis whitespace-nowrap"
                    onClick={() => filterContract(file.contract_name)}
                  >
                    {file.contract_name}
                  </Link>
                </div>
              </TableCell>

              <TableCell className="py-1">{file.type}</TableCell>
              <TableCell className="py-1">{file.role}</TableCell>
              <TableCell className="text-blue-500 py-1">
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
                  {file.status}
                </span>
              </TableCell>
              <TableCell className="py-1">
                <p className="text-gray-400 truncate overflow-hidden whitespace-nowrap text-ellipsis max-w-[150px]">
                  random changes / updates
                </p>
              </TableCell>

              <TableCell className="py-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuItem className="cursor-pointer">
                      <NotebookText /> View Report
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <FileText /> View Document
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => filterContract(file.contract_name)}
                    >
                      <Link
                        to={`/contract-dashboard/${file.contract_name}`}
                        className="flex items-center gap-2"
                      >
                        <LayoutDashboard /> Go To Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500 cursor-pointer">
                      <Trash2 /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
