interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "", variant = "light" }: LogoProps) {
  const bgColor = variant === "light" ? "#0d9488" : "#0d9488";
  const textColor = "#ffffff";
  const accentColor = "#5eead4";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="100" fill={bgColor} />

      {/* Globe circle */}
      <circle cx="100" cy="100" r="55" stroke={textColor} strokeWidth="3" fill="none" />

      {/* Vertical line */}
      <line x1="100" y1="45" x2="100" y2="155" stroke={textColor} strokeWidth="2" />

      {/* Horizontal ellipse */}
      <ellipse cx="100" cy="100" rx="55" ry="20" stroke={textColor} strokeWidth="2" fill="none" />

      {/* Wave accent */}
      <path
        d="M 45 100 Q 70 85, 100 100 T 155 100"
        stroke={accentColor}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Text paths */}
      <defs>
        <path id="topArc" d="M 20 75 A 85 85 0 0 1 180 75" fill="none" />
        <path id="bottomArc" d="M 25 135 A 80 80 0 0 0 175 135" fill="none" />
      </defs>

      {/* Top curved text - Transatlantic */}
      <text fill={textColor} fontSize="22" fontFamily="Georgia, serif" fontStyle="italic">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          Transatlantic
        </textPath>
      </text>

      {/* Bottom curved text - Health Solutions */}
      <text fill={textColor} fontSize="20" fontFamily="Georgia, serif" fontStyle="italic">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          Health Solutions
        </textPath>
      </text>
    </svg>
  );
}
