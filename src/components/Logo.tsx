import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Transatlantic Health Solutions - Building Sustainable Health Solutions"
      width={200}
      height={80}
      className={className}
      priority
    />
  );
}
