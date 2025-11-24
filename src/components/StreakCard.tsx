import { Flame, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DayStatus {
  day: string;
  completed: boolean;
}

const streakDays: DayStatus[] = [
  { day: "Sunday", completed: true },
  { day: "Monday", completed: true },
  { day: "Tuesday", completed: false },
];

export function StreakCard() {
  const currentStreak = streakDays.filter(d => d.completed).length;

  return (
    <Card className="bg-card border-primary/20 shadow-elevated overflow-hidden relative group hover:border-primary/40 transition-colors">
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-1 text-foreground">{currentStreak}-day Streak</h3>
            <p className="text-muted-foreground font-medium">Keep it going!</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-full">
            <Flame className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          {streakDays.map((dayInfo, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 flex-1">
              <span className="text-sm font-medium text-muted-foreground">{dayInfo.day}</span>
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                    dayInfo.completed
                      ? "bg-primary shadow-lg shadow-primary/30"
                      : "bg-muted"
                  }`}
                >
                  {dayInfo.completed && (
                    <Check className="h-7 w-7 text-background" strokeWidth={3} />
                  )}
                </div>
                {idx < streakDays.length - 1 && (
                  <div
                    className={`absolute top-1/2 left-full w-full h-1 -translate-y-1/2 ${
                      streakDays[idx + 1].completed ? "bg-primary" : "bg-border"
                    }`}
                    style={{ width: "calc(100% + 1rem)" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
