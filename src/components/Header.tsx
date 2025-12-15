import { useState } from "react";
import { Search, User, Settings, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useAdminMode } from "@/contexts/AdminModeContext";
import { SettingsDialog } from "@/components/SettingsDialog";

export function Header() {
  const navigate = useNavigate();
  const { isAdminMode, toggleAdminMode } = useAdminMode();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleAdminSwitch = () => {
    toggleAdminMode();
    navigate(isAdminMode ? "/" : "/analytics");
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-full lg:w-3/4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions, insights..."
                className="pl-9 bg-muted/50 border-muted"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                ⌘K
              </kbd>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="ring-2 ring-primary cursor-pointer hover:ring-primary/70 transition-all">
                <AvatarFallback className="bg-primary text-primary-foreground font-heading font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-card border-border z-50" align="end">
              <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSettingsOpen(true)} className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleAdminSwitch} className="cursor-pointer">
                <Shield className="mr-2 h-4 w-4" />
                <span>{isAdminMode ? "Switch to User" : "Switch to Admin"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
}
