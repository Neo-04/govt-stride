import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { PerformanceGauge } from "./PerformanceGauge";
import { KPICard } from "./KPICard";

export const IndividualDashboard = () => {
  const overallScore = 78;
  const kpis: Array<{
    title: string;
    current: number;
    target: number;
    unit: string;
    trend: "up" | "down";
    weight: number;
  }> = [
    {
      title: "File Disposal Rate",
      current: 85,
      target: 90,
      unit: "%",
      trend: "up",
      weight: 25,
    },
    {
      title: "Turnaround Time",
      current: 2.5,
      target: 2,
      unit: "days",
      trend: "down",
      weight: 20,
    },
    {
      title: "Quality Score",
      current: 88,
      target: 85,
      unit: "%",
      trend: "up",
      weight: 30,
    },
    {
      title: "Responsiveness",
      current: 92,
      target: 90,
      unit: "%",
      trend: "up",
      weight: 25,
    },
  ];

  const badges = [
    { name: "Fast Responder", color: "bg-success", icon: Clock },
    { name: "Quality Champion", color: "bg-primary", icon: Award },
    { name: "Team Player", color: "bg-accent", icon: TrendingUp },
  ];

  const recentTasks = [
    { id: 1, title: "Review Budget Proposal 2024", status: "completed", dueDate: "2024-01-15" },
    { id: 2, title: "Prepare DPR for Project A", status: "in-progress", dueDate: "2024-01-20" },
    { id: 3, title: "Submit Survey Report", status: "pending", dueDate: "2024-01-25" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">My Performance Dashboard</h2>
        <p className="text-muted-foreground">Track your productivity and performance metrics</p>
      </div>

      {/* Performance Score and Badges */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Overall Performance Score</CardTitle>
            <CardDescription>Your current productivity rating out of 100</CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceGauge score={overallScore} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Earned Badges
            </CardTitle>
            <CardDescription>Your achievements this quarter</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <div className={`h-10 w-10 ${badge.color} rounded-full flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{badge.name}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* KPI Cards */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Key Performance Indicators</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>
      </div>

      {/* Recent Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Tasks</CardTitle>
          <CardDescription>Your assigned tasks and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  {task.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  ) : task.status === "in-progress" ? (
                    <Clock className="h-5 w-5 text-warning" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  )}
                  <div>
                    <p className="font-medium text-foreground">{task.title}</p>
                    <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    task.status === "completed"
                      ? "default"
                      : task.status === "in-progress"
                      ? "secondary"
                      : "destructive"
                  }
                  className="capitalize"
                >
                  {task.status.replace("-", " ")}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
