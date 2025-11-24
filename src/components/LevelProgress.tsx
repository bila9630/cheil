import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface LevelProgressProps {
  level: number;
  currentXp: number;
  targetXp: number;
}

export function LevelProgress({ level, currentXp, targetXp }: LevelProgressProps) {
  const progress = (currentXp / targetXp) * 100;
  const progressClamped = Math.min(progress, 100);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          <span className="font-heading font-bold text-3xl text-foreground">Level {level}</span>
        </div>
        <span className="text-muted-foreground font-medium">
          {currentXp} / {targetXp} XP
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Progress to Level {level + 1}</span>
          <span className="font-semibold text-primary">{Math.round(progressClamped)}%</span>
        </div>
        <Progress value={progressClamped} className="h-3 bg-muted" />
      </div>
    </div>
  );
}
