import { User } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
          <User className="h-10 w-10 text-primary" />
        </div>
        <h1 className="font-heading font-bold text-4xl text-foreground">Profile</h1>
        <p className="text-lg text-muted-foreground max-w-md">
          View your stats, achievements, and customize your profile. Coming soon!
        </p>
      </div>
    </div>
  );
}
