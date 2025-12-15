import {
  Home,
  Users,
  User,
  BarChart3,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useAdminMode } from "@/contexts/AdminModeContext";

const userNavItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Learners", url: "/duell", icon: Users },
  { title: "Profile", url: "/profile", icon: User },
];

const adminNavItems = [
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Insights", url: "/insights", icon: Lightbulb },
  { title: "Performance", url: "/performance", icon: TrendingUp },
];

export function BottomNav() {
  const { isAdminMode } = useAdminMode();
  const navItems = isAdminMode ? adminNavItems : userNavItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end={item.url === "/"}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[60px]"
            activeClassName="text-primary bg-primary/10"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
