import Link from "next/link";
import { Text } from "./Text";

interface ButtonProps {
  color?: "light" | "dark" | "accent";
  link?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  color = "light",
  link = "",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const colors = {
    light: "bg-background text-primary",
    dark: "bg-primary text-background",
    accent: "bg-secondary text-background",
  };

  const styles = `py-[1.125rem] pl-8 pr-16 md:pl-16 md:pr-20 relative group ${colors[color]} ${className}`;

  return (
    <Link href={link}>
      <button type="button" className={styles} {...props}>
        <Text
          size="button"
          className={`transition-transform duration-200 group-hover:-translate-x-1 ${
            color === "dark" && "font-400"
          }`}
        >
          {children}
        </Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 absolute right-8 top-1/2 transform -translate-y-1/2 transition-transform duration-200 group-hover:translate-x-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </Link>
  );
}
