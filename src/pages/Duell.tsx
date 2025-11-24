import { Swords } from "lucide-react";

export default function Duell() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
          <Swords className="h-10 w-10 text-primary" />
        </div>
        <h1 className="font-heading font-bold text-4xl text-foreground">Duell</h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Challenge other players and compete for the top ranks. Coming soon!
        </p>
      </div>
    </div>
  );
}
