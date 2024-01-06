interface TextProps {
  as?: React.ElementType;
  className?: string;
  size?: "body" | "super" | "button" | "nav";
  children?: React.ReactNode;
}

interface HeadingProps {
  as?: React.ElementType;
  className?: string;
  size?: "heading" | "subheading";
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
    body: "text-base font-light",
    super: "text-lg md:text-xl font-semibold",
    button: "text-base md:text-lg font-semibold",
    nav: "text-sm md:text-base font-medium",
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
    heading: "text-3xl md:text-5xl font-bold",
    subheading: "text-lg md:text-3xl font-bold",
  };

  const styles = `${sizes[size]} ${className}`;

  return (
    <Component {...props} className={styles}>
      {children}
    </Component>
  );
}
