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
          title: "Archeive",
          url: "/messages/archieve",
        },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: ListTodo,
      items: [
        {
          title: "task",
          url: "/messages/inbox",
        },
        {
          title: "task",
          url: "/messages/outbox",
        },
        {
          title: "task",
          url: "/messages/archieve",
        },
      ],
    },
  ],
  contracts: [
    {
      title: "All",
      url: "#",
      icon: Files,
      items: [
        {
          title: "Software Service Agreements",
          url: "/contract",
        },
        {
          title: "Software Development Agreements",
          url: "#",
        },
        {
          title: "Software License Agreements",
          url: "#",
        },
      ],
    },
    {
      title: "Recent",
      url: "#",
      icon: Files,
      items: [
        {
          title: "Software Service Agreements",
          url: "/contract-dashboard",
        },
        {
          title: "Software Development Agreements",
          url: "#",
        },
        {
          title: "Software License Agreements",
          url: "#",
        },
      ],
    },
    {
      title: "Pinned",
      url: "#",
      icon: Files,
      items: [
        {
          title: "Software Service Agreements",
          url: "/contracts",
        },
        {
          title: "Software Development Agreements",
          url: "#",
        },
        {
          title: "Software License Agreements",
          url: "#",
        },
      ],
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
