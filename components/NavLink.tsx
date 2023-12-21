import Link from "next/link";
import { Text } from "./Text";

interface NavLinkProps {
  title: string;
  path: string;
  pathname: string;
}

export default function NavLink({ title, path, pathname }: NavLinkProps) {
  const activeStyles =
    "text-primary  border-b-2 border-secondary transition-all duration-200 hover:text-secondary hover:border-primary";

  const inactiveStyles = "hover:text-secondary";

  const styles = `text-primary uppercase ${
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
