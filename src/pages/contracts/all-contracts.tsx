import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Filter, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomPagination from "@/components/ui/custom-pagination";
import AllContractTable from "./all-contract-table";

const contracts = [
  {
    name: "Software Service (SaaS) Agreements",
    category: "NDAs",
    parties: "Acme Corp",
    lastAccessed: "2025-03-12",
    status: "Active",
    effectiveDate: "2025-03-12",
    expirationDate: "2025-03-12",
    userAction: "Viewed",
  },
  {
    name: "Confidentiality Agreement",
    category: "NDAs",
    parties: "Beta Ltd.",
    lastAccessed: "2025-03-10",
    status: "Active",
    effectiveDate: "2025-03-10",
    expirationDate: "2025-03-10",
    userAction: "Internal",
  },
  {
    name: "Vendor Contract - Acme",
    category: "Vendor Agreements",
    parties: "Acme Corp",
    lastAccessed: "2025-03-11",
    status: "Expiring Soon",
    effectiveDate: "2025-03-11",
    expirationDate: "2025-03-11",
    userAction: "Opened",
  },
  {
    name: "Supplier Agreement - 2025",
    category: "Vendor Agreements",
    parties: "Delta Supplies",
    lastAccessed: "2025-03-10",
    status: "Active",
    effectiveDate: "2025-03-10",
    expirationDate: "2025-03-10",
    userAction: "Opened",
  },
  {
    name: "Employee Onboarding",
    category: "Employment Contracts",
    parties: "John Doe",
    lastAccessed: "2025-03-09",
    status: "Expiring Soon",
    effectiveDate: "2025-03-09",
    expirationDate: "2025-03-09",
    userAction: "HR Completed",
  },
  {
    name: "Contractor Agreement",
    category: "Employment Contracts",
    parties: "SoftCorp Ltd.",
    lastAccessed: "2025-03-06",
    status: "Expiring Soon",
    effectiveDate: "2025-03-06",
    expirationDate: "2025-03-06",
    userAction: "HR Request",
  },
  {
    name: "Software License 2025",
    category: "Licensing Agreements",
    parties: "SoftCorp Ltd.",
    lastAccessed: "2025-03-06",
    status: "Expired",
    effectiveDate: "2025-03-06",
    expirationDate: "2025-03-06",
    userAction: "No Recent Activity",
  },
  {
    name: "Master Service Agreement",
    category: "Service Agreements",
    parties: "GlobalTech",
    lastAccessed: "2025-03-15",
    status: "Active",
    effectiveDate: "2025-03-01",
    expirationDate: "2026-03-01",
    userAction: "Signed",
  },
  {
    name: "Lease Agreement - HQ",
    category: "Lease & Rental Contracts",
    parties: "Realty Corp",
    lastAccessed: "2025-02-28",
    status: "Active",
    effectiveDate: "2025-02-01",
    expirationDate: "2026-02-01",
    userAction: "Renewed",
  },
  {
    name: "Freelance Service Agreement",
    category: "Employment Contracts",
    parties: "Freelancer Inc.",
    lastAccessed: "2025-03-02",
    status: "Active",
    effectiveDate: "2025-02-15",
    expirationDate: "2025-12-15",
    userAction: "Approved",
  },
  {
    name: "Data Processing Agreement",
    category: "Compliance",
    parties: "Zed AI",
    lastAccessed: "2025-03-07",
    status: "Pending",
    effectiveDate: "2025-03-01",
    expirationDate: "2026-03-01",
    userAction: "Under Review",
  },
  {
    name: "Marketing Collaboration Agreement",
    category: "Partnership Agreements",
    parties: "BrandX",
    lastAccessed: "2025-03-03",
    status: "Active",
    effectiveDate: "2025-03-01",
    expirationDate: "2025-09-01",
    userAction: "Signed",
  },
  {
    name: "Distribution Agreement",
    category: "Distribution Contracts",
    parties: "Retailers United",
    lastAccessed: "2025-03-05",
    status: "Expiring Soon",
    effectiveDate: "2024-03-01",
    expirationDate: "2025-03-30",
    userAction: "Pending Renewal",
  },
  {
    name: "SaaS Subscription Agreement",
    category: "Service Agreements",
    parties: "CloudCorp",
    lastAccessed: "2025-03-08",
    status: "Active",
    effectiveDate: "2025-01-15",
    expirationDate: "2026-01-15",
    userAction: "Auto-Renewed",
  },
  {
    name: "Manufacturing Agreement",
    category: "Vendor Agreements",
    parties: "AutoMakers Ltd.",
    lastAccessed: "2025-03-06",
    status: "Pending",
    effectiveDate: "2025-02-10",
    expirationDate: "2027-02-10",
    userAction: "Under Review",
  },
];

export default function AllContracts() {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalItemsPerPage = 10;
  const totalPages = Math.ceil(contracts.length / totalItemsPerPage);

  // Ensure contracts array exists before accessing its length
  const totalContracts = contracts?.length ?? 0;

  const firstIndex = (currentPage - 1) * totalItemsPerPage;
  const lastIndex = Math.min(currentPage * totalItemsPerPage, totalContracts);

  // Slice the array to get only the current page's items
  const currentContracts = contracts.slice(firstIndex, lastIndex);

  return (
    <div className="relative">
      <div className="p-4 space-y-3">
        <h2 className="text-base font-semibold">
          All Contracts ({contracts.length})
        </h2>
        <div className="flex justify-between items-center">
          <Input
            placeholder="Search Contracts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/3 h-9"
          />
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-9">
                  Category <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <p className="p-2">Category Filter</p>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-9">
                  Status <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <p className="p-2">Status Filter</p>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="h-9">
              <Filter size={16} /> Filter
            </Button>
            <Button variant="outline" className="h-9">
              Clear All
            </Button>
          </div>
        </div>

        <AllContractTable currentContracts={currentContracts} />
      </div>
      <div className="bg-white w-full px-4 sticky bottom-0 border-t mt-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-xs">Rows per page</p>
            <Select>
              <SelectTrigger className="w-[70px] h-8 text-xs">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-auto">
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
