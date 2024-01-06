import Link from "next/link";
import { Text } from "./Text";

interface ButtonProps {
  type: "button" | "submit";
  color?: "light" | "dark" | "accent";
  link?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
}

export function Button({
  disabled,
  danger,
  onClick,
  color = "light",
  link = "",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const colors = {
    light: "bg-background text-secondary",
    dark: "bg-primary text-background",
    accent: "bg-background text-primary",
  };

  const styles = `py-3 pl-8 pr-16 md:pl-10 md:pr-[4.5rem] border-[1px] border-secondary rounded relative group ${
    colors[color]
  } ${disabled && "opacity-500 cursor-default"} ${
    danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600"
  }`;

  return (
    <Link href={link}>
      <button
        className={styles}
        {...props}
        onClick={onClick}
        disabled={disabled}
      >
        <Text
          size="button"
          className="transition-transform duration-200 group-hover:-translate-x-1"
        >
          {children}
        </Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#129DC0"
          className="w-6 h-6 absolute right-8 top-1/2 transform -translate-y-1/2 transition-transform duration-200 group-hover:translate-x-2"
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
