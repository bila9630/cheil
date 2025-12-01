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
          <div className="flex items-center justify-between gap-6">
            {/* Current Course - Clickable */}
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className={`p-2.5 rounded-lg ${activeCourse.color}`}>
                  <activeCourse.icon className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold text-foreground">{activeCourse.name}</span>
              </button>
            </CollapsibleTrigger>

            {/* Streak */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-orange-500/10">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <span className="font-heading font-semibold text-foreground">15 days</span>
            </div>

            {/* Gems */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Gem className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-semibold text-foreground">560</span>
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
                        ? 'bg-accent ring-2 ring-primary/50'
                        : 'hover:bg-accent'
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${course.color}`}>
                      <course.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-center">{course.name}</span>
                  </button>
                ))}
                
                {/* Add Course Button */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors border border-dashed border-border">
                  <div className="p-3 rounded-lg bg-muted">
                    <Plus className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Add course</span>
                </button>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Card>
    </Collapsible>
  );
};
