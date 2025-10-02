import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { IndividualDashboard } from "@/components/dashboard/IndividualDashboard";
import { TeamDashboard } from "@/components/dashboard/TeamDashboard";
import { OrganizationDashboard } from "@/components/dashboard/OrganizationDashboard";
import { AdminPanel } from "@/components/dashboard/AdminPanel";
import { ProbationManagement } from "@/components/dashboard/ProbationManagement";

export type DashboardView = "individual" | "team" | "organization" | "admin" | "probation";

const Dashboard = () => {
  const [currentView, setCurrentView] = useState<DashboardView>("individual");
  const [userRole] = useState<"employee" | "supervisor" | "admin">("employee");

  const renderDashboard = () => {
    switch (currentView) {
      case "individual":
        return <IndividualDashboard />;
      case "team":
        return <TeamDashboard />;
      case "organization":
        return <OrganizationDashboard />;
      case "admin":
        return <AdminPanel />;
      case "probation":
        return <ProbationManagement />;
      default:
        return <IndividualDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} userRole={userRole} />
      <main className="flex-1 p-6 lg:p-8">
        {renderDashboard()}
      </main>
    </div>
  );
};

export default Dashboard;
