import { Swords } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Duell() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
          <Swords className="h-10 w-10 text-primary" />
        </div>
        <h1 className="font-heading font-bold text-4xl text-foreground">Match</h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Challenge other players and compete for the top ranks. Coming soon!
        </p>
      </div>
      
      <div className="mt-auto">
        <Avatar className="w-48 h-48 border-4 border-border">
          <AvatarImage src="" alt="User profile" />
          <AvatarFallback className="bg-muted text-6xl">
            <Swords className="h-24 w-24" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
