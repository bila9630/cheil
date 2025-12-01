import { Home, Users, User, MessagesSquare, Shield, ShoppingBag, Calendar, BarChart3, Lightbulb, TrendingUp } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useAdminMode } from "@/contexts/AdminModeContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const userNavItems = [
  { title: "Homepage", url: "/", icon: Home },
  { title: "Learners", url: "/duell", icon: Users },
  { title: "Messages", url: "/messages", icon: MessagesSquare },
  { title: "Clan", url: "/clan", icon: Shield },
  { title: "Shop", url: "/shop", icon: ShoppingBag },
  { title: "Daily Games", url: "/daily", icon: Calendar },
  { title: "Profile", url: "/profile", icon: User },
];

const adminNavItems = [
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Insights", url: "/insights", icon: Lightbulb },
  { title: "Performance", url: "/performance", icon: TrendingUp },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const { isAdminMode } = useAdminMode();
  
  const navItems = isAdminMode ? adminNavItems : userNavItems;

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-md">
              <span className="text-xl font-bold">C</span>
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="font-heading font-bold text-lg">Cheil</h1>
                <p className="text-xs text-muted-foreground">Level Up Daily</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 hover:bg-sidebar-accent transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
