import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { StreakCard } from "@/components/StreakCard";
import { RankCard } from "@/components/RankCard";

export default function Profile() {
  // User's own profile data
  const userProfile = {
    name: "Your Name",
    age: 25,
    interests: ["Python", "Communication", "Social Intelligence"],
    streak: 34,
    courses: [
      { name: "Machine Learning", progress: 65 },
      { name: "How to Communicate", progress: 78 },
    ],
    jobPosition: "Your Job Title",
    aboutMe:
      "Tell others about yourself! Share your passions, goals, and what makes you unique. This is your chance to connect with like-minded learners.",
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">My Profile</h1>

        {/* Profile Card */}
        <Card className="p-8">
          <div className="space-y-6">
            {/* Header Section with Avatar and Info */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Avatar className="w-32 h-32 border-4 border-border shrink-0">
                <AvatarImage src="" alt={userProfile.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">YN</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold">
                    {userProfile.name}, {userProfile.age}
                  </h2>
                  <p className="text-muted-foreground mt-1">{userProfile.jobPosition}</p>
                </div>

            <div className="flex flex-wrap gap-2">
              {userProfile.interests.map((interest) => (
                <span key={interest} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Info</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{userProfile.aboutMe}</p>
        </div>
      </div>
    </Card>

    {/* Current Courses Card */}
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Current Courses</h3>
      <div className="space-y-3">
        {userProfile.courses.map((course, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm font-medium">{course.name}</span>
            <span className="text-sm font-bold text-primary">{course.progress}%</span>
          </div>
        ))}
      </div>
    </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StreakCard />
          <RankCard />
        </div>
      </div>
    </div>
  );
}
