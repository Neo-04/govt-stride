import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2 } from "lucide-react";

export const AdminPanel = () => {
  const kpiTemplates = [
    { id: 1, name: "File Disposal Rate", weight: 25, type: "HQ Admin" },
    { id: 2, name: "Turnaround Time", weight: 20, type: "HQ Admin" },
    { id: 3, name: "DPR Preparation", weight: 30, type: "Field Tech" },
    { id: 4, name: "Survey Accuracy", weight: 25, type: "Field Tech" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h2>
        <p className="text-muted-foreground">Manage KPIs, users, and system configuration</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>KPI Management</CardTitle>
            <CardDescription>Define and configure performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-4 mb-6">
                {kpiTemplates.map((kpi) => (
                  <div key={kpi.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{kpi.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {kpi.type} • Weight: {kpi.weight}%
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New KPI
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create New KPI</CardTitle>
            <CardDescription>Add a new performance indicator</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="kpi-name">KPI Name</Label>
                <Input id="kpi-name" placeholder="e.g., File Disposal Rate" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi-weight">Weight (%)</Label>
                <Input id="kpi-weight" type="number" placeholder="25" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi-type">Role Type</Label>
                <select
                  id="kpi-type"
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground"
                >
                  <option value="hq">HQ Admin</option>
                  <option value="field">Field Tech</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi-target">Target Value</Label>
                <Input id="kpi-target" type="number" placeholder="90" />
              </div>
              <Button type="submit" className="w-full">Create KPI</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage user roles and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                    U{i}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">User {i}</p>
                    <p className="text-sm text-muted-foreground">user{i}@example.com</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit Role</Button>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
