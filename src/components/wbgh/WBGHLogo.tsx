import Image from "next/image";
import { cn } from "@/lib/utils";

interface WBGHLogoProps {
  className?: string;
  variant?: "color" | "white" | "dark";
}

export function WBGHLogo({ className, variant = "color" }: WBGHLogoProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/images/wbgh/wbgh-logo.png"
        alt="Writing Bridge in Global Health (WBGH)"
        width={200}
        height={80}
        className="object-contain"
        priority
      />
    </div>
  );
}
