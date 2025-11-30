import { Users, Star, ArrowUpRight, X, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Duell() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Action Buttons */}
        <div className="flex justify-center gap-8">
          <Button
            size="icon"
            variant="outline"
            className="h-24 w-24 rounded-full border-4 hover:bg-destructive/10 transition-colors"
          >
            <X className="h-20 w-20 text-destructive" strokeWidth={3} />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-24 w-24 rounded-full border-4 hover:bg-green-500/10 transition-colors"
          >
            <Heart className="h-20 w-20 text-green-500 fill-green-500" strokeWidth={0} />
          </Button>
        </div>
        
        <div className="space-y-4">
          {/* First Row - Two fields side by side */}
          <div className="grid grid-cols-2 gap-4">
            <Input 
              placeholder="Enter text..." 
              className="h-20 bg-muted border-muted-foreground/20"
            />
            <Input 
              placeholder="Enter text..." 
              className="h-20 bg-muted border-muted-foreground/20"
            />
          </div>

          {/* Second Row - Field and Score */}
          <div className="grid grid-cols-2 gap-4">
            <Input 
              placeholder="Enter text..." 
              className="h-20 bg-muted border-muted-foreground/20"
            />
            <div className="h-20 bg-muted border border-muted-foreground/20 rounded-md flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-foreground fill-foreground" />
              <span className="text-4xl font-bold">12</span>
            </div>
          </div>

          {/* Third Row - Field with arrow */}
          <div className="relative">
            <Input 
              placeholder="Enter text..." 
              className="h-20 bg-muted border-muted-foreground/20 pr-16"
            />
            <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8" />
          </div>

          {/* Fourth Row - Large text area */}
          <Textarea 
            placeholder="Enter longer text..." 
            className="min-h-[300px] bg-muted border-muted-foreground/20 resize-none"
          />
        </div>

        {/* Profile Avatar */}
        <div className="flex justify-center pt-8">
          <Avatar className="w-48 h-48 border-4 border-border">
            <AvatarImage src="" alt="User profile" />
            <AvatarFallback className="bg-muted">
              <Users className="h-24 w-24" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
