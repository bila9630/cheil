import { Users, Star, ArrowUpRight, X, MessageCircle, Filter, ArrowLeft, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

interface MessageProfile {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
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

const mockMessageProfiles: MessageProfile[] = [
  { id: "1", name: "Alex Johnson", lastMessage: "Hey, how are you?", timestamp: "2m ago", online: true },
  { id: "2", name: "Sarah Miller", lastMessage: "Let's practice together!", timestamp: "1h ago", online: true },
  { id: "3", name: "Mike Chen", lastMessage: "Great match!", timestamp: "3h ago", online: false },
  { id: "4", name: "Emma Davis", lastMessage: "Thanks for the tips", timestamp: "1d ago", online: false },
  { id: "5", name: "James Wilson", lastMessage: "See you tomorrow", timestamp: "2d ago", online: false },
];

export default function Duell() {
  const navigate = useNavigate();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [activeTab, setActiveTab] = useState("match");
  const [selectedChat, setSelectedChat] = useState<MessageProfile | null>(null);
  const [messageText, setMessageText] = useState("");

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
    
    if (action === "like") {
      setShowMatchModal(true);
    } else {
      setShowProfile(false);
      setTimeout(() => {
        setCurrentProfileIndex((prev) => (prev + 1) % filteredProfiles.length);
        setShowProfile(true);
      }, 200);
    }
  };

  const handleMatchModalClose = () => {
    setShowMatchModal(false);
    setShowProfile(false);
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % filteredProfiles.length);
      setShowProfile(true);
    }, 200);
  };

  const handleGoToMessages = () => {
    setActiveTab("messages");
    setShowMatchModal(false);
    const messageProfile = mockMessageProfiles.find(p => p.id === currentProfile.id);
    if (messageProfile) {
      setSelectedChat(messageProfile);
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
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
        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="match">Match</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          {/* Match Tab Content */}
          <TabsContent value="match" className="space-y-6 mt-6">

        {/* Match Modal */}
        <Dialog open={showMatchModal} onOpenChange={setShowMatchModal}>
          <DialogContent className="max-w-md bg-background">
            <div className="flex items-center justify-between py-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">It's a match!</h2>
                <p className="text-lg text-muted-foreground mt-1">Start exchanging</p>
              </div>
              <button 
                onClick={handleGoToMessages}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <MessageCircle className="h-16 w-16 text-green-500 scale-x-[-1]" strokeWidth={2} />
              </button>
            </div>
            <Button onClick={handleMatchModalClose} className="w-full">
              Continue
            </Button>
          </DialogContent>
        </Dialog>
        {/* Profile Card */}
        {showProfile && (
          <Card className="p-8 transition-opacity duration-200 relative">
            {/* Filter Button - Top Right */}
            <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute top-4 right-4 h-10 w-10 border-2 hover:bg-accent transition-colors"
                >
                  <Filter className="h-5 w-5" />
                  {selectedFilters.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                      {selectedFilters.length}
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-background">
                <DialogHeader>
                  <DialogTitle>Filter by Skills</DialogTitle>
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

        {/* Action Buttons - Bottom */}
        <div className="flex justify-center gap-8 pb-6">
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
            <MessageCircle className="h-20 w-20 text-green-500" strokeWidth={2.5} />
          </Button>
        </div>
        </TabsContent>

        {/* Messages Tab Content */}
        <TabsContent value="messages" className="space-y-6 mt-6">
          {/* Profile List */}
          {!selectedChat && (
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Messages</h1>
              {mockMessageProfiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="p-4 hover:bg-accent cursor-pointer transition-colors"
                  onClick={() => setSelectedChat(profile)}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src="" alt={profile.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {profile.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      {profile.online && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg truncate">{profile.name}</h3>
                        <span className="text-xs text-muted-foreground">{profile.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{profile.lastMessage}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Chat Room */}
          {selectedChat && (
            <div className="space-y-4">
              {/* Chat Header */}
              <Card className="p-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedChat(null)}
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={selectedChat.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {selectedChat.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-xl">{selectedChat.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {selectedChat.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Messages Area */}
              <Card className="h-[500px] flex flex-col">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                        <p className="text-sm">{selectedChat.lastMessage}</p>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {selectedChat.timestamp}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[70%]">
                        <p className="text-sm">That sounds great!</p>
                        <span className="text-xs opacity-70 mt-1 block">Just now</span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
