import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  color: string;
}

export const CourseCard = ({
  id,
  title,
  description,
  icon: Icon,
  progress,
  totalLessons,
  completedLessons,
  color,
}: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="bg-card border-primary/20 shadow-elevated overflow-hidden relative group hover:border-primary/40 transition-all cursor-pointer hover:scale-[1.02]"
      onClick={() => navigate(`/course/${id}`)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${color}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Progress</div>
            <div className="text-2xl font-bold">{progress}%</div>
          </div>
        </div>
        
        <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{completedLessons} completed</span>
            <span>{totalLessons} total lessons</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
