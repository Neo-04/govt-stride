import { cn } from "@/lib/utils";

interface PerformanceGaugeProps {
  score: number;
}

export const PerformanceGauge = ({ score }: PerformanceGaugeProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 50) return "Average";
    return "Needs Improvement";
  };

  const rotation = (score / 100) * 180 - 90;

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-64 h-32">
        {/* Gauge background */}
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <path
            d="M 10 90 A 80 80 0 0 1 190 90"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Colored segments */}
          <path
            d="M 10 90 A 80 80 0 0 1 100 10"
            fill="none"
            stroke="hsl(var(--destructive))"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.3"
          />
          <path
            d="M 100 10 A 80 80 0 0 1 146 23"
            fill="none"
            stroke="hsl(var(--warning))"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.3"
          />
          <path
            d="M 146 23 A 80 80 0 0 1 190 90"
            fill="none"
            stroke="hsl(var(--success))"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.3"
          />
          {/* Progress arc */}
          <path
            d={`M 10 90 A 80 80 0 ${score > 50 ? 1 : 0} 1 ${
              100 + 80 * Math.cos((rotation * Math.PI) / 180)
            } ${90 - 80 * Math.sin((rotation * Math.PI) / 180)}`}
            fill="none"
            stroke={score >= 80 ? "hsl(var(--success))" : score >= 60 ? "hsl(var(--warning))" : "hsl(var(--destructive))"}
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Center score display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <span className={cn("text-5xl font-bold", getScoreColor(score))}>{score}</span>
          <span className="text-sm text-muted-foreground">out of 100</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className={cn("text-lg font-semibold", getScoreColor(score))}>
          {getScoreLabel(score)}
        </p>
        <p className="text-sm text-muted-foreground">Performance Rating</p>
      </div>
    </div>
  );
};
