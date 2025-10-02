import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  current: number;
  target: number;
  unit: string;
  trend: "up" | "down";
  weight: number;
}

export const KPICard = ({ title, current, target, unit, trend, weight }: KPICardProps) => {
  const percentage = (current / target) * 100;
  const isGood = percentage >= 100;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold text-foreground">
              {current}
              <span className="text-lg text-muted-foreground ml-1">{unit}</span>
            </span>
            <div className={cn("flex items-center gap-1", isGood ? "text-success" : "text-muted-foreground")}>
              {trend === "up" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">{percentage.toFixed(0)}%</span>
            </div>
          </div>
          
          <Progress value={Math.min(percentage, 100)} className="h-2" />
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Target: {target}{unit}</span>
            <span>Weight: {weight}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
