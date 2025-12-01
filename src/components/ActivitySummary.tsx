import { Card } from "@/components/ui/card";
import { Code, Flame, Gem } from "lucide-react";

export const ActivitySummary = () => {
  return (
    <Card className="bg-card border-primary/20 shadow-elevated">
      <div className="p-4 flex items-center justify-between gap-6">
        {/* Current Course */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-500/10">
            <Code className="w-5 h-5 text-blue-500" />
          </div>
          <span className="font-heading font-semibold text-foreground">Python</span>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-orange-500/10">
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <span className="font-heading font-semibold text-foreground">15 days</span>
        </div>

        {/* Gems */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10">
            <Gem className="w-5 h-5 text-primary" />
          </div>
          <span className="font-heading font-semibold text-foreground">560</span>
        </div>
      </div>
    </Card>
  );
};
