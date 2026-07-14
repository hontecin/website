import Image from "next/image";

type Props = {
  className?: string;
  variant?: "ink" | "paper";
  withWordmark?: boolean;
  size?: "md" | "lg";
};

export function Logo({ className = "", variant = "ink", withWordmark = true, size = "md" }: Props) {
  const src = variant === "paper" ? "/logos/logo-white.png" : "/logos/logo-dark.png";
  const heightClass = size === "lg" ? "h-20" : "h-12";
  const width = size === "lg" ? (withWordmark ? 280 : 80) : (withWordmark ? 180 : 48);
  const height = size === "lg" ? 80 : 48;
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Hontec"
        width={width}
        height={height}
        className={`${heightClass} w-auto rounded-xl`}
        priority
      />
    </span>
  );
}
