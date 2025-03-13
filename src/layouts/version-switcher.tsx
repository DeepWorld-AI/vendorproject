import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link to="/">
          <SidebarMenuButton
            size="lg"
            className="mt-2"
          >
            <img
              src="https://r2.erweima.ai/imgcompressed/compressed_b9be5ab00f146e784ddeff98dc99caa8.webp"
              alt="kozmo-ai.."
              className="w-8 h-8 rounded-full"
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
