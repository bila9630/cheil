import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StreakCard } from "@/components/StreakCard";
import { RankCard } from "@/components/RankCard";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions, insights..."
              className="pl-9 bg-muted/50 border-muted"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Avatar className="ring-2 ring-primary">
              <AvatarFallback className="bg-primary text-primary-foreground font-heading font-bold">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="font-heading font-bold text-4xl text-foreground">
              Welcome back, Jane!
            </h1>
            <span className="text-4xl">👋</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StreakCard />
          <RankCard />
        </div>

        {/* Questions Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button variant="secondary" className="font-medium">
              New (10)
            </Button>
            <Button variant="ghost" className="font-medium text-muted-foreground">
              Completed (0)
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center shadow-card">
            <p className="text-muted-foreground">Questions will appear here</p>
          </div>
        </div>
      </main>
    </div>
  );
}
