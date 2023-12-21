export function LayoutX({ children }: { children: React.ReactNode }) {
  const mobile = "px-4";
  const tablet = "md:px-8";
  const desktop = "max-w-[1180px]";

  const styles = `w-full ${mobile} ${tablet}`;
  const innerStyles = `mx-auto ${desktop}`;
  return (
    <section className={styles}>
      <div className={innerStyles}>{children}</div>
    </section>
  );
}
