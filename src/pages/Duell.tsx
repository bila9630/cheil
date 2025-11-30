import { Users, Star, ArrowUpRight, X, Heart, Filter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  streak: number;
  courses: { name: string; progress: number }[];
  jobPosition: string;
  aboutMe: string;
}

const mockProfiles: Profile[] = [
  { 
    id: "1", 
    name: "Alex Johnson", 
    age: 24, 
    bio: "Love learning Python and ML", 
    interests: ["Python", "Data Analysis", "Statistics"], 
    streak: 47,
    courses: [
      { name: "Machine Learning", progress: 65 },
      { name: "Java", progress: 42 }
    ],
    jobPosition: "Data Analyst",
    aboutMe: "I'm passionate about turning data into insights. When I'm not analyzing datasets, you'll find me exploring new ML algorithms or contributing to open-source projects. Always eager to connect with fellow data enthusiasts!"
  },
  { 
    id: "2", 
    name: "Sarah Miller", 
    age: 26, 
    bio: "Communication expert and social butterfly", 
    interests: ["Public Speaking", "Leadership", "Networking"], 
    streak: 32,
    courses: [
      { name: "How to Communicate", progress: 78 },
      { name: "Social Intelligence", progress: 55 }
    ],
    jobPosition: "Marketing Manager",
    aboutMe: "I believe in the power of authentic communication. My journey in marketing has taught me that connecting with people is an art form. I love bringing teams together and creating campaigns that resonate."
  },
  { 
    id: "3", 
    name: "Mike Chen", 
    age: 28, 
    bio: "AI enthusiast and data scientist", 
    interests: ["Machine Learning", "Deep Learning", "Neural Networks"], 
    streak: 89,
    courses: [
      { name: "Python", progress: 92 },
      { name: "How to Communicate", progress: 88 }
    ],
    jobPosition: "Senior Data Scientist",
    aboutMe: "Building intelligent systems that solve real-world problems is my passion. I specialize in deep learning and have worked on projects ranging from computer vision to NLP. Always learning, always growing."
  },
  { 
    id: "4", 
    name: "Emma Davis", 
    age: 23, 
    bio: "Building my communication skills daily", 
    interests: ["Writing", "Storytelling", "Creative Thinking"], 
    streak: 15,
    courses: [
      { name: "Social Intelligence", progress: 34 },
      { name: "Python", progress: 22 }
    ],
    jobPosition: "Content Writer",
    aboutMe: "Words are my craft, stories are my passion. I love creating content that inspires and engages. Currently exploring the intersection of creativity and technology. Let's connect and share ideas!"
  },
  { 
    id: "5", 
    name: "James Wilson", 
    age: 27, 
    bio: "Code by day, learn by night", 
    interests: ["JavaScript", "Web Development", "Design"], 
    streak: 63,
    courses: [
      { name: "Python", progress: 71 },
      { name: "Machine Learning", progress: 48 }
    ],
    jobPosition: "Frontend Developer",
    aboutMe: "I create beautiful, user-friendly web experiences. My background in design gives me a unique perspective on frontend development. Always excited to learn new technologies and expand my skill set."
  },
];

export default function Duell() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get all unique interests from profiles
  const allInterests = Array.from(
    new Set(mockProfiles.flatMap(profile => profile.interests))
  ).sort();

  // Filter profiles based on selected interests
  const filteredProfiles = selectedFilters.length > 0
    ? mockProfiles.filter(profile =>
        selectedFilters.some(filter => profile.interests.includes(filter))
      )
    : mockProfiles;

  const currentProfile = filteredProfiles[currentProfileIndex % filteredProfiles.length];

  const handleAction = (action: "reject" | "like") => {
    console.log(`${action} profile:`, currentProfile.name);
    setShowProfile(false);
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % filteredProfiles.length);
      setShowProfile(true);
    }, 200);
  };

  const handleFilterToggle = (interest: string) => {
    setSelectedFilters(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
    setCurrentProfileIndex(0); // Reset to first profile when filters change
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Action Buttons */}
        <div className="relative">
          <div className="flex justify-center gap-8">
            <Button
              size="icon"
              variant="outline"
              className="h-24 w-24 rounded-full border-4 border-red-400 hover:bg-red-500/10 transition-colors"
              onClick={() => handleAction("reject")}
            >
              <X className="h-20 w-20 text-red-500" strokeWidth={3} />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="h-24 w-24 rounded-full border-4 border-green-400 hover:bg-green-500/10 transition-colors"
              onClick={() => handleAction("like")}
            >
              <Heart className="h-20 w-20 text-green-500 fill-green-500" strokeWidth={0} />
            </Button>
          </div>

          {/* Filter Button - Positioned on the right */}
          <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-16 px-6 border-2 hover:bg-accent transition-colors"
              >
                <Filter className="h-6 w-6 mr-2" />
                Filter
                {selectedFilters.length > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                    {selectedFilters.length}
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-background">
              <DialogHeader>
                <DialogTitle>Filter by Interests</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4 max-h-[400px] overflow-y-auto">
                {allInterests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={selectedFilters.includes(interest)}
                      onCheckedChange={() => handleFilterToggle(interest)}
                    />
                    <Label
                      htmlFor={interest}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedFilters([]);
                    setCurrentProfileIndex(0);
                  }}
                >
                  Clear All
                </Button>
                <Button onClick={() => setIsFilterOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
                {/* Job Position and Streak */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-muted border border-muted-foreground/20 rounded-md flex items-center justify-center px-4">
                    <span className="text-lg font-semibold text-center">{currentProfile.jobPosition}</span>
                  </div>
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

                {/* About Me */}
                <div className="bg-muted border border-muted-foreground/20 rounded-md p-4">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">About Me:</h3>
                  <p className="text-sm leading-relaxed">{currentProfile.aboutMe}</p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
