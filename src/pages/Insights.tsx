import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Eye, TrendingUp, AlertTriangle, Sparkles, Target, Zap, Heart, Users, Clock, BookOpen } from "lucide-react";

// Sample data
const engagementByTime = [
  { time: "6AM", engagement: 15 },
  { time: "9AM", engagement: 45 },
  { time: "12PM", engagement: 72 },
  { time: "3PM", engagement: 88 },
  { time: "6PM", engagement: 95 },
  { time: "9PM", engagement: 78 },
  { time: "12AM", engagement: 25 },
];

const featureUsage = [
  { feature: "Lessons", usage: 4200 },
  { feature: "Challenges", usage: 3800 },
  { feature: "Streak", usage: 3200 },
  { feature: "Duels", usage: 2100 },
  { feature: "Shop", usage: 1800 },
  { feature: "Daily", usage: 2900 },
];

const learnerSegments = [
  { name: "Highly Engaged", value: 35, color: "#10b981" },
  { name: "Regular Users", value: 45, color: "#3b82f6" },
  { name: "At Risk", value: 15, color: "#f59e0b" },
  { name: "Inactive", value: 5, color: "#6b7280" },
];

const courseCompletion = [
  { course: "Basics", completed: 85, inProgress: 12 },
  { course: "Intermediate", completed: 62, inProgress: 28 },
  { course: "Advanced", completed: 38, inProgress: 45 },
  { course: "Expert", completed: 15, inProgress: 35 },
];

const Insights = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-4xl font-heading font-bold mb-2">Insights</h1>
        <p className="text-muted-foreground">Deep dive into learner behavior and platform performance</p>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Peak Engagement Hours
            </CardTitle>
            <CardDescription>When learners are most active</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={engagementByTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis dataKey="time" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <YAxis stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 5 }}
                  name="Engagement %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Feature Popularity
            </CardTitle>
            <CardDescription>Most used platform features</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={featureUsage} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis type="number" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <YAxis dataKey="feature" type="category" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} width={80} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="usage" fill="#6366f1" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Learner Segments
            </CardTitle>
            <CardDescription>User engagement distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={learnerSegments}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                  style={{ fontSize: '12px', fill: 'hsl(var(--foreground))' }}
                >
                  {learnerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="hsl(var(--background))" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Course Completion Rates
            </CardTitle>
            <CardDescription>Progress across difficulty levels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={courseCompletion}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis dataKey="course" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <YAxis stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="completed" fill="#22c55e" radius={[8, 8, 0, 0]} name="Completed %" />
                <Bar dataKey="inProgress" fill="#3b82f6" radius={[8, 8, 0, 0]} name="In Progress %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Observations & Actionable Insights */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Key Observations */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Eye className="h-6 w-6 text-primary" />
              Key Observations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-primary/20 text-primary hover:bg-primary/20">
                  1
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Users love gamification features</span> - Streaks, daily challenges, and reward systems drive 68% of daily engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-primary/20 text-primary hover:bg-primary/20">
                  2
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Peak hours are 6-9 PM</span> - Evening sessions show 95% engagement rate, suggesting learners prefer after-work study time.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-primary/20 text-primary hover:bg-primary/20">
                  3
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Drop-off at advanced levels</span> - Only 38% complete advanced courses, indicating difficulty spike or content gap.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-primary/20 text-primary hover:bg-primary/20">
                  4
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Social features underutilized</span> - Clan and duel participation at 23%, despite high completion rates when engaged.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actionable Insights */}
        <Card className="border-2 border-chart-3/20 bg-gradient-to-br from-chart-3/5 via-chart-3/3 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Sparkles className="h-6 w-6 text-chart-3" />
              Actionable Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-chart-3/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-chart-3/20 text-chart-3 hover:bg-chart-3/20">
                  1
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Add intermediate difficulty tier</span> - Bridge the gap between regular and advanced courses with gradual progression content.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-chart-3/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-chart-3/20 text-chart-3 hover:bg-chart-3/20">
                  2
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Promote social features in onboarding</span> - Highlight clan benefits and match new users for duels to increase engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-chart-3/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-chart-3/20 text-chart-3 hover:bg-chart-3/20">
                  3
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Optimize for evening sessions</span> - Send push notifications at 5 PM and add special evening challenges to capitalize on peak hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-chart-3/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold bg-chart-3/20 text-chart-3 hover:bg-chart-3/20">
                  4
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Expand gamification elements</span> - Add achievement badges, leaderboards, and personalized milestones to sustain long-term motivation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Insights;
