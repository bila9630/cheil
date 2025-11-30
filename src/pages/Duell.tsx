import { Users, Star, ArrowUpRight, X, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  streak: number;
  courses: { name: string; progress: number }[];
}

const mockProfiles: Profile[] = [
  { 
    id: "1", 
    name: "Alex Johnson", 
    age: 24, 
    bio: "Love learning Python and ML", 
    interests: ["Python", "Machine Learning", "Tech"], 
    streak: 47,
    courses: [
      { name: "Python", progress: 65 },
      { name: "Machine Learning", progress: 42 }
    ]
  },
  { 
    id: "2", 
    name: "Sarah Miller", 
    age: 26, 
    bio: "Communication expert and social butterfly", 
    interests: ["Communication", "Social Intelligence", "Networking"], 
    streak: 32,
    courses: [
      { name: "How to Communicate", progress: 78 },
      { name: "Social Intelligence", progress: 55 }
    ]
  },
  { 
    id: "3", 
    name: "Mike Chen", 
    age: 28, 
    bio: "AI enthusiast and data scientist", 
    interests: ["Machine Learning", "Python", "Data Science"], 
    streak: 89,
    courses: [
      { name: "Machine Learning", progress: 92 },
      { name: "Python", progress: 88 }
    ]
  },
  { 
    id: "4", 
    name: "Emma Davis", 
    age: 23, 
    bio: "Building my communication skills daily", 
    interests: ["How to Communicate", "Social Intelligence"], 
    streak: 15,
    courses: [
      { name: "How to Communicate", progress: 34 }
    ]
  },
  { 
    id: "5", 
    name: "James Wilson", 
    age: 27, 
    bio: "Code by day, learn by night", 
    interests: ["Python", "Machine Learning"], 
    streak: 63,
    courses: [
      { name: "Python", progress: 71 },
      { name: "Machine Learning", progress: 48 }
    ]
  },
];

export default function Duell() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const currentProfile = mockProfiles[currentProfileIndex];

  const handleAction = (action: "reject" | "like") => {
    console.log(`${action} profile:`, currentProfile.name);
    setShowProfile(false);
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % mockProfiles.length);
      setShowProfile(true);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Action Buttons */}
        <div className="flex justify-center gap-8">
          <Button
            size="icon"
            variant="outline"
            className="h-24 w-24 rounded-full border-4 hover:bg-destructive/10 transition-colors"
            onClick={() => handleAction("reject")}
          >
            <X className="h-20 w-20 text-destructive" strokeWidth={3} />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-24 w-24 rounded-full border-4 hover:bg-green-500/10 transition-colors"
            onClick={() => handleAction("like")}
          >
            <Heart className="h-20 w-20 text-green-500 fill-green-500" strokeWidth={0} />
          </Button>
        </div>

        {/* Profile Card */}
        {showProfile && (
          <Card className="p-8 transition-opacity duration-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <Avatar className="w-32 h-32 border-4 border-border">
                <AvatarImage src="" alt={currentProfile.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
                  {currentProfile.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h2 className="text-3xl font-bold">{currentProfile.name}, {currentProfile.age}</h2>
                <p className="text-lg text-muted-foreground mt-2">{currentProfile.bio}</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {currentProfile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Text Fields */}
              <div className="w-full space-y-4 mt-8">
                {/* Field and Streak */}
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="Enter text..." 
                    className="h-20 bg-muted border-muted-foreground/20"
                  />
                  <div className="h-20 bg-muted border border-muted-foreground/20 rounded-md flex items-center justify-center gap-3">
                    <span className="text-lg font-semibold text-muted-foreground">Streak:</span>
                    <span className="text-4xl font-bold text-primary">{currentProfile.streak}</span>
                  </div>
                </div>

                {/* Current Courses */}
                <div className="h-auto bg-muted border border-muted-foreground/20 rounded-md p-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Current Courses:</h3>
                  <div className="space-y-2">
                    {currentProfile.courses.map((course, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-medium">{course.name}</span>
                        <span className="text-sm font-bold text-primary">{course.progress}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Large text area */}
                <Textarea 
                  placeholder="Enter longer text..." 
                  className="min-h-[300px] bg-muted border-muted-foreground/20 resize-none"
                />
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
