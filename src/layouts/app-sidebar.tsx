import * as React from "react";
import {
  Building,
  ChartColumn,
  Files,
  House,
  ListRestart,
  Logs,
  Workflow,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "./version-switcher";
import { NavMain } from "./nav-main";
import { NavContracts } from "./nav-contracts";
import { NavSecondary } from "./nav-secondary";
import { contracts } from "@/json data/contracts";
import NavUser from "./nav-user";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "Contracts",
      url: "#",
      icon: Files,
      items: contracts.map((contract) => ({
        title: contract.contract_name,
        url: `/contract-dashboard/${contract.contract_name}`,
      })),
    },
  ],
  quick_links: [
    {
      title: "CounterParties",
      url: "#",
      icon: Building,
      items: [],
    },
    {
      title: "Clause & Terms Library",
      url: "#",
      icon: ListRestart,
      items: [],
    },
    {
      title: "Stats & Metrics",
      url: "#",
      icon: ChartColumn,
      items: [],
    },
  ],
  navSecondary: [
    {
      title: "Integrations",
      url: "#",
      icon: Workflow,
    },
    {
      title: "Logs",
      url: "#",
      icon: Logs,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavContracts items={data.quick_links} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
