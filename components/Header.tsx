import { LayoutX } from "./LayoutX";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import logo from "@/public/asests/logo.png";

interface HeaderProps {
  pathname: string;
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const navMenu = [
    { title: "Join", path: "/signup" },
    { title: "Login", path: "/login" },
  ];
  return (
    <header className="bg-primary text-secondary">
      <LayoutX>
        <div className="h-20 flex items-center justify-between gap-12">
          <Link href="/">
            <Image src={logo} alt="Ocean Buddies Logo" height={36} width={36} />
            Ocean Buddies
          </Link>
          <nav className="max-w-[585px] w-full">
            <ul className="flex justify-between w-full">
              {navMenu.map((navLink, i) => (
                <NavLink
                  key={i}
                  title={navLink.title}
                  path={navLink.path}
                  pathname={pathname}
                />
              ))}
            </ul>
          </nav>
        </div>
      </LayoutX>
    </header>
  );
};

export default Header;
