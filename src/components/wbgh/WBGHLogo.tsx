import Image from "next/image";
import { cn } from "@/lib/utils";

interface WBGHLogoProps {
  className?: string;
  variant?: "color" | "white" | "dark";
}

export function WBGHLogo({ className, variant = "color" }: WBGHLogoProps) {
  // TODO: Replace with actual WBGH logo once uploaded to /public/images/
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg">
        <span className="text-white font-bold text-xl">W</span>
      </div>
      <div className={cn(
        "font-bold text-lg leading-tight",
        variant === "white" && "text-white",
        variant === "dark" && "text-gray-900",
        variant === "color" && "text-blue-700"
      )}>
        <div>Writing Bridge</div>
        <div className="text-sm font-normal opacity-90">in Global Health</div>
      </div>
    </div>
  );
}
