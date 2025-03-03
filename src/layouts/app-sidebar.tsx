import * as React from "react";
import { Cog, Files, House } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "./version-switcher";
import { NavMain } from "./nav-main";

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
      url: "/contracts",
      icon: Files,
      items: [
        {
          title: "contract 1",
          url: "#",
        },
        {
          title: "contract 2",
          url: "#",
        },
        {
          title: "contract 3",
          url: "#",
        },
      ],
    },
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
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
