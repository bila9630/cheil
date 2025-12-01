import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingDown, Clock, Target, AlertCircle, CheckCircle2, Brain, MapPin } from "lucide-react";

// Sample data
const courseCompletion = [
  { course: "JavaScript Basics", completion: 92, avgTime: "2.5 weeks", students: 1250 },
  { course: "React Fundamentals", completion: 78, avgTime: "3.2 weeks", students: 980 },
  { course: "Node.js Backend", completion: 65, avgTime: "4.1 weeks", students: 720 },
  { course: "Database Design", completion: 71, avgTime: "3.8 weeks", students: 650 },
  { course: "Advanced Patterns", completion: 48, avgTime: "5.5 weeks", students: 420 },
];

const moduleProgress = [
  { module: "Intro", completed: 95, dropped: 5 },
  { module: "Week 1", completed: 88, dropped: 7 },
  { module: "Week 2", completed: 82, dropped: 6 },
  { module: "Week 3", completed: 74, dropped: 8 },
  { module: "Week 4", completed: 68, dropped: 6 },
  { module: "Week 5", completed: 58, dropped: 10 },
  { module: "Week 6", completed: 52, dropped: 6 },
  { module: "Final", completed: 48, dropped: 4 },
];

const quizAccuracy = [
  { topic: "Variables", accuracy: 89, attempts: 3200 },
  { topic: "Functions", accuracy: 82, attempts: 2950 },
  { topic: "Arrays", accuracy: 76, attempts: 2800 },
  { topic: "Objects", accuracy: 71, attempts: 2650 },
  { topic: "Async/Await", accuracy: 58, attempts: 2200 },
  { topic: "Closures", accuracy: 54, attempts: 1980 },
];

const timeToMastery = [
  { skill: "HTML/CSS", avgDays: 8, range: "5-12 days" },
  { skill: "JavaScript", avgDays: 18, range: "12-25 days" },
  { skill: "React", avgDays: 24, range: "18-32 days" },
  { skill: "Node.js", avgDays: 28, range: "20-38 days" },
  { skill: "Databases", avgDays: 22, range: "15-30 days" },
];

const skillHeatmap = [
  { skill: "Syntax", A: 95, B: 88, C: 82, D: 75, E: 68, fullMark: 100 },
  { skill: "Logic", A: 88, B: 82, C: 76, D: 70, E: 62, fullMark: 100 },
  { skill: "Debugging", A: 78, B: 72, C: 68, D: 62, E: 55, fullMark: 100 },
  { skill: "Architecture", A: 72, B: 68, C: 62, D: 58, E: 48, fullMark: 100 },
  { skill: "Optimization", A: 65, B: 58, C: 52, D: 48, E: 42, fullMark: 100 },
];

const dropOffPoints = [
  { point: "Getting Started", rate: 8, reason: "Unclear setup instructions" },
  { point: "Week 3 Challenge", rate: 15, reason: "Difficulty spike too steep" },
  { point: "Advanced Topics", rate: 22, reason: "Missing prerequisites" },
  { point: "Final Project", rate: 12, reason: "Time commitment too high" },
];

const Performance = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-4xl font-heading font-bold mb-2">Performance Analytics</h1>
        <p className="text-muted-foreground">Track learner progress and identify areas for content improvement</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Completion Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">70.8%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+5.2%</span> from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quiz Accuracy</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">71.7%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+2.8%</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card className="border-chart-2/20 bg-gradient-to-br from-chart-2/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Time to Mastery</CardTitle>
            <Clock className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20 days</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-500">-1 day</span> faster
            </p>
          </CardContent>
        </Card>

        <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drop-off Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.3%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">+1.8%</span> needs attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-chart-3" />
              Completion Rates by Course
            </CardTitle>
            <CardDescription>Overall course completion performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseCompletion}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="course" 
                  stroke="hsl(var(--foreground))" 
                  style={{ fontSize: '11px' }}
                  angle={-15}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #22c55e',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                  labelStyle={{ color: '#ffffff' }}
                  itemStyle={{ color: '#ffffff' }}
                />
                <Bar dataKey="completion" fill="#22c55e" radius={[8, 8, 0, 0]} name="Completion %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-500" />
              Module Progress & Drop-offs
            </CardTitle>
            <CardDescription>Tracking student progression through modules</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={moduleProgress}>
                <defs>
                  <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="droppedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis dataKey="module" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <YAxis stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                  labelStyle={{ color: '#ffffff' }}
                  itemStyle={{ color: '#ffffff' }}
                />
                <Legend />
                <Area type="monotone" dataKey="completed" stroke="#3b82f6" fill="url(#completedGradient)" name="Completed %" />
                <Area type="monotone" dataKey="dropped" stroke="#ef4444" fill="url(#droppedGradient)" name="Dropped %" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Quiz Accuracy by Topic
            </CardTitle>
            <CardDescription>Identify challenging topics for learners</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={quizAccuracy} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis type="number" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
                <YAxis dataKey="topic" type="category" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} width={100} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #6366f1',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                  labelStyle={{ color: '#ffffff' }}
                  itemStyle={{ color: '#ffffff' }}
                />
                <Bar dataKey="accuracy" fill="#6366f1" radius={[0, 8, 8, 0]} name="Accuracy %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-chart-2" />
              Skill Proficiency Heatmap
            </CardTitle>
            <CardDescription>Performance across difficulty levels (A=Easiest, E=Hardest)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillHeatmap}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="skill" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#9ca3af" style={{ fontSize: '11px' }} />
                <Radar name="Level A" dataKey="A" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                <Radar name="Level C" dataKey="C" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
                <Radar name="Level E" dataKey="E" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #22c55e',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                  labelStyle={{ color: '#ffffff' }}
                  itemStyle={{ color: '#ffffff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-chart-2" />
            Average Time to Mastery
          </CardTitle>
          <CardDescription>Days needed to achieve proficiency per skill</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeToMastery}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis dataKey="skill" stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} />
              <YAxis stroke="hsl(var(--foreground))" style={{ fontSize: '12px' }} label={{ value: 'Days', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #3b82f6',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
                labelStyle={{ color: '#ffffff' }}
                itemStyle={{ color: '#ffffff' }}
              />
              <Line 
                type="monotone" 
                dataKey="avgDays" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 6 }}
                name="Avg Days"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Drop-off Points */}
      <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <MapPin className="h-6 w-6 text-red-500" />
            Critical Drop-off Points
          </CardTitle>
          <CardDescription>Areas requiring immediate content improvement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {dropOffPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-red-500/30 transition-colors">
              <div className="flex-shrink-0">
                <Badge className="h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold bg-red-500/20 text-red-500 hover:bg-red-500/20">
                  {point.rate}%
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-base mb-1">{point.point}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      {point.reason}
                    </p>
                  </div>
                  <Progress value={point.rate} className="w-32 h-2" />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Performance;
