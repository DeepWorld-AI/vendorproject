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
import Quicklinks from "./nav-contracts";
import { NavSecondary } from "./nav-secondary";
import NavUser from "./nav-user";
import { useLocation } from "react-router";
import NavZedHistory from "./nav-zed-history";
import { useContract } from "@/hooks/use-contract";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const { contract } = useContract();

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
        items: contract.map((cont: any) => ({
          title: cont.contract_name,
          url: `/contract-dashboard/${cont.contract_name}`,
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
    zedHistory: Array.isArray(contract)
      ? contract.flatMap(
          (cont) =>
            cont.zed_history?.map((chat: any) => ({
              name: chat.title,
            })) || []
        )
      : contract?.zed_history?.map((chat: any) => ({
          name: chat.title,
        })) || [],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {!location.pathname.includes("/zed-history") && (
          <NavMain items={data.navMain} />
        )}
        {!location.pathname.includes("/zed-history") && (
          <Quicklinks items={data.quick_links} />
        )}
        {!location.pathname.includes("/zed-history") && (
          <NavSecondary items={data.navSecondary} />
        )}
        {location.pathname.includes("/zed-history") && (
          <NavZedHistory favorites={data.zedHistory} />
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
