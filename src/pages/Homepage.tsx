import { Button } from "@/components/ui/button";
import { StreakCard } from "@/components/StreakCard";
import { RankCard } from "@/components/RankCard";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
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
