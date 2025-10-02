import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { IndividualDashboard } from "@/components/dashboard/IndividualDashboard";
import { TeamDashboard } from "@/components/dashboard/TeamDashboard";
import { OrganizationDashboard } from "@/components/dashboard/OrganizationDashboard";
import { AdminPanel } from "@/components/dashboard/AdminPanel";
import { ProbationManagement } from "@/components/dashboard/ProbationManagement";

export type DashboardView = "individual" | "team" | "organization" | "admin" | "probation";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [currentView, setCurrentView] = useState<DashboardView>("individual");
  const [userRole] = useState<"employee" | "supervisor" | "admin">("employee");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

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
