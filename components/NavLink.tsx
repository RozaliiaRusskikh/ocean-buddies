import Link from "next/link";
import { Text } from "./Text";

interface NavLinkProps {
  title: string;
  path: string;
  pathname: string;
}

export default function NavLink({ title, path, pathname }: NavLinkProps) {
  const activeStyles = `text-red-100`;

  const inactiveStyles = `text-green-100`;

  const styles = `text-secondary uppercase ${
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
