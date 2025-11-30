import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Profile() {
  // User's own profile data
  const userProfile = {
    name: "Your Name",
    age: 25,
    bio: "Your tagline here",
    interests: ["Python", "Communication", "Social Intelligence"],
    streak: 34,
    courses: [
      { name: "Machine Learning", progress: 65 },
      { name: "How to Communicate", progress: 78 }
    ],
    jobPosition: "Your Job Title",
    aboutMe: "Tell others about yourself! Share your passions, goals, and what makes you unique. This is your chance to connect with like-minded learners."
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">My Profile</h1>

        {/* Profile Card */}
        <Card className="p-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <Avatar className="w-32 h-32 border-4 border-border">
              <AvatarImage src="" alt={userProfile.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
                YN
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="text-3xl font-bold">{userProfile.name}, {userProfile.age}</h2>
              <p className="text-lg text-muted-foreground mt-2">{userProfile.bio}</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {userProfile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Profile Details */}
            <div className="w-full space-y-4 mt-8">
              {/* Job Position and Streak */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-muted border border-muted-foreground/20 rounded-md flex items-center justify-center px-4">
                  <span className="text-lg font-semibold text-center">{userProfile.jobPosition}</span>
                </div>
                <div className="h-20 bg-muted border border-muted-foreground/20 rounded-md flex items-center justify-center gap-3">
                  <span className="text-lg font-semibold text-muted-foreground">Streak:</span>
                  <span className="text-4xl font-bold text-primary">{userProfile.streak}</span>
                </div>
              </div>

              {/* Current Courses */}
              <div className="h-auto bg-muted border border-muted-foreground/20 rounded-md p-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Current Courses:</h3>
                <div className="space-y-2">
                  {userProfile.courses.map((course, index) => (
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
                <p className="text-sm leading-relaxed">{userProfile.aboutMe}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
