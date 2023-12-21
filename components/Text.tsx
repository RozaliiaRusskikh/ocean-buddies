interface TextProps {
  as?: React.ElementType;
  className?: string;
  size?: "body" | "super" | "button" | "nav";
  children?: React.ReactNode;
}

interface HeadingProps {
  as?: React.ElementType;
  className?: string;
  size: "heading" | "subheading" | "super";
  children?: React.ReactNode;
}

export function Text({
  as: Component = "p",
  className = "",
  size = "body",
  children,
  ...props
}: TextProps) {
  const sizes = {
    body: "text-base font-300",
    super: "text-3xl md:text-4xl font-400",
    button: "text-base font-500",
    nav: "text-sm font-500",
  };

  const styles = `${sizes[size]} ${className}`;

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  );
}

export function Heading({
  as: Component = "h2",
  className = "",
  size = "heading",
  children,
  ...props
}: HeadingProps) {
  const sizes = {
    heading: "text-lg md:text-3xl font-600 md:font-500 font-dmsans",
    subheading: "text-base md:text-md font-700 md:font-600",
    super: "text-md md:text-xl font-600",
  };

  const styles = `${sizes[size]} ${className}`;

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  );
}
