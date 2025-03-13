import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import KOZMO from "../assets/kozmo logo.png";
import { Link } from "react-router";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link to="/">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-transparent"
          >
            <img
              src="https://r2.erweima.ai/imgcompressed/compressed_b9be5ab00f146e784ddeff98dc99caa8.webp"
              alt="kozmo-ai.."
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-bold text-xl uppercase">zed</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
