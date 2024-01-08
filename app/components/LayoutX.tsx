import React from "react";

interface LayoutXProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function LayoutX({ children, className, style }: LayoutXProps) {
  const mobile = "px-4";
  const tablet = "md:px-8";
  const desktop = "max-w-[1180px]";

  const styles = `w-full ${mobile} ${tablet} ${className || ""}`;
  const innerStyles = `mx-auto ${desktop}`;

  return (
    <section className={styles} style={style}>
      <div className={innerStyles}>{children}</div>
    </section>
  );
}
