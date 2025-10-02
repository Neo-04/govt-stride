import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export const TeamDashboard = () => {
  const teamPerformance = [
    { name: "John Doe", score: 85 },
    { name: "Jane Smith", score: 78 },
    { name: "Mike Johnson", score: 92 },
    { name: "Sarah Williams", score: 45 },
    { name: "Tom Brown", score: 88 },
  ];

  const projectStatus = [
    { name: "Completed", value: 12, color: "hsl(var(--success))" },
    { name: "In Progress", value: 8, color: "hsl(var(--warning))" },
    { name: "Pending", value: 5, color: "hsl(var(--destructive))" },
  ];

  const milestones = [
    { id: 1, name: "Q1 Planning", status: "completed", date: "2024-01-15" },
    { id: 2, name: "Mid-year Review", status: "in-progress", date: "2024-06-30" },
    { id: 3, name: "Annual Assessment", status: "upcoming", date: "2024-12-31" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Team Overview</h2>
        <p className="text-muted-foreground">Monitor team performance and project status</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Team Performance Scores</CardTitle>
            <CardDescription>Individual productivity ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="score" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Status Distribution</CardTitle>
            <CardDescription>Overview of all team projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {projectStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Milestones</CardTitle>
          <CardDescription>Key deadlines and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{milestone.name}</p>
                  <p className="text-sm text-muted-foreground">{milestone.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    milestone.status === "completed"
                      ? "bg-success text-success-foreground"
                      : milestone.status === "in-progress"
                      ? "bg-warning text-warning-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {milestone.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
