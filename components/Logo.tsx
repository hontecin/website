type Props = {
  className?: string;
  variant?: "ink" | "paper";
  withWordmark?: boolean;
};

export function Logo({ className = "", variant = "ink", withWordmark = true }: Props) {
  const color = variant === "paper" ? "#FFFFFF" : "#0A0A0B";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        width="28"
        height="28"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="12" y="10" width="14" height="44" rx="1.5" fill={color} />
        <path
          d="M26 30 Q52 30 52 44 L52 54 L38 54 L38 44 Q38 40 34 40 L26 40 Z"
          fill={color}
        />
        <rect x="42" y="10" width="10" height="13" rx="1.5" fill={color} />
      </svg>
      {withWordmark && (
        <span
          className="font-display font-semibold tracking-tight text-[1.05rem] leading-none"
          style={{ color }}
        >
          Hontec
        </span>
      )}
    </span>
  );
}
