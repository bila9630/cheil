import { CourseCard } from "@/components/CourseCard";
import { Code, Brain, MessageCircle, Users } from "lucide-react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="font-heading font-bold text-4xl text-foreground">
              Welcome back, Jane!
            </h1>
            <span className="text-4xl">👋</span>
          </div>
        </div>

        {/* Courses Section */}
        <div className="space-y-4">
          <h2 className="font-heading font-bold text-2xl text-foreground">Your Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CourseCard
              id="1"
              title="Python"
              description="Master Python programming from basics to advanced concepts"
              icon={Code}
              progress={65}
              totalLessons={24}
              completedLessons={16}
              color="bg-blue-500/10 text-blue-500"
            />
            <CourseCard
              id="2"
              title="Machine Learning"
              description="Learn ML algorithms, neural networks, and AI fundamentals"
              icon={Brain}
              progress={42}
              totalLessons={30}
              completedLessons={13}
              color="bg-purple-500/10 text-purple-500"
            />
            <CourseCard
              id="3"
              title="How to Communicate"
              description="Develop effective communication and presentation skills"
              icon={MessageCircle}
              progress={28}
              totalLessons={28}
              completedLessons={8}
              color="bg-green-500/10 text-green-500"
            />
            <CourseCard
              id="4"
              title="Social Intelligence"
              description="Master emotional intelligence and interpersonal dynamics"
              icon={Users}
              progress={15}
              totalLessons={26}
              completedLessons={4}
              color="bg-orange-500/10 text-orange-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
