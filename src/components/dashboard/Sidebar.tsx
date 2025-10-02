import { LayoutDashboard, Users, Building2, Settings, AlertCircle, Trophy } from "lucide-react";
import { DashboardView } from "@/pages/Dashboard";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentView: DashboardView;
  setCurrentView: (view: DashboardView) => void;
  userRole: "employee" | "supervisor" | "admin";
}

export const Sidebar = ({ currentView, setCurrentView, userRole }: SidebarProps) => {
  const menuItems = [
    { id: "individual" as DashboardView, label: "My Performance", icon: LayoutDashboard, roles: ["employee", "supervisor", "admin"] },
    { id: "team" as DashboardView, label: "Team Overview", icon: Users, roles: ["supervisor", "admin"] },
    { id: "organization" as DashboardView, label: "Organization", icon: Building2, roles: ["admin"] },
    { id: "probation" as DashboardView, label: "Probation Management", icon: AlertCircle, roles: ["supervisor", "admin"] },
    { id: "admin" as DashboardView, label: "Admin Panel", icon: Settings, roles: ["admin"] },
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">ProTrack</h1>
        </div>
        <p className="text-xs text-muted-foreground">Performance Management System</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    currentView === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-lg">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
