import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Repeat, Video, Book, Headphones, Lock, Users, X, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Lesson {
  id: string;
  type: "lesson" | "practice" | "video" | "reading" | "listening";
  isLocked: boolean;
  stars?: number;
}

const mockLessons: Lesson[] = [
  { id: "1", type: "lesson", isLocked: false, stars: 3 },
  { id: "2", type: "practice", isLocked: false },
  { id: "3", type: "video", isLocked: false },
  { id: "4", type: "reading", isLocked: false },
  { id: "5", type: "listening", isLocked: true },
  { id: "6", type: "video", isLocked: true },
  { id: "7", type: "lesson", isLocked: true },
  { id: "8", type: "practice", isLocked: true },
];

const courses = {
  "1": { title: "Python", section: "Section 1, Unit 3", topic: "Functions & Data Structures" },
  "2": { title: "Machine Learning", section: "Section 2, Unit 5", topic: "Neural Networks Basics" },
  "3": { title: "How to Communicate", section: "Section 1, Unit 2", topic: "Active Listening Skills" },
  "4": { title: "Social Intelligence", section: "Section 3, Unit 7", topic: "Reading Body Language" },
};

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
      { name: "Python", progress: 71 }
    ],
    jobPosition: "Data Analyst",
    aboutMe: "I'm passionate about turning data into insights. When I'm not analyzing datasets, you'll find me exploring new ML algorithms or contributing to open-source projects."
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
    aboutMe: "I believe in the power of authentic communication. My journey in marketing has taught me that connecting with people is an art form."
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
      { name: "Machine Learning", progress: 88 }
    ],
    jobPosition: "Senior Data Scientist",
    aboutMe: "Building intelligent systems that solve real-world problems is my passion. I specialize in deep learning and have worked on projects ranging from computer vision to NLP."
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
    aboutMe: "Words are my craft, stories are my passion. I love creating content that inspires and engages. Currently exploring the intersection of creativity and technology."
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
    aboutMe: "I create beautiful, user-friendly web experiences. My background in design gives me a unique perspective on frontend development."
  },
];

export default function CourseLessons() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses[courseId as keyof typeof courses] || courses["1"];
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(true);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter profiles by current course
  const courseProfiles = mockProfiles.filter(profile =>
    profile.courses.some(c => c.name === course.title)
  );

  const currentProfile = courseProfiles[currentProfileIndex % courseProfiles.length];

  const handleAction = (action: "reject" | "like") => {
    if (action === "like") {
      setShowMatchModal(true);
    } else {
      setShowProfile(false);
      setTimeout(() => {
        setCurrentProfileIndex((prev) => (prev + 1) % courseProfiles.length);
        setShowProfile(true);
      }, 200);
    }
  };

  const handleMatchModalClose = () => {
    setShowMatchModal(false);
    setShowProfile(false);
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % courseProfiles.length);
      setShowProfile(true);
    }, 200);
  };

  const handleGoToMessages = () => {
    setIsDialogOpen(false);
    navigate('/messages', { state: { profileId: currentProfile?.id, profileName: currentProfile?.name } });
  };

  const getLessonIcon = (type: string, isLocked: boolean) => {
    const iconClass = isLocked ? "w-8 h-8 text-muted" : "w-8 h-8 text-primary-foreground";
    
    switch (type) {
      case "lesson":
        return <Star className={iconClass} fill={isLocked ? "none" : "currentColor"} />;
      case "practice":
        return <Repeat className={iconClass} />;
      case "video":
        return <Video className={iconClass} />;
      case "reading":
        return <Book className={iconClass} />;
      case "listening":
        return <Headphones className={iconClass} />;
      default:
        return <Star className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Button>

        {/* Course Header */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 mb-8 border border-primary/20">
          <div className="flex items-end justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">{course.section}</Badge>
              <h1 className="font-heading font-bold text-3xl mb-2">{course.topic}</h1>
              <p className="text-muted-foreground">{course.title}</p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="success" className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Find your Learning Partner
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
                {courseProfiles.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No learners found for this course yet.</p>
                  </div>
                ) : (
                  <>
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

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-8 mb-6">
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

                    {/* Profile Card */}
                    {showProfile && currentProfile && (
                      <Card className="p-8">
                        <div className="flex flex-col items-center text-center space-y-6">
                          <Avatar className="w-32 h-32 border-4 border-border">
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

                          <div className="w-full space-y-4 mt-8">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="h-20 bg-muted border border-muted-foreground/20 rounded-md flex items-center justify-center px-4">
                                <span className="text-lg font-semibold text-center">{currentProfile.jobPosition}</span>
                              </div>
                              <div className="h-20 bg-muted border border-muted-foreground/20 rounded-md flex items-center justify-center gap-3">
                                <span className="text-lg font-semibold text-muted-foreground">Streak:</span>
                                <span className="text-4xl font-bold text-primary">{currentProfile.streak}</span>
                              </div>
                            </div>

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

                            <div className="bg-muted border border-muted-foreground/20 rounded-md p-4">
                              <h3 className="text-sm font-semibold text-muted-foreground mb-3">About Me:</h3>
                              <p className="text-sm leading-relaxed">{currentProfile.aboutMe}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )}
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Lesson Path */}
        <div className="relative flex flex-col items-center space-y-8 py-8">
          {mockLessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`relative ${index % 2 === 0 ? "mr-24" : "ml-24"}`}
            >
              {/* Connection Line */}
              {index < mockLessons.length - 1 && (
                <div 
                  className={`absolute top-20 ${index % 2 === 0 ? "left-1/2" : "right-1/2"} w-32 h-16 border-l-4 border-b-4 border-dashed border-primary/20 rounded-bl-3xl`}
                  style={{ 
                    transform: index % 2 === 0 ? "translateX(0)" : "translateX(0) scaleX(-1)",
                  }}
                />
              )}

              {/* Lesson Node */}
              <button
                disabled={lesson.isLocked}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all
                  ${lesson.isLocked 
                    ? "bg-muted/50 border-4 border-muted cursor-not-allowed opacity-60" 
                    : "bg-primary border-4 border-primary/20 hover:scale-110 shadow-lg hover:shadow-primary/20 cursor-pointer"
                  }`}
              >
                {lesson.isLocked ? (
                  <Lock className="w-8 h-8 text-muted-foreground" />
                ) : (
                  getLessonIcon(lesson.type, lesson.isLocked)
                )}
              </button>

              {/* Stars for completed lessons */}
              {lesson.stars && !lesson.isLocked && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
                  {[...Array(lesson.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
