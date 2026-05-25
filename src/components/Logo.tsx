import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Transatlantic Health Solutions"
      width={150}
      height={150}
      className={className}
      priority
    />
  );
}
