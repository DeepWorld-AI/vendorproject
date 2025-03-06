import * as React from "react";
import { Cog, Files, History, House, ListTodo, Mails, Pin } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "./version-switcher";
import { NavMain } from "./nav-main";
import { NavContracts } from "./nav-contracts";
import { NavSecondary } from "./nav-secondary";
import { contracts } from "@/json data/contracts";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "Messages",
      url: "/messages/inbox",
      icon: Mails,
      items: [
        {
          title: "Inbox",
          url: "/messages/inbox",
        },
        {
          title: "Outbox",
          url: "/messages/outbox",
        },
        {
          title: "Archeive",
          url: "/messages/archeive",
        },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: ListTodo,
      items: [
        {
          title: "task 1",
          url: "/task1",
        },
        {
          title: "task 2",
          url: "/task2",
        },
        {
          title: "task 3",
          url: "/task3",
        },
      ],
    },
  ],
  contracts: [
    {
      title: "All",
      url: "#",
      icon: Files,
      items: contracts.map((contract) => ({
        title: contract.contract_name,
        url: `/contract-dashboard/${contract.contract_name}`,
      })),
    },
    {
      title: "Recent",
      url: "#",
      icon: History,
      items: contracts.map((contract) => ({
        title: contract.contract_name,
        url: `/contract-dashboard/${contract.contract_name}`,
      })),
    },
    {
      title: "Pinned",
      url: "#",
      icon: Pin,
      items: contracts.map((contract) => ({
        title: contract.contract_name,
        url: `/contract-dashboard/${contract.contract_name}`,
      })),
    },
  ],
  navSecondary: [
    {
      title: "Manage",
      url: "#",
      icon: Cog,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
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
        <NavContracts items={data.contracts} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
