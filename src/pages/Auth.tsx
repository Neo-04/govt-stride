import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Trophy, ArrowRight, LogIn } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: loginEmail,
        password: loginPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            employee_id: employeeId,
            department: department,
            post: role,
            name: loginEmail.split('@')[0],
          }
        }
      });

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      toast({
        title: "Account created successfully!",
        description: "You can now login with your credentials.",
      });
      
      setIsLogin(true);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Trophy className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">e-Office Performance System</h1>
          <p className="text-muted-foreground">Access your performance dashboard</p>
        </div>

        {/* Login/Signup Card */}
        <Card className="shadow-xl">
          <CardHeader className="space-y-3 pb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <LogIn className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">{isLogin ? "Login" : "Sign Up"}</CardTitle>
                <CardDescription className="text-base">
                  {isLogin ? "Enter your credentials to access your account" : "Create a new account to get started"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-base">Email Address</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="employee@gov.in"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employee-id" className="text-base">Employee ID</Label>
                  <Input
                    id="employee-id"
                    type="text"
                    placeholder="EMP12345"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-base">Department</Label>
                  <Input
                    id="department"
                    type="text"
                    placeholder="IT Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role" className="text-base">Role</Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="Technical Officer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-base">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-11 text-base" 
                disabled={loading}
              >
                {loading ? (isLogin ? "Logging in..." : "Creating account...") : (
                  <>
                    {isLogin ? "Login to Dashboard" : "Create Account"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center">
              <Button
                type="button"
                variant="link"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;