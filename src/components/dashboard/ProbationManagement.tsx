import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, MessageCircle, Send } from "lucide-react";

export const ProbationManagement = () => {
  const probationEmployees = [
    {
      id: 1,
      name: "Sarah Williams",
      score: 45,
      issues: ["Low file disposal rate", "Missed deadlines"],
      lastCommunication: "2024-01-10",
      messages: 2,
    },
  ];

  const communications = [
    {
      id: 1,
      from: "Sarah Williams",
      message: "I am facing challenges with the current workload and need additional resources.",
      timestamp: "2024-01-10 14:30",
    },
    {
      id: 2,
      from: "Supervisor",
      message: "We can allocate additional support. Let's discuss this in our next meeting.",
      timestamp: "2024-01-10 16:45",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Probation Management</h2>
        <p className="text-muted-foreground">Monitor and support underperforming employees</p>
      </div>

      <Card className="border-warning bg-warning/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning mt-1" />
            <div>
              <p className="font-medium text-foreground">Probation Policy</p>
              <p className="text-sm text-muted-foreground mt-1">
                Employees scoring below 50/100 are placed on probation. Open communication and support
                are encouraged to help improve performance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Employees on Probation</CardTitle>
            <CardDescription>List of employees requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {probationEmployees.map((employee) => (
                <div key={employee.id} className="p-4 bg-muted rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-foreground">{employee.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="destructive">Score: {employee.score}/100</Badge>
                        <Badge variant="outline" className="gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {employee.messages} messages
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">Issues Identified:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {employee.issues.map((issue, index) => (
                        <li key={index}>• {issue}</li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Communication History
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Communication Channel</CardTitle>
            <CardDescription>Discuss challenges and solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {communications.map((comm) => (
                  <div
                    key={comm.id}
                    className={`p-3 rounded-lg ${
                      comm.from === "Supervisor"
                        ? "bg-primary/10 ml-4"
                        : "bg-muted mr-4"
                    }`}
                  >
                    <p className="text-sm font-medium text-foreground">{comm.from}</p>
                    <p className="text-sm text-foreground mt-1">{comm.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{comm.timestamp}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Type your message here..."
                  className="min-h-[100px]"
                />
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Probation Reminders & Actions</CardTitle>
          <CardDescription>Automated notifications and required actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-warning/10 border border-warning rounded-lg">
              <p className="text-sm font-medium text-foreground">
                Reminder sent to Sarah Williams: "Your performance requires improvement. Please communicate
                any challenges with your supervisor."
              </p>
              <p className="text-xs text-muted-foreground mt-2">Sent on: 2024-01-15</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Next scheduled reminder: 2024-01-22 (if no improvement)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
