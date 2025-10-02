import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, BarChart3, Award, AlertTriangle, FileText, TrendingUp } from "lucide-react";

export const ProjectOverview = () => {
  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">e-Office Productivity & Performance Management System</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive solution for transparent, data-driven employee performance tracking and management
        </p>
      </div>

      {/* Role-Specific KPIs */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            <CardTitle>Role-Specific KPIs</CardTitle>
          </div>
          <CardDescription>Customized performance indicators for different staff categories</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Badge variant="secondary">HQ Staff (Admin)</Badge>
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>File disposal rate</li>
              <li>Turnaround time</li>
              <li>Drafting quality</li>
              <li>Responsiveness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Badge variant="secondary">Field Staff (Technical)</Badge>
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>DPR preparation timeliness</li>
              <li>Survey accuracy</li>
              <li>Project timelines</li>
              <li>Budget utilization</li>
              <li>Quality compliance</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Scoring System */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <CardTitle>Scoring System (Out of 100)</CardTitle>
          </div>
          <CardDescription>Balanced evaluation combining quantitative and qualitative metrics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="font-medium">Quantitative Metrics</span>
            <Badge>70–80%</Badge>
          </div>
          <p className="text-sm text-muted-foreground ml-3">Timeliness, accuracy, measurable outputs</p>
          
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="font-medium">Qualitative Metrics</span>
            <Badge>20–30%</Badge>
          </div>
          <p className="text-sm text-muted-foreground ml-3">Initiative, teamwork, innovation</p>
        </CardContent>
      </Card>

      {/* Dashboards & Monitoring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <CardTitle>Dashboards & Monitoring</CardTitle>
          </div>
          <CardDescription>Multi-level performance tracking and visualization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Users className="h-4 w-4" />
              Individual Dashboard
            </h3>
            <p className="text-sm text-muted-foreground ml-6">
              Employee goals, progress tracking, productivity score gauge, assigned tasks
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Users className="h-4 w-4" />
              Team Dashboard
            </h3>
            <p className="text-sm text-muted-foreground ml-6">
              Team productivity heatmap, milestone tracking, bottleneck alerts
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Organization Dashboard
            </h3>
            <p className="text-sm text-muted-foreground ml-6">
              Overall productivity, project status, financial vs physical progress, top performers, report generation
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Target className="h-4 w-4" />
              Admin Panel
            </h3>
            <p className="text-sm text-muted-foreground ml-6">
              Define/edit KPIs, manage users, adjust weightages, view audit logs
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Required Features */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Gamification */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <CardTitle>Gamification</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm">Award badges to employees with commendable performance</p>
            <p className="text-sm">Leaderboard display of top performers (optional but aligned with badges)</p>
          </CardContent>
        </Card>

        {/* Probation System */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <CardTitle>Probation System</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm">
              Employees scoring below threshold (e.g., &lt;50/100) are marked as "On Probation"
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">Probation Dashboard Features:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Communication channel for challenges (workload, resources, skill gaps)</li>
                <li>Supervisor response and guidance system</li>
                <li>Periodic warnings and reminders for improvement</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports & Transparency */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <CardTitle>Reports & Transparency</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">Generate and export reports (PDF/Excel) for higher-level analysis</p>
          <p className="text-sm">Ensure fair and transparent evaluation using quantified KPIs instead of perception alone</p>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
          <CardDescription>Modern, scalable technology foundation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Frontend</h4>
              <p className="text-sm text-muted-foreground">React + TypeScript with dashboards, graphs, forms, and role-based views</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Backend</h4>
              <p className="text-sm text-muted-foreground">Supabase (PostgreSQL) for data storage and authentication</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Charts & Visualization</h4>
              <p className="text-sm text-muted-foreground">Recharts for interactive dashboards and analytics</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Deployment</h4>
              <p className="text-sm text-muted-foreground">Optimized for seamless cloud deployment</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expected Outcomes */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-primary">Expected Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm">Transparent productivity tracking at individual, team, and organizational levels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm">Gamification for motivation (badges for high performers)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm">Probation management & support for underperformers (communication channel + reminders)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm">An objective, fair, and scientific alternative to the current subjective appraisal system (APAR)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm">Increased accountability, improved efficiency, and data-driven HR decisions in government offices</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-center font-medium">
            "A comprehensive Productivity & Performance Management Web App with role-specific KPIs, 
            weighted scoring, real-time dashboards, gamification for top performers, and a probation 
            + communication system for underperformers."
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
