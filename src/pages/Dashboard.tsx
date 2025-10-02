import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ProjectOverview } from "@/components/dashboard/ProjectOverview";
import { IndividualDashboard } from "@/components/dashboard/IndividualDashboard";
import { TeamDashboard } from "@/components/dashboard/TeamDashboard";
import { OrganizationDashboard } from "@/components/dashboard/OrganizationDashboard";
import { AdminPanel } from "@/components/dashboard/AdminPanel";
import { ProbationManagement } from "@/components/dashboard/ProbationManagement";
import { Button } from "@/components/ui/button";
import { FileText, Home } from "lucide-react";

export type DashboardView = "individual" | "team" | "organization" | "admin" | "probation";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [currentView, setCurrentView] = useState<DashboardView>("individual");
  const [userRole] = useState<"employee" | "supervisor" | "admin">("employee");
  const [showPerformanceReport, setShowPerformanceReport] = useState(false);

  useEffect(() => {
    // Skip authentication check - allow access to dashboard
  }, [user, loading, navigate]);

  if (loading) {
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
        {!showPerformanceReport ? (
          <>
            <div className="mb-6 flex justify-end">
              <Button 
                onClick={() => setShowPerformanceReport(true)}
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                Performance Report
              </Button>
            </div>
            <ProjectOverview />
          </>
        ) : (
          <div>
            <div className="mb-6">
              <Button 
                onClick={() => setShowPerformanceReport(false)}
                variant="outline"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Button>
            </div>
            {renderDashboard()}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
