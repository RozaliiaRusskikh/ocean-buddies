import Link from "next/link";
import { Text } from "./Text";

interface NavLinkProps {
  title: string;
  path: string;
  pathname: string;
}

export default function NavLink({ title, path, pathname }: NavLinkProps) {
  const activeStyles =
    "border-b-2 border-secondary transition-all duration-200 hover:text-background hover:border-primary";

  const inactiveStyles = "hover:text-background";

  const styles = `uppercase ${
    path === pathname ? activeStyles : inactiveStyles
  }`;
  return (
    <Text as="li" size="nav">
      <Link href={path} className={styles}>
        {title}
      </Link>
    </Text>
  );
}
