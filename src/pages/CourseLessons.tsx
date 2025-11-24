import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Repeat, Video, Book, Headphones, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

export default function CourseLessons() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses[courseId as keyof typeof courses] || courses["1"];

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
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">{course.section}</Badge>
              <h1 className="font-heading font-bold text-3xl mb-2">{course.topic}</h1>
              <p className="text-muted-foreground">{course.title}</p>
            </div>
            <div className="text-right">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" fill="currentColor" />
                  </div>
                  <span className="font-bold">1043</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-destructive/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">❤️</span>
                  </div>
                  <span className="font-bold">25</span>
                </div>
              </div>
            </div>
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
