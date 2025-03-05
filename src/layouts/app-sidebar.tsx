import * as React from "react";
import { Cog, Files, House, ListTodo, Mails } from "lucide-react";
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
          title: "Archieve",
          url: "/messages/archieve",
        },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: ListTodo,
      isActive: true,
    },
  ],
  contracts: [
    {
      name: "Software Service (SaaS) Agreements",
      url: "/agent-response",
      icon: Files,
    },
    {
      name: "Software Development Agreements",
      url: "#",
      icon: Files,
    },
    {
      name: "Software License Agreements",
      url: "#",
      icon: Files,
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
        <NavContracts projects={data.contracts} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
