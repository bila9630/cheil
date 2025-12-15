import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Code, Flame, Gem, Brain, MessageCircle, Users, Plus } from "lucide-react";
import { useState } from "react";

const enrolledCourses = [
  { name: "Python", icon: Code, color: "bg-blue-500/10 text-blue-500" },
  { name: "Machine Learning", icon: Brain, color: "bg-purple-500/10 text-purple-500" },
  { name: "Social Intelligence", icon: Users, color: "bg-orange-500/10 text-orange-500" },
];

export const ActivitySummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(enrolledCourses[0]);

  const handleCourseClick = (course: typeof enrolledCourses[0]) => {
    setActiveCourse(course);
    setIsOpen(false);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="bg-card border-primary/20 shadow-elevated">
        <div className="p-4">
          <div className="flex items-center justify-between gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
            {/* Current Course - Clickable */}
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity min-w-0">
                <div className={`p-2 sm:p-2.5 rounded-lg shrink-0 ${activeCourse.color}`}>
                  <activeCourse.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-heading font-semibold text-foreground text-sm sm:text-base truncate">{activeCourse.name}</span>
              </button>
            </CollapsibleTrigger>

            {/* Streak */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-lg bg-orange-500/10 shrink-0">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              </div>
              <span className="font-heading font-semibold text-foreground text-sm sm:text-base whitespace-nowrap">15 days</span>
            </div>

            {/* Gems */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 shrink-0">
                <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="font-heading font-semibold text-foreground text-sm sm:text-base">560</span>
            </div>
          </div>

          <CollapsibleContent className="animate-accordion-down">
            <div className="pt-4 mt-4 border-t border-border">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {enrolledCourses.map((course) => (
                  <button
                    key={course.name}
                    onClick={() => handleCourseClick(course)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                      activeCourse.name === course.name
                        ? 'bg-muted/50 ring-1 ring-primary/20'
                        : 'hover:bg-muted/30'
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${course.color}`}>
                      <course.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-center">{course.name}</span>
                  </button>
                ))}
                
                {/* Add Course Button */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-lg bg-primary/20 hover:bg-primary/30 transition-all border border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]">
                  <div className="p-3 rounded-lg bg-card/80 backdrop-blur-sm">
                    <Plus className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-primary">Add course</span>
                </button>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Card>
    </Collapsible>
  );
};
