import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Zap, Award, Target, Repeat } from "lucide-react";

// Sample data for charts
const dailyActiveUsers = [
  { date: "Mon", users: 1250, sessions: 2100 },
  { date: "Tue", users: 1420, sessions: 2400 },
  { date: "Wed", users: 1680, sessions: 2850 },
  { date: "Thu", users: 1540, sessions: 2650 },
  { date: "Fri", users: 1890, sessions: 3200 },
  { date: "Sat", users: 2100, sessions: 3500 },
  { date: "Sun", users: 1950, sessions: 3150 },
];

const weeklyActiveUsers = [
  { week: "W1", users: 8500, newUsers: 450 },
  { week: "W2", users: 9200, newUsers: 520 },
  { week: "W3", users: 10100, newUsers: 680 },
  { week: "W4", users: 11200, newUsers: 750 },
  { week: "W5", users: 12500, newUsers: 820 },
  { week: "W6", users: 13800, newUsers: 950 },
];

const streakData = [
  { day: "Day 1", activeStreaks: 3200, brokenStreaks: 150 },
  { day: "Day 3", activeStreaks: 2950, brokenStreaks: 250 },
  { day: "Day 7", activeStreaks: 2600, brokenStreaks: 350 },
  { day: "Day 14", activeStreaks: 2100, brokenStreaks: 500 },
  { day: "Day 30", activeStreaks: 1650, brokenStreaks: 450 },
  { day: "Day 60", activeStreaks: 1200, brokenStreaks: 450 },
  { day: "Day 90", activeStreaks: 950, brokenStreaks: 250 },
];

const rewardUsage = [
  { category: "XP Boosts", usage: 3500 },
  { category: "Streak Freeze", usage: 2800 },
  { category: "Power-ups", usage: 2200 },
  { category: "Cosmetics", usage: 1900 },
  { category: "Hints", usage: 1500 },
];

const challengeParticipation = [
  { month: "Jan", participants: 5200, completions: 4100 },
  { month: "Feb", participants: 5800, completions: 4600 },
  { month: "Mar", participants: 6500, completions: 5200 },
  { month: "Apr", participants: 7200, completions: 5900 },
  { month: "May", participants: 8100, completions: 6800 },
  { month: "Jun", participants: 9000, completions: 7500 },
];

const retentionCurve = [
  { day: "Day 1", retention: 100 },
  { day: "Day 7", retention: 68 },
  { day: "Day 14", retention: 52 },
  { day: "Day 30", retention: 38 },
  { day: "Day 60", retention: 28 },
  { day: "Day 90", retention: 22 },
  { day: "Day 180", retention: 18 },
];

const Analytics = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-4xl font-heading font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Monitor learner engagement and platform performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Active Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,100</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12.5%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Session Time</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24m 32s</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8.2%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Streaks</CardTitle>
            <Repeat className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">-2.1%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Challenge Completion</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83.3%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+5.7%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList className="bg-muted">
          <TabsTrigger value="daily">Daily View</TabsTrigger>
          <TabsTrigger value="weekly">Weekly View</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Active Users & Sessions</CardTitle>
                <CardDescription>Track daily engagement patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dailyActiveUsers}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="date" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Area type="monotone" dataKey="users" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} name="Active Users" />
                    <Area type="monotone" dataKey="sessions" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.6} name="Sessions" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Challenge Participation</CardTitle>
                <CardDescription>Monthly challenge engagement trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={challengeParticipation}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="participants" stroke="hsl(var(--primary))" strokeWidth={2} name="Participants" />
                    <Line type="monotone" dataKey="completions" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Completions" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Reward Usage Distribution</CardTitle>
              <CardDescription>Most popular reward categories</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={rewardUsage}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="category" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="usage" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} name="Usage Count" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Active Users Growth</CardTitle>
                <CardDescription>6-week user activity trend</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={weeklyActiveUsers}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="week" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Area type="monotone" dataKey="users" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} name="Total Users" />
                    <Area type="monotone" dataKey="newUsers" stroke="hsl(var(--chart-4))" fill="hsl(var(--chart-4))" fillOpacity={0.6} name="New Users" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Streak Stability</CardTitle>
                <CardDescription>Active vs broken streaks over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={streakData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="day" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="activeStreaks" fill="hsl(var(--chart-3))" radius={[8, 8, 0, 0]} name="Active Streaks" />
                    <Bar dataKey="brokenStreaks" fill="hsl(var(--chart-5))" radius={[8, 8, 0, 0]} name="Broken Streaks" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="retention" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                User Retention Curve
              </CardTitle>
              <CardDescription>Percentage of users returning over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={retentionCurve}>
                  <defs>
                    <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" label={{ value: 'Retention %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => `${value}%`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="retention" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    fill="url(#retentionGradient)" 
                    name="Retention Rate"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">68%</div>
                  <div className="text-xs text-muted-foreground">Day 7</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">38%</div>
                  <div className="text-xs text-muted-foreground">Day 30</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">22%</div>
                  <div className="text-xs text-muted-foreground">Day 90</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">18%</div>
                  <div className="text-xs text-muted-foreground">Day 180</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
