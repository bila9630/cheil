import { Trophy, ChevronUp, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface RankUser {
  name: string;
  initials: string;
  level: number;
  xp: number;
  rank: number;
  isCurrentUser?: boolean;
}

const rankData: RankUser[] = [
  { name: "Noah Davis", initials: "ND", level: 2, xp: 210, rank: 10 },
  { name: "You", initials: "JD", level: 1, xp: 0, rank: 11, isCurrentUser: true },
];

export function RankCard() {
  const currentUser = rankData.find(u => u.isCurrentUser);
  const xpNeeded = currentUser ? 211 : 0;

  return (
    <Card className="bg-card border-primary/20 shadow-elevated overflow-hidden relative group hover:border-primary/40 transition-colors">
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-1 text-foreground">Your Rank</h3>
            <p className="text-muted-foreground">Compete with others!</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-full">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="space-y-3">
          {rankData.map((user, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                user.isCurrentUser
                  ? "bg-primary/5 border-2 border-primary"
                  : "bg-muted"
              }`}
            >
              <div className="flex items-center gap-2 min-w-[60px]">
                <ChevronUp className="h-4 w-4 text-primary" />
                <span className="font-heading font-bold text-lg text-primary">
                  #{user.rank}
                </span>
              </div>

              <Avatar className={user.isCurrentUser ? "ring-2 ring-primary" : ""}>
                <AvatarFallback
                  className={
                    user.isCurrentUser
                      ? "bg-primary text-primary-foreground font-heading font-bold"
                      : "bg-card text-foreground font-heading font-bold"
                  }
                >
                  {user.initials}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <p className="font-medium text-foreground">
                  {user.name}
                  {user.isCurrentUser && (
                    <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      You
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  Level {user.level} • {user.xp} XP
                </p>
              </div>

              {user.isCurrentUser && xpNeeded > 0 && (
                <div className="text-right">
                  <p className="text-xs text-primary font-medium">+{xpNeeded} to rank up</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
