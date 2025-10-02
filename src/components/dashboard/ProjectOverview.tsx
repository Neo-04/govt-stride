import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Target, 
  Users, 
  BarChart3, 
  Award, 
  AlertTriangle, 
  FileText, 
  TrendingUp,
  Bell,
  Clock,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Home,
  FolderKanban,
  FileBarChart
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const ProjectOverview = () => {
  // Mock user data - in real app, this would come from auth context
  const userData = {
    name: "John Doe",
    role: "Employee", // Options: "Employee", "Team Lead", "Admin"
    department: "IT Department",
    employeeId: "EMP12345",
    score: 78,
    badges: ["Efficiency Star", "On-Time Finisher"],
    isProbation: false
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Top Navigation Bar */}
      <div className="bg-card border rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg">ProTrack Productivity & Performance</h2>
              <p className="text-xs text-muted-foreground">Management System</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    {getInitials(userData.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium leading-none">{userData.name}</p>
                  <p className="text-xs text-muted-foreground">{userData.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero/Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {userData.name.split(' ')[0]}! 👋
        </h1>
        <p className="text-muted-foreground mb-6">Productivity Insights at Your Fingertips</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Tasks Due</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="h-12 w-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Badges Earned</p>
                  <p className="text-2xl font-bold">{userData.badges.length}</p>
                </div>
                <div className="h-12 w-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Area with Sidebar Layout */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* My Performance Score */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">My Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-muted"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - userData.score / 100)}`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold">{userData.score}</span>
                    <span className="text-xs text-muted-foreground">/ 100</span>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons below the gauge */}
              <div className="space-y-2 pt-4">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FolderKanban className="h-4 w-4" />
                  Projects
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Target className="h-4 w-4" />
                  KPIs
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FileBarChart className="h-4 w-4" />
                  Reports
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Task Tracker */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Task Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Due this week</span>
                  <span className="font-bold">3 tasks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">In progress</span>
                  <span className="font-bold">5 tasks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="font-bold text-green-600">12 tasks</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alerts & Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2 p-2 bg-red-50 rounded">
                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">File #456 Delayed</p>
                  <p className="text-xs text-muted-foreground">Action required</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                <Bell className="h-4 w-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">New KPI Update</p>
                  <p className="text-xs text-muted-foreground">Review changes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logout Button at the bottom */}
          <Button variant="destructive" className="w-full gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
        {userData.role === "Employee" && (
          <>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  My KPIs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>File Disposal Rate</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Turnaround Time</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <Progress value={72} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Drafting Quality</span>
                    <span className="font-medium">90%</span>
                  </div>
                  <Progress value={90} />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Tasks in Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-sm">DPR Preparation</p>
                    <p className="text-xs text-muted-foreground">Due in 2 days</p>
                  </div>
                  <Badge>60%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-sm">File #123</p>
                    <p className="text-xs text-red-500">Delayed by 1 day</p>
                  </div>
                  <Badge variant="destructive">40%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Survey Report</p>
                    <p className="text-xs text-muted-foreground">On track</p>
                  </div>
                  <Badge variant="secondary">80%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  My Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userData.badges.map((badge, idx) => (
                    <Badge key={idx} className="gap-1 bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20">
                      <Award className="h-3 w-3" />
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Keep up the great work to earn more badges!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Project Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="p-2 bg-muted rounded">
                    <p className="text-sm font-medium">Survey Report</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={80} className="h-1.5" />
                      <span className="text-xs">80%</span>
                    </div>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="text-sm font-medium">DPR Analysis</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={45} className="h-1.5" />
                      <span className="text-xs">45%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {userData.role === "Team Lead" && (
          <>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Team Productivity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Score</span>
                    <span className="text-2xl font-bold">76/100</span>
                  </div>
                  <Progress value={76} className="h-2" />
                  <p className="text-xs text-muted-foreground">5 members above target, 2 need support</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  Bottleneck Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">2 projects behind schedule</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">3 pending approvals</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Pending Approvals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-between">
                    <span className="text-sm">DPR Review - Project Alpha</span>
                    <Badge>Urgent</Badge>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span className="text-sm">Leave Request - John Doe</span>
                    <Badge variant="secondary">2 days</Badge>
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span className="text-sm">Budget Approval - Q2</span>
                    <Badge variant="secondary">1 week</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {userData.role === "Admin" && (
          <>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Org-Wide Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Average Productivity</span>
                    <span className="font-bold">74/100</span>
                  </div>
                  <Progress value={74} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tasks Completed</span>
                    <span className="font-bold">86%</span>
                  </div>
                  <Progress value={86} />
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="text-center p-2 bg-muted rounded">
                    <p className="text-xs text-muted-foreground">Total Staff</p>
                    <p className="text-xl font-bold">142</p>
                  </div>
                  <div className="text-center p-2 bg-muted rounded">
                    <p className="text-xs text-muted-foreground">Active Projects</p>
                    <p className="text-xl font-bold">28</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderKanban className="h-5 w-5 text-primary" />
                  Project Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">Highway Survey</span>
                    <Badge variant="secondary">On Track</Badge>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Budget: ₹45L / ₹60L</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">Bridge Construction</span>
                    <Badge>In Progress</Badge>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Budget: ₹120L / ₹200L</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileBarChart className="h-5 w-5 text-primary" />
                  Reports & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start gap-2" variant="outline">
                  <FileText className="h-4 w-4" />
                  Download Monthly Report
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <BarChart3 className="h-4 w-4" />
                  View Analytics Dashboard
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <Users className="h-4 w-4" />
                  Staff Performance Report
                </Button>
              </CardContent>
            </Card>
          </>
        )}
        </div>
      </div>

      {/* Probation Section (if applicable) */}
      {userData.isProbation && (
        <Card className="border-orange-500 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Probation Notice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              Your current performance score is below the threshold. Please communicate with your supervisor 
              to discuss challenges and improvement strategies.
            </p>
            <Button className="gap-2">
              <Users className="h-4 w-4" />
              Communicate with Supervisor
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Footer */}
      <div className="bg-card border rounded-lg p-6 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Button variant="link" className="h-auto p-0">About</Button>
            <Button variant="link" className="h-auto p-0">Help</Button>
            <Button variant="link" className="h-auto p-0">Contact Support</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Powered by ProTrack, Brahmaputra Board
          </p>
        </div>
      </div>
    </div>
  );
};
