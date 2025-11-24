import { StreakCard } from "@/components/StreakCard";
import { RankCard } from "@/components/RankCard";
import { CourseCard } from "@/components/CourseCard";
import { BookOpen, Globe, MessageSquare, GraduationCap } from "lucide-react";

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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StreakCard />
          <RankCard />
        </div>

        {/* Courses Section */}
        <div className="space-y-4">
          <h2 className="font-heading font-bold text-2xl text-foreground">Your Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CourseCard
              id="1"
              title="German Basics"
              description="Master everyday German conversations and essential grammar"
              icon={Globe}
              progress={65}
              totalLessons={24}
              completedLessons={16}
              color="bg-blue-500/10 text-blue-500"
            />
            <CourseCard
              id="2"
              title="Spanish Fundamentals"
              description="Learn Spanish pronunciation and common phrases"
              icon={MessageSquare}
              progress={42}
              totalLessons={30}
              completedLessons={13}
              color="bg-orange-500/10 text-orange-500"
            />
            <CourseCard
              id="3"
              title="French Essentials"
              description="Discover French culture and language basics"
              icon={BookOpen}
              progress={28}
              totalLessons={28}
              completedLessons={8}
              color="bg-purple-500/10 text-purple-500"
            />
            <CourseCard
              id="4"
              title="Italian Beginner"
              description="Dive into Italian vocabulary and expressions"
              icon={GraduationCap}
              progress={15}
              totalLessons={26}
              completedLessons={4}
              color="bg-green-500/10 text-green-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
