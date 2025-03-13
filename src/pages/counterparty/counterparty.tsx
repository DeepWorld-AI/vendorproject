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

const vendors = [
  {
    name: "Acme Corp",
    type: "Client",
    industry: "IT Services",
    jurisdiction: "New York, USA",
    status: "Active",
    rating: 85,
  },
  {
    name: "Greenfield Estates",
    type: "Landlord",
    industry: "Real Estate",
    jurisdiction: "Ontario, Canada",
    status: "Active",
    rating: 90,
  },
  {
    name: "Titan Supplies",
    type: "Vendor",
    industry: "Manufacturing",
    jurisdiction: "Ontario, Canada",
    status: "Approved",
    rating: 80,
  },
  {
    name: "Stellar Ventures",
    type: "Partner",
    industry: "Investment",
    jurisdiction: "London, England",
    status: "Negotiation",
    rating: 75,
  },
  {
    name: "Horizon Dynamics",
    type: "Employee",
    industry: "Technology",
    jurisdiction: "New York, USA",
    status: "Inactive",
    rating: 60,
  },
  {
    name: "Blue Ocean Logistics",
    type: "Supplier",
    industry: "Logistics",
    jurisdiction: "California, USA",
    status: "Active",
    rating: 88,
  },
  {
    name: "Sunrise Retailers",
    type: "Distributor",
    industry: "Retail",
    jurisdiction: "Mumbai, India",
    status: "Pending Approval",
    rating: 70,
  },
  {
    name: "Vertex Pharmaceuticals",
    type: "Manufacturer",
    industry: "Pharmaceuticals",
    jurisdiction: "Berlin, Germany",
    status: "Approved",
    rating: 82,
  },
  {
    name: "Global Finance Ltd",
    type: "Financial Institution",
    industry: "Banking",
    jurisdiction: "Sydney, Australia",
    status: "Active",
    rating: 89,
  },
  {
    name: "Zenith Automobiles",
    type: "Partner",
    industry: "Automotive",
    jurisdiction: "Tokyo, Japan",
    status: "Negotiation",
    rating: 77,
  },
];

export default function Vendors() {
  const [activeSorting, setActiveSorting] = useState<string>("View All");
  const [vendor, setVendor] = useState(vendors);

  // function to filter the vendor
  function filterVendor(nameOrType: string) {
    const filteredVendor = vendors.filter((vendor: any) => {
      if (vendor.name.toLowerCase().includes(nameOrType.toLowerCase())) {
        return vendor;
      }
      if (vendor.type.toLowerCase().includes(nameOrType.toLowerCase())) {
        return vendor;
      }
    });
    setVendor(filteredVendor);
  }

  return (
    <div className="px-4 py-2 space-y-2">
      <div className="flex items-center gap-2">
        <h1 className="text-base font-semibold">Vendors</h1>
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
                Recent Vendors
                <DropdownMenuShortcut>
                  <History />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActiveSorting("Pinned Contracts")}
              >
                Pinned Vendors
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
        <Input
          className="w-1/3"
          placeholder="search vendors.."
          onChange={(e) => filterVendor(e.target.value)}
        />
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

            <TableHead>Status</TableHead>
            <TableHead>Recent Updates</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendor?.map((file: any, index: any) => (
            <TableRow key={index}>
              <TableCell className="py-1">
                <div className="flex items-center gap-2 max-w-[200px] overflow-hidden">
                  <FileText size={14} className="text-gray-400 flex-shrink-0" />
                  <Link
                    to="#"
                    className="truncate overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    {file.name}
                  </Link>
                </div>
              </TableCell>

              <TableCell className="py-1">{file.type}</TableCell>
              <TableCell className="text-blue-500 py-1">
                {/* <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
                  {file.status}
                </span> */}
                -
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
                    <DropdownMenuItem className="cursor-pointer">
                      <Link to="#" className="flex items-center gap-2">
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
